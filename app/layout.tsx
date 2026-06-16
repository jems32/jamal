import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jemal Aman Portfolio",
  description: "Software Engineer & Flutter Developer",
  keywords: [
    "Jemal Aman",
    "Flutter Developer",
    "Software Engineer",
    "Next.js",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
