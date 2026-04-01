import type { Metadata } from "next";
import { Rationale } from "next/font/google";
import "./globals.css";

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
      className={`${rationale.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
