import Link from "next/link";
import { getAllCities, getAllServiceSlugs } from "@/lib/content";
import { site } from "@/lib/site";
import Container from "@/components/Container";

// Minimal home / index — lists every service × city combination available from JSON,
// so newly added services or cities appear here automatically.
export default function Home() {
  const services = getAllServiceSlugs();
  const cities = Object.keys(getAllCities());

  return (
    <main className="flex-1 py-16">
      <Container>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{site.name}</h1>
        <p className="mt-3 max-w-xl text-base text-muted">
          Dynamic, JSON-driven SEO landing pages. Every page below is rendered by a single
          template from <code className="text-accent">/{"{service}"}/{"{location}"}</code>.
        </p>

        <div className="mt-10 space-y-10">
          {services.map((service) => (
            <section key={service}>
              <h2 className="text-lg font-semibold capitalize">{service.replace(/-/g, " ")}</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {cities.map((city) => (
                  <li key={city}>
                    <Link
                      href={`/${service}/${city}`}
                      className="inline-block rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
                    >
                      /{service}/{city}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          {services.length === 0 && (
            <p className="text-sm text-muted">No services found in data/services.</p>
          )}
        </div>
      </Container>
    </main>
  );
}
