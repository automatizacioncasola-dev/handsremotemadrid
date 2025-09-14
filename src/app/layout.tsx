import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://handsremotemadrid.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hands Remote Madrid — Remote Hands 24/7",
    template: "%s | Hands Remote Madrid",
  },
  description:
    "Ingenieros de redes y fibra 24/7 en los centros de datos de Madrid.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Hands Remote Madrid — Remote Hands 24/7",
    description:
      "Ingenieros de redes y fibra 24/7 en los centros de datos de Madrid.",
    url: "/",
    siteName: "Hands Remote Madrid",
    images: [
      { url: "/og", width: 1200, height: 630, alt: "Hands Remote Madrid" },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hands Remote Madrid — Remote Hands 24/7",
    description:
      "Ingenieros de redes y fibra 24/7 en los centros de datos de Madrid.",
    images: ["/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

