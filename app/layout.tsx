import type { Metadata } from "next";
import "./globals.css";
import { poppins } from '@/app/ui/fonts';
import Nav from '@/app/ui/header/nav';
import Footer from "./footer";
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: "Ferangelo Tuason",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} antialiased h-screen container`}>
        <Nav />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
