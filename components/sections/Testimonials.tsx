import type { Section } from "@/lib/types";
import Container from "../Container";

type Data = Extract<Section, { type: "testimonials" }>;

export default function Testimonials({ data }: { data: Data }) {
  if (!data.items || data.items.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-[#FAFBFD] text-slate-900">
      <Container>
        {/* Subtitle / Badge */}
        <div className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          CLIENT VOICES
        </div>

        {/* Heading */}
        <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold text-[#0F172A] leading-[1.15] tracking-[-1.2px] max-w-3xl mb-14">
          {data.heading}
        </h2>

        {/* 3 Testimonial Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {data.items.map((t, i) => (
            <figure
              key={i}
              className="group relative flex flex-col justify-between min-h-[250px] rounded-[28px] bg-[#EEECF5]/80 p-8 border border-purple-100/60 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-md"
            >
              {/* Quote Mark Watermark */}
              <div className="text-6xl font-serif text-slate-300/40 select-none absolute top-4 left-6 leading-none pointer-events-none">
                “
              </div>

              {/* Quote Body */}
              <blockquote className="text-[15px] font-normal leading-[1.7] text-[#334155] relative z-10 pt-4">
                {t.quote}
              </blockquote>

              {/* Author / Role Footer */}
              <figcaption className="mt-8 border-t border-slate-300/40 pt-5 relative z-10">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C084FC]" />
                  <span>{t.role || t.name}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
