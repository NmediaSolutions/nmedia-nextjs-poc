import Image from "next/image";
import type { ReactNode } from "react";
import { assetPath } from "@/lib/asset-path";

/**
 * Carte doree pleine largeur (".yellowBanner" du site source), utilisee pour
 * mettre en avant l'expertise IA sur l'accueil.
 *
 * Mesures relevees a 1440px de large :
 *  - carte      : 1260x783, border-radius 8px, fond or (#B78F2B) + grain
 *  - colonne G  : 50%, padding 120px 90px 90px, texte blanc en font-weight 600
 *  - colonne D  : 50%, image en object-fit cover avec mix-blend-mode: multiply
 *                 (c'est ce mode de fusion qui donne la teinte doree a la photo)
 */
export default function GoldCard({
  image,
  imageAlt,
  children,
}: {
  image: string;
  imageAlt: string;
  children: ReactNode;
}) {
  return (
    <div className="grain relative overflow-hidden rounded-md bg-primary">
      <div className="relative grid grid-cols-1 lg:grid-cols-2">
        <div className="px-90 pb-90 pt-120 font-semibold text-white tablet:px-32 tablet:pb-48 tablet:pt-48">
          {children}
        </div>
        <div className="relative min-h-[420px] mix-blend-multiply tablet:min-h-[280px]">
          <Image
            src={assetPath(image)}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
