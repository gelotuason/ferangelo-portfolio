import type { Metadata } from "next";
import "./globals.css";
import { poppins } from '@/app/ui/fonts';
import Header from '@/app/ui/header/header';

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
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
