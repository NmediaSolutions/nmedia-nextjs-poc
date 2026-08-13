import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { Partner } from "@/content/home";
import { assetPath } from "@/lib/asset-path";

/**
 * Bandeau de cartes partenaires.
 *
 * Mesures relevees sur le site source (.partner) :
 *  - carte  : fond blanc, border-radius 8px, padding 48px, ~275x183
 *  - logo   : ~175x83, object-fit contain
 *  - mention: "Depuis AAAA" en 16px, couleur #969088
 *
 * Le site source utilise un carrousel JS avec fleches ; on reproduit le
 * defilement continu en CSS (liste dupliquee + translation), ce qui evite une
 * dependance JS et respecte prefers-reduced-motion.
 */
export default function PartnersMarquee({
  partners,
  locale,
}: {
  partners: Partner[];
  locale: Locale;
}) {
  const sinceLabel = locale === "fr" ? "Depuis" : "Since";
  // Liste dupliquee pour une boucle sans couture
  const loop = [...partners, ...partners];

  return (
    <div className="relative overflow-hidden">
      <ul className="marquee flex w-max list-none items-stretch gap-32 p-0 m-0">
        {loop.map((p, i) => (
          <li
            key={`${p.name}-${i}`}
            className="flex h-[183px] w-[275px] shrink-0 flex-col items-center justify-center gap-16 rounded-md bg-white px-48 py-32"
          >
            <Image
              src={assetPath(p.logo)}
              alt={p.name}
              width={175}
              height={64}
              className="h-[64px] w-[175px] object-contain"
            />
            <span className="text-16 text-label">
              {sinceLabel} {p.since}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
