import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ambitio | A PhD dashboard for the decisions ahead",
  description:
    "Explore PhD programmes, supervisors and funding, then understand your research profile with Ambitio.",
  openGraph: {
    title: "Ambitio | A PhD dashboard for the decisions ahead",
    description: "Explore programmes, supervisors and funding in one PhD planning dashboard.",
    type: "website",
  },
  other: {
    "page-type": "software",
    "site-kind": "software",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-type="software" data-radius="soft">
      <body>{children}</body>
    </html>
  );
}
