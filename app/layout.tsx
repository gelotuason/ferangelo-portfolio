import type { Metadata } from "next";
import "./globals.css";
import { poppins } from '@/app/ui/fonts';
import Nav from '@/app/ui/header/nav';

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
      </body>
    </html>
  );
}
