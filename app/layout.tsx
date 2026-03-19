import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WIDIH — Digital Transformation untuk UMKM Indonesia",
  description:
    "WIDIH (Wibowo Digital Hub)提供solusi lengkap transformasi digital untuk UMKM Indonesia. WhatsApp Automation, Website, Digital Marketing, dan System Database.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="antialiased bg-white text-dark overflow-x-hidden">{children}</body>
    </html>
  );
}
