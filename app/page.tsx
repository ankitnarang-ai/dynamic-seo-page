import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllCities,
  getAllServiceSlugs,
  getNavServices,
  getPageData,
} from "@/lib/content";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

// The home page renders a real landing page directly (not an index of links).
// It uses the first available service + first city as the default, and all
// navigation happens through the navbar Services → cities dropdown.
function getDefault(): { service: string; location: string } | null {
  const slugs = getAllServiceSlugs();
  const service = slugs.includes("virtual-reality") ? "virtual-reality" : slugs[0];
  const location = Object.keys(getAllCities())[0];
  if (!service || !location) return null;
  return { service, location };
}

export async function generateMetadata(): Promise<Metadata> {
  const def = getDefault();
  const page = def && getPageData(def.service, def.location);
  if (!page) return { title: site.name };

  const { seo } = page.data;
  const canonical = site.url;

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    robots: seo.robots ?? "index, follow",
    alternates: { canonical },
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

export default function Home() {
  const def = getDefault();
  const page = def && getPageData(def.service, def.location);
  if (!page) notFound(); // no services/cities configured

  const { data } = page;
  const navServices = getNavServices();

  return (
    <>
      <Header brand={site.name} services={navServices} />
      <main>
        <Hero hero={data.hero} />
        <LogoStrip logos={data.logos} />
        {(data.sections ?? []).map((section, i) => {
          const theme = i % 2 === 0 ? "light" : "dark";
          return (
            <div
              key={i}
              data-theme={theme}
              className="bg-background text-foreground transition-colors duration-300"
            >
              <Section section={section} />
            </div>
          );
        })}
      </main>
      <Footer brand={site.name} />
    </>
  );
}
