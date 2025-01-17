import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/header/header";
import {Roboto} from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '300',
})
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Projeto: Repositórios Github",
  description: "uma demo de API Next.js",
  keywords: ['API', 'Github', 'repositórios'],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no', // a meta tag de viewport
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} ${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}
