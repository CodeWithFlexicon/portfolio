import type { Metadata } from "next";
import { Rationale } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const rationale = Rationale({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Felix Chen: Software Engineer",
  description: "Personal Website of Felix Chen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const stored = localStorage.getItem('theme');
                  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                  if (stored === 'dark' || (!stored && systemDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${rationale.className} antialiased leading-8 overflow-x-hidden bg-white text-black dark:bg-dark-theme dark:text-white transition-colors duration-300`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
