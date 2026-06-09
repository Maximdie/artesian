import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCallButton } from "@/components/FloatingCallButton";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://artesian-plus.ru"),
  title: {
    default: "Бурение артезианских скважин в Бронницах — за 1 день | Артезианс-плюс",
    template: "%s | Артезианс-плюс",
  },
  description:
    "Артезианские скважины под ключ за 1 день. Зона работ: Бронницы, Раменское, Жуковский, Коломна и весь юго-восток Подмосковья в радиусе 70 км. Гарантия.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://artesian-plus.ru",
    siteName: "Артезианс-плюс",
    title: "Бурение артезианских скважин в Бронницах — за 1 день",
    description:
      "Артезианские скважины под ключ за 1 день. Бронницы и 70 км. Сертифицированные трубы. Гарантия.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Артезианс-плюс" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col text-text-main bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
