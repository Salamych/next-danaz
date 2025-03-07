import {Poppins} from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/shared";
import { Toaster } from "react-hot-toast";
import NextTopLoader from 'nextjs-toploader';


const poppins = Poppins({
  subsets: ['latin'],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link data-rh="true" rel="icon" href="/sofa.png" />
      </head>
      <body className={poppins.className}>
        <NextTopLoader />
        <Toaster />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
