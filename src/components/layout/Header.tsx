"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { nav } from "@/content/nav";
import { getAlternatePath } from "@/lib/alternates";
import Logo from "@/components/ui/Logo";

/**
 * Header flottant (position fixed) semi-transparent avec flou d'arriere-plan,
 * reproduisant le comportement du site source : le header ne pousse jamais le
 * contenu, il se superpose a la banniere sombre de chaque page. Le fond
 * s'assombrit legerement au defilement pour rester lisible au-dessus du
 * contenu clair plus bas dans la page.
 */
export default function Header({ locale }: { locale: Locale }) {
  const content = nav[locale];
  const pathname = usePathname();
  const alternateHref = getAlternatePath(pathname || "/");
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/30 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="wrapper flex items-center justify-between py-24 gap-24">
        <Link href={content.home.href} className="shrink-0 no-underline text-white">
          <Logo className="h-[44px] w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-28" aria-label="Navigation principale">
          <ul className="flex items-center gap-28 list-none m-0 p-0">
            {content.main.map((l) => {
              if (l.href === "/services" || l.href === "/en-ca/services") {
                return (
                  <li
                    key={l.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      type="button"
                      className="no-underline text-white font-normal flex items-center gap-4 hover:text-primary"
                      aria-expanded={servicesOpen}
                      onClick={() => setServicesOpen((v) => !v)}
                    >
                      {l.title}
                      <span aria-hidden>▾</span>
                    </button>
                    {servicesOpen && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-16 w-[560px]">
                        <div className="bg-white shadow-xl rounded-md border border-border p-24 grid grid-cols-2 gap-24 text-text">
                          <div>
                            <p className="text-12 uppercase tracking-wide text-label font-semibold mb-12">
                              {content.catMain}
                            </p>
                            <ul className="list-none p-0 m-0 space-y-8">
                              {content.servicesMain.map((s) => (
                                <li key={s.id}>
                                  <Link href={s.href} className="no-underline text-text hover:text-primary">
                                    {s.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-12 uppercase tracking-wide text-label font-semibold mb-12">
                              {content.catComplementary}
                            </p>
                            <ul className="list-none p-0 m-0 space-y-8">
                              {content.servicesComplementary.map((s) => (
                                <li key={s.id}>
                                  <Link href={s.href} className="no-underline text-text hover:text-primary">
                                    {s.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            <Link href={content.allServices.href} className="inline-block mt-16 font-semibold">
                              {content.allServices.title}
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                );
              }
              return (
                <li key={l.href}>
                  <Link href={l.href} className="no-underline text-white font-normal hover:text-primary">
                    {l.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:flex items-center gap-20">
          <Link
            href={alternateHref}
            className="no-underline text-white font-semibold text-14"
            aria-label="Changer de langue"
          >
            {content.langSwitchLabel}
          </Link>
          <Link href={content.contactUs.href} className="btn-primary no-underline">
            {content.contactUs.title}
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden flex flex-col gap-4 p-8"
          aria-label="Menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="block w-24 h-2 bg-white" />
          <span className="block w-24 h-2 bg-white" />
          <span className="block w-24 h-2 bg-white" />
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-black">
          <nav className="wrapper py-16" aria-label="Navigation mobile">
            <ul className="list-none p-0 m-0 space-y-16">
              {content.main.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="no-underline text-white font-medium">
                    {l.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={content.contactUs.href} className="btn-primary no-underline">
                  {content.contactUs.title}
                </Link>
              </li>
              <li>
                <Link href={alternateHref} className="no-underline text-white font-semibold">
                  {content.langSwitchLabel}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
