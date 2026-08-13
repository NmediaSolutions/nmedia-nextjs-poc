import { NextResponse } from "next/server";
import { z } from "zod";
import { createDynamicsLead, serviceMapping } from "@/lib/dynamics";
import { sendNotificationEmail } from "@/lib/email";
import { verifyRecaptcha } from "@/lib/recaptcha";

// Reproduit le comportement de components/Form/Contact.vue du site source :
// 1) creation d'un lead Dynamics 365 (si "J'ai un projet" + service selectionne)
// 2) envoi d'une notification courriel a l'equipe concernee
// Voir src/lib/dynamics.ts et src/lib/email.ts pour le detail des contrats.

const leadSchema = z.object({
  requestType: z.enum(["project", "sponsor", "logo", "question"]),
  service: z.string().optional().default(""),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  businessName: z.string().optional().default(""),
  phone: z.string().min(7),
  email: z.string().email(),
  message: z.string().optional().default(""),
  notifyEmail: z.string().email(),
  reasonLabel: z.string(),
  captchaToken: z.string().nullable(),
});

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = leadSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_payload", details: parsed.error.flatten() }, { status: 400 });
  }

  const data = parsed.data;

  const captchaValid = await verifyRecaptcha(data.captchaToken);
  if (!captchaValid) {
    return NextResponse.json({ error: "invalid_captcha" }, { status: 400 });
  }

  try {
    const tasks: Promise<unknown>[] = [];

    if (data.requestType === "project" && data.service) {
      const subject = serviceMapping[data.service] ?? data.service;
      tasks.push(
        createDynamicsLead({
          emailaddress1: data.email,
          subject,
          firstname: data.firstName,
          lastname: data.lastName,
          telephone1: data.phone,
          companyname: data.businessName,
          description: data.message,
        })
      );
    }

    tasks.push(
      sendNotificationEmail({
        to: data.notifyEmail,
        subject: `SiteWeb Nmédia - Contact pour : ${data.reasonLabel}`,
        text:
          `Prénom : ${data.firstName}\n` +
          `Nom : ${data.lastName}\n` +
          `Nom de l'entreprise : ${data.businessName}\n` +
          `Courriel : ${data.email}\n` +
          `Téléphone : ${data.phone}\n\n` +
          `Raison de contact : ${data.reasonLabel}` +
          (data.requestType === "project" ? `\nService requis : ${data.service}` : "") +
          `\n\nMessage :\n${data.message}`,
      })
    );

    await Promise.all(tasks);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[api/leads] Failed to process lead", error);
    return NextResponse.json({ error: "internal_error" }, { status: 500 });
  }
}
