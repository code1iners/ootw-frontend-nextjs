import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/app/globals.css";

import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OOTW",
  description: "Outfit of the weather.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#000000" />
      </head>

      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
