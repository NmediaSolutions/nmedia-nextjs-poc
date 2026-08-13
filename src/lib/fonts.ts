import { Rubik, Bitter } from "next/font/google";

// Polices reproduites depuis nuxt.config.ts (module @nuxtjs/google-fonts)
// Rubik : texte courant / Bitter : titres (h1-h4)
export const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});
