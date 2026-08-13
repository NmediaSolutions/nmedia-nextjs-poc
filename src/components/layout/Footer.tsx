import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { nav } from "@/content/nav";
import Logo from "@/components/ui/Logo";

export default function Footer({ locale }: { locale: Locale }) {
  const content = nav[locale];

  return (
    <footer className="bg-black text-white">
      <div className="wrapper py-64 grid grid-cols-1 lg:grid-cols-4 gap-48">
        <div>
          <Link href={content.home.href} className="no-underline text-white">
            <Logo className="h-32 w-auto" />
          </Link>
        </div>

        <div>
          <p className="font-semibold mb-16">{content.footerServicesLabel}</p>
          <ul className="list-none p-0 m-0 space-y-8">
            {content.servicesMain.map((s) => (
              <li key={s.id}>
                <Link href={s.href} className="no-underline text-grey-1 hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-16">{content.footerCoordLabel}</p>
          <address className="not-italic text-grey-1 leading-[1.6]">
            {content.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <a href={content.phone.href} className="block text-white mt-8">
              {content.phone.text}
            </a>
            <span className="block">
              {content.tollFree.label}{" "}
              <a href={content.tollFree.href} className="text-white">
                {content.tollFree.text}
              </a>
            </span>
            <a href={`mailto:${content.email}`} className="block text-white mt-8">
              {content.email}
            </a>
          </address>
        </div>

        <div className="bg-primary rounded-md p-24">
          <h3 className="font-bitter text-18 font-semibold mb-12 text-white">{content.footerBox.title}</h3>
          <p className="text-white text-14 mb-16">{content.footerBox.text}</p>
          <a href={content.footerBox.linkHref} className="btn bg-black no-underline">
            {content.footerBox.linkText}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrapper py-24 flex flex-col md:flex-row items-center justify-between gap-16 text-14 text-grey-1">
          <p className="m-0">
            © 2023 <Link href={content.home.href} className="text-grey-1">Nmédia</Link> {content.copyright}
          </p>
          <ul className="list-none p-0 m-0 flex gap-24">
            {content.footerLegal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="no-underline text-grey-1 hover:text-white">
                  {l.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
