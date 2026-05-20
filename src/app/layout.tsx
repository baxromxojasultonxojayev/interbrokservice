import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "INTERBROKSERVIS — Лицензированный таможенный брокер в Узбекистане",
  description: "Профессиональное таможенное оформление грузов в Узбекистане. Растаможка и затаможка любой сложности — быстро, законно и прозрачно. Услуги таможенного декларирования, аудита и сертификации.",
  keywords: ["таможенный брокер", "растаможка", "затаможка", "Узбекистан", "таможенное оформление", "сертификация", "декларирование"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${outfit.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
