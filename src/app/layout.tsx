import type {Metadata} from "next";

import {Inter} from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Card Gallery",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} grid min-h-screen grid-rows-[70px,1fr]`}>
        <header className="flex w-full items-center px-10">
          <Link href="/">
            <h1 className="border-b-4 border-b-slate-500 p-2 text-2xl transition-colors hover:bg-slate-500">
              Card Gallery
            </h1>
          </Link>
        </header>
        <main className="m-auto mt-5 w-full max-w-screen-xl px-10">{children}</main>
      </body>
    </html>
  );
}
