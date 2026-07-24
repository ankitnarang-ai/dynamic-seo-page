import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCities, getNavServices, getPageData } from "@/lib/content";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

// Serve any /service/location combo at request time. NO generateStaticParams, so a new
// data/services/*.json (or a new city in cities.json) works with no rebuild (scalability).
export const dynamicParams = true;

type Params = { service: string; location: string };

// SEO comes entirely from JSON (TC-13): static title, city-templated desc/keywords,
// canonical, robots, Open Graph, Twitter, and per-city hreflang alternates.
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { service, location } = await params;
  const page = getPageData(service, location);
  if (!page) return { title: "Not found" };

  const { seo } = page.data;

  // Canonical is built from the real lowercase route slugs (not the token-filled
  // JSON string, whose {city} resolves to the display label) so it always matches the URL.
  const canonical = `${site.url}/${service}/${location}`;

  // hreflang: one entry per city (its locale), plus x-default → /{service}.
  const languages: Record<string, string> = {};
  for (const [slug, city] of Object.entries(getAllCities())) {
    languages[city.locale] = `${site.url}/${service}/${slug}`;
  }
  languages["x-default"] = `${site.url}/${service}`;

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    robots: seo.robots ?? "index, follow",
    alternates: { canonical, languages },
    openGraph: {
      title: seo.og?.title ?? seo.metaTitle,
      description: seo.og?.description ?? seo.metaDescription,
      url: canonical,
      siteName: seo.og?.siteName ?? site.name,
      type: "website",
      images: seo.og?.image
        ? [
            {
              url: seo.og.image,
              width: seo.og.imageWidth ?? 1200,
              height: seo.og.imageHeight ?? 630,
              alt: seo.og?.title ?? seo.metaTitle,
            },
          ]
        : undefined,
    },
    twitter: {
      card: (seo.twitter?.card as "summary_large_image") ?? "summary_large_image",
      title: seo.twitter?.title ?? seo.metaTitle,
      description: seo.twitter?.description ?? seo.metaDescription,
      images: seo.twitter?.image ? [seo.twitter.image] : undefined,
    },
  };
}

// THE single reusable template — every /service/location page renders through here (TC-01/05).
export default async function ServiceLocationPage({ params }: { params: Promise<Params> }) {
  const { service, location } = await params;
  const page = getPageData(service, location);
  if (!page) notFound(); // invalid service or city → custom 404 (TC-14)

  const { data } = page;
  const navServices = getNavServices(); // JSON-generated Services → cities menu

  return (
    <>
      <Header brand={site.name} services={navServices} />
      <main>
        <Hero hero={data.hero} />
        <LogoStrip logos={data.logos} />
        {(data.sections ?? []).map((section, i) => {
          const theme = i % 2 === 0 ? "light" : "dark";
          return (
            <div key={i} data-theme={theme} className="bg-background text-foreground transition-colors duration-300">
              <Section section={section} />
            </div>
          );
        })}
      </main>
      <Footer brand={site.name} />
    </>
  );
}
