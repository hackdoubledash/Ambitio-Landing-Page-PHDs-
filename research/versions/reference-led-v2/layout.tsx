import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ambitio | Find your PhD path",
  description:
    "Explore PhD programmes, supervisors and funding, then plan your applications with Ambitio.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
