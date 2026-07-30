import type { Section } from "@/lib/types";
import Container from "../Container";

type Data = Extract<Section, { type: "testimonials" }>;

export default function Testimonials({ data }: { data: Data }) {
  if (!data.items || data.items.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-[#FAFBFD] text-slate-900">
      <Container>
        {/* Chapter / Subtitle Badge */}
        <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          <span className="h-2 w-2 rounded-full bg-[#C47BFF]" />
          <span>CHAPTER 07</span>
          <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-[#7382FF]/40 to-transparent inline-block" />
          <span>CLIENT VOICES</span>
        </div>

        {/* Heading */}
        <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold text-[#0F172A] leading-[1.15] tracking-[-1.2px] max-w-3xl mb-14">
          {data.heading}
        </h2>

        {/* Testimonial Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {data.items.map((t, i) => (
            <figure
              key={i}
              className="relative flex flex-col justify-between min-h-[250px] rounded-[26px] p-6 sm:p-7 border border-slate-200/70 overflow-hidden shadow-sm"
              style={{ background: "linear-gradient(180deg, rgba(13, 17, 29, 0.06) 0%, rgba(13, 17, 29, 0.02) 100%)" }}
            >
              {/* Top-Right Purple Ambient Glow Accent */}
              <div
                className="pointer-events-none absolute -top-[39px] -right-[20px] w-[192px] h-[192px] rounded-full blur-[40px] opacity-40 z-0"
                style={{ background: "#C47BFF59" }}
              />

              {/* Quote Mark Watermark */}
              <div className="text-6xl font-serif text-slate-300/35 select-none absolute top-4 left-5 leading-none pointer-events-none z-0">
                “
              </div>

              {/* Quote Body */}
              <blockquote className="text-[15px] font-normal leading-[1.65] text-[#0F172A] relative z-10 pt-6">
                {t.quote}
              </blockquote>

              {/* Author / Role Footer */}
              <figcaption className="mt-8 border-t border-slate-200/80 pt-4 relative z-10">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-600">
                  <span className="h-1.5 w-1.5 flex-none rounded-full bg-[#C47BFF]" />
                  <span>
                    {t.name && t.role ? `${t.name} — ${t.role}` : t.name || t.role}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
