import type { Section } from "@/lib/types";
import Container from "../Container";
import SectionHeading from "./SectionHeading";

type Data = Extract<Section, { type: "process" }>;

export default function ProcessSteps({ data }: { data: Data }) {
  if (!data.steps || data.steps.length === 0) return null;
  return (
    <section className="py-16">
      <Container>
        <SectionHeading heading={data.heading} subheading={data.subheading} />
        <ol className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 hide-scrollbar">
          {data.steps.map((s, i) => (
            <li key={i} className="min-w-[280px] snap-start rounded-2xl border border-border bg-surface p-6 shadow-sm transition-transform hover:-translate-y-1">
              <div className="text-3xl font-extrabold text-accent/80">{s.no}</div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
