import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
};

// One site-wide Organization JSON-LD, injected once here (not per-page).
const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: site.logo,
  description: site.description,
  makesOffer: site.services.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        {children}
      </body>
    </html>
  );
}
