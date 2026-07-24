import type { Section } from "@/lib/types";
import Container from "../Container";
import SafeImage from "../SafeImage";
import SectionHeading from "./SectionHeading";

type Data = Extract<Section, { type: "testimonials" }>;

export default function Testimonials({ data }: { data: Data }) {
  if (!data.items || data.items.length === 0) return null;
  return (
    <section className="py-20">
      <Container>
        <SectionHeading heading={data.heading} subheading={data.subheading} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {data.items.map((t, i) => (
            <figure key={i} className="relative rounded-2xl border border-border bg-surface p-8 shadow-sm transition-transform hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-accent to-accent-strong" />
              <blockquote className="text-base leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                {t.avatar && (
                  <SafeImage
                    src={t.avatar}
                    alt={t.avatarAlt ?? t.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <div className="text-base font-semibold">{t.name}</div>
                  <div className="text-sm text-muted">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
