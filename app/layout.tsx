import type { Metadata } from "next";
import "./globals.css";
import { poppins } from '@/app/components/fonts';
import { Header } from "./components/header/header";
import Footer from "./footer";
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: "Ferangelo Tuason",
  description: "Portfolio | Full Stack Developer | HTML, CSS, JavaScript, ReactJS, NextJS, Firebase, Tailwind, Material-UI, Git, GitHub, Web Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} antialiased h-lvh container`}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
