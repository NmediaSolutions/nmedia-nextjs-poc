import nodemailer from "nodemailer";

// Notification courriel des formulaires. Le site source deleguait cet envoi
// a un endpoint custom du CMS Strapi (/api/email) ; sans CMS, on envoie
// directement via SMTP (nodemailer). Sans configuration (.env), le message
// est journalise localement au lieu d'echouer — pratique pour developper
// sans acces aux vraies infos SMTP.

function isSmtpConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD);
}

export async function sendNotificationEmail(params: {
  to: string;
  from?: string;
  subject: string;
  text: string;
}) {
  if (!isSmtpConfigured()) {
    console.warn("[email] SMTP non configuré (.env) — courriel journalisé localement :", params);
    return { skipped: true };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  await transporter.sendMail({
    to: params.to,
    from: params.from ?? "info@nmedia.ca",
    subject: params.subject,
    text: params.text,
  });

  return { skipped: false };
}
