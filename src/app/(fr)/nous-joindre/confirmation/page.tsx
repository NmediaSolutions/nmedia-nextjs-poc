import Link from "next/link";
import { contact } from "@/content/contact";

const c = contact.fr;

export default function ContactConfirmationPage() {
  return (
    <section className="wrapper py-96 tablet:py-64 text-center reduced mx-auto">
      <h1>{c.confirmationTitle}</h1>
      <p className="text-18">{c.confirmationText}</p>
      <Link href="/" className="btn-primary no-underline inline-block mt-16">
        {c.confirmationBtnText}
      </Link>
    </section>
  );
}
