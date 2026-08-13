import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { assetPath } from "@/lib/asset-path";

/**
 * Banniere partagee (accueil, services, projets, blogue, contact).
 *
 * Mesures relevees sur le site source a 1440px de large :
 *  - variante "default" (accueil)  : hauteur 980px, padding-top 192px
 *  - variante "small" (pages int.) : hauteur ~360px
 *  - image de texture a droite : 605px de large (42%) x 768px de haut,
 *    ancree en haut a droite, avec degrade sombre sur son bord gauche
 * Le header (position fixed) flotte par-dessus cette banniere, d'ou le
 * padding-top important qui evite que le contenu passe sous le header.
 */
export default function Banner({
  image,
  imageAlt = "",
  breadcrumbLabel,
  breadcrumbHref,
  size = "small",
  children,
}: {
  image: string;
  imageAlt?: string;
  breadcrumbLabel?: string;
  breadcrumbHref?: string;
  size?: "default" | "small";
  children: ReactNode;
}) {
  const isDefault = size === "default";

  return (
    <div
      className={`relative overflow-hidden bg-black text-white ${
        isDefault ? "min-h-[980px] pt-[192px] tablet:min-h-0 tablet:pt-120" : "min-h-[360px] pt-[144px]"
      }`}
    >
      {/* Decoration graphique en haut a gauche */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={assetPath("/images/pattern-d.png")}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-0 h-[576px] w-[672px] select-none opacity-90"
      />

      {/* Image de texture ancree en haut a droite */}
      <div
        className={`absolute right-0 top-0 z-[1] w-[42%] overflow-hidden rounded-bl-md tablet:hidden ${
          isDefault ? "h-[768px]" : "h-[384px]"
        }`}
      >
        <div className="absolute inset-0 z-[1] bg-black mix-blend-color" />
        <div className="absolute left-0 top-0 z-[2] h-full w-[288px] bg-gradient-to-r from-black to-transparent opacity-85" />
        <Image src={assetPath(image)} alt={imageAlt} fill priority className="object-cover object-left-top" />
      </div>

      <div className="wrapper relative z-[3] flex h-full items-center">
        <div className="relative z-[4] w-full max-w-[1088px] pb-64">
          {breadcrumbLabel && breadcrumbHref && (
            <p className="mb-16 text-14">
              <Link href={breadcrumbHref} className="text-white/70 no-underline hover:underline">
                {breadcrumbLabel}
              </Link>
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
