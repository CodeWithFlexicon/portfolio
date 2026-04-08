import type { Metadata } from "next";
import { Rationale } from "next/font/google";
import "./globals.css";

const rationale = Rationale({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: "Felix Chen: Software Engineer",
  description: "Personal Website of Felix Chen",
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
      <body className={`${rationale.className} antialiased leading-8 overflow-x-hidden bg-white text-black dark:bg-dark-theme dark:text-white transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}
