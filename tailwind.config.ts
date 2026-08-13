import type { Config } from "tailwindcss";

// Design tokens extraits de siteweb-nmedia (src/web/assets/style/global/_variables.scss)
// Reproduction fidele de la palette, typographie et espacements du site Nuxt actuel.
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Le systeme d'espacement du design source correspond a une echelle en px
    // reelle (spacing-24 = 24px), pas a l'echelle rem par defaut de Tailwind.
    // On remplace donc theme.spacing (plutot que de l'etendre) pour que les
    // utilitaires (p-24, gap-36, mt-96, etc.) collent exactement aux maquettes.
    spacing: {
      0: "0px",
      px: "1px",
      4: "4px",
      8: "8px",
      10: "10px",
      12: "12px",
      16: "16px",
      20: "20px",
      24: "24px",
      28: "28px",
      32: "32px",
      36: "36px",
      44: "44px",
      48: "48px",
      64: "64px",
      72: "72px",
      90: "90px",
      96: "96px",
      104: "104px",
      120: "120px",
    },
    extend: {
      colors: {
        text: "#4A4640",
        text2: "#FBF9F7",
        label: "#969088",
        primary: {
          DEFAULT: "#B78F2B", // $c1
          hover: "#8C6E21", // $c1h
        },
        beige: "#F7F5F2",
        grey: {
          1: "#ACACA8",
          2: "#8C8C88",
          3: "#7C7C7C",
          4: "#61615D",
          5: "#373733",
        },
        black: "#1E1B16",
        valid: {
          DEFAULT: "#27D086",
          hover: "#17784E",
        },
        warning: {
          DEFAULT: "#FF8F4F",
          hover: "#E65400",
        },
        error: {
          DEFAULT: "#E9594C",
          hover: "#B61111",
        },
        border: "#CFCFD3",
        tabSelected: "#EEECEA",
      },
      fontFamily: {
        rubik: ["var(--font-rubik)", "sans-serif"],
        bitter: ["var(--font-bitter)", "serif"],
      },
      fontSize: {
        // Valeurs px reelles (le site source utilise un root font-size a 62.5%
        // avec des valeurs rem base-10 ; ici on exprime directement les px cibles)
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        21: "21.33px",
        22: "22px",
        24: "24px",
        28: "28.43px",
        37: "37.9px",
        50: "50.52px",
        67: "67.34px",
      },
      borderRadius: {
        DEFAULT: "4px",
        md: "8px",
      },
      screens: {
        mobile: { max: "767px" },
        tablet: { max: "1024px" },
        smallDesktop: { max: "1400px" },
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      maxWidth: {
        reduced: "1236px",
      },
    },
  },
  plugins: [],
};
export default config;
