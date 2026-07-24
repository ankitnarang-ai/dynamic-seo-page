import type { Hero as HeroData } from "@/lib/types";
import Container from "./Container";
import SafeImage from "./SafeImage";

// Hero title = prefix + green highlight span + suffix (all from JSON, tokens resolved).
export default function Hero({ hero }: { hero: HeroData }) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <Container className="grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
        <div>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {hero.titlePrefix}
            <span className="text-accent">{hero.highlight}</span>
            {hero.titleSuffix}
          </h1>

          {hero.description && (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">{hero.description}</p>
          )}

          {hero.bullets && hero.bullets.length > 0 && (
            <ul className="mt-6 space-y-2.5">
              {hero.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/90">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-none text-accent"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}

          {hero.ctas && hero.ctas.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-4">
              {hero.ctas.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  className={
                    c.variant === "ghost"
                      ? "rounded-full border border-border bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-surface-2"
                      : "rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
                  }
                >
                  {c.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {hero.image && (
          <div className="relative">
            <SafeImage
              src={hero.image}
              alt={hero.imageAlt ?? ""}
              loading="eager"
              className="w-full rounded-2xl border border-border/60"
            />
          </div>
        )}
      </Container>
    </section>
  );
}
