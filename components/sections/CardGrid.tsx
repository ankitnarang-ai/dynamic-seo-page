import type { Section } from "@/lib/types";
import Container from "../Container";
import SectionHeading from "./SectionHeading";

type Data = Extract<Section, { type: "card-grid" }>;

export default function CardGrid({ data }: { data: Data }) {
  if (!data.cards || data.cards.length === 0) return null;
  return (
    <section className="py-20">
      <Container>
        <SectionHeading heading={data.heading} subheading={data.subheading} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.cards.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-surface p-8 shadow-sm transition-transform hover:-translate-y-1"
            >
              {c.icon && <div className="mb-4 text-3xl text-accent">{c.icon}</div>}
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
