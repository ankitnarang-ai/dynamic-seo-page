import type { Section } from "@/lib/types";
import Container from "../Container";
import SectionHeading from "./SectionHeading";

type Data = Extract<Section, { type: "faqs" }>;

// Native <details> accordion — works without client JS and is accessible by default.
export default function Faqs({ data }: { data: Data }) {
  if (!data.items || data.items.length === 0) return null;
  return (
    <section className="py-20">
      <Container>
        <SectionHeading heading={data.heading} subheading={data.subheading} center />
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-border/60 overflow-hidden rounded-2xl border border-border/60 bg-surface">
          {data.items.map((f, i) => (
            <details key={i} className="group px-6 py-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium">
                {f.q}
                <span className="text-accent transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
