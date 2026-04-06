import type { Metadata } from "next";
import { Rationale } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar/navbar";

const rationale = Rationale({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: "Felix Chen Portfolio",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
    >
      <body className={`${rationale.className} antialiased leading-8 overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
