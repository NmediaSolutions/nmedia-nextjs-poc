import Image from "next/image";
import Link from "next/link";
import type { HomeCard } from "@/content/home";
import { assetPath } from "@/lib/asset-path";

/**
 * Carte "thumbnail" (projet ou article), reproduisant la structure et l'ordre
 * exacts du site source (.thumbnails-item) releves au navigateur :
 *
 *  - cadre d'image ratio 3:2, coins arrondis, degrade sombre vers le bas
 *  - encoche noire 96x96 (#1E1B16) dans le coin inferieur droit, qui deborde
 *    sous l'image (.thumbnails-shape::before)
 *  - bloc de texte remontant de 40px par-dessus le bas de l'image, avec
 *    padding-right 152px pour laisser la place a l'encoche
 *  - ordre du texte : eyebrow (13px Rubik MAJ, gris) > heading (27px Bitter)
 *    > tag optionnel (puce beige, articles seulement)
 */
export default function Card({ card, priority = false }: { card: HomeCard; priority?: boolean }) {
  return (
    <div className="group">
      <Link href={card.href} className="block no-underline">
        <div className="relative pb-96">
          <div className="relative aspect-[3/2] overflow-hidden rounded-md">
            <Image
              src={assetPath(card.image)}
              alt={card.imageAlt}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
            />
            {/* Degrade sombre vers le bas du cadre */}
            <div className="pointer-events-none absolute bottom-0 left-0 h-[192px] w-full bg-gradient-to-b from-transparent to-black" />
          </div>

          {/* Encoche noire debordant sous l'image, coin inferieur droit */}
          <div className="pointer-events-none absolute bottom-0 right-0 z-[1] h-96 w-96 bg-black" />
        </div>

        <div className="relative z-[2] -mt-[40px] mb-[-40px] pr-[152px] tablet:pr-64">
          <p className="m-0 mb-16 text-[clamp(12px,0.9vw,16px)] uppercase leading-[1.4] tracking-[0.08em] text-label">
            {card.eyebrow}
          </p>
          <h3 className="m-0 font-bitter text-[clamp(21px,1.9vw,37px)] font-normal leading-[1.15] text-text transition-colors duration-[800ms] group-hover:text-primary">
            {card.heading}
          </h3>
          {card.tag && (
            <span className="mt-28 inline-block rounded bg-tabSelected px-12 py-12 text-16 uppercase leading-none tracking-[0.08em] text-black">
              {card.tag}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
}
