import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zain's Website Resume",
  description: "A place to showcase my skills in all kinds of software development!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.NODE_ENV === "development"; // Check if in development environment

  return (
    <html lang="en">
      <head>
        {/* Inject meta tags */}
        {isDev && (
        <meta
        httpEquiv="Content-Security-Policy"
        content="default-src *; script-src * 'unsafe-inline' 'unsafe-eval'; style-src * 'unsafe-inline'; font-src *"
        />
        )}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
