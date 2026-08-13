import type { Metadata } from "next";
import { rubik, bitter } from "@/lib/fonts";
import { htmlLang } from "@/lib/i18n";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Gtm from "@/components/Gtm";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nmedia.ca"),
};

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={htmlLang.en} className={`${rubik.variable} ${bitter.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <Gtm />
        <Header locale="en" />
        <main className="flex-1">{children}</main>
        <Footer locale="en" />
      </body>
    </html>
  );
}
