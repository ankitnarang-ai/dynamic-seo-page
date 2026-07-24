import type { Section } from "@/lib/types";
import Container from "../Container";

type Data = Extract<Section, { type: "faqs" }>;

// Native <details> accordion — works without client JS and is accessible by default.
export default function Faqs({ data }: { data: Data }) {
  if (!data.items || data.items.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-[#FAFBFD] text-slate-900">
      <Container>
        {/* Subtitle / Badge */}
        <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 text-center">
          FAQS
        </div>

        {/* Heading */}
        <h2 className="text-[36px] sm:text-[48px] font-bold text-[#0F172A] leading-tight tracking-[-1.2px] text-center mb-3">
          {data.heading}
        </h2>

        {/* Subheading */}
        {data.subheading && (
          <p className="text-sm sm:text-base font-normal text-slate-500 text-center mb-14">
            {data.subheading}
          </p>
        )}

        {/* Accordion List */}
        <div className="mx-auto max-w-4xl space-y-3.5">
          {data.items.map((f, i) => (
            <details
              key={i}
              className="group rounded-[24px] bg-[#F3F5F9]/80 border border-slate-200/80 px-6 sm:px-7 py-4.5 transition-all duration-200 hover:border-slate-300 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-bold text-sm sm:text-base text-[#0F172A]">
                <span>{f.q}</span>
                <svg
                  className="h-4 w-4 text-slate-400 flex-none transition-transform duration-300 group-open:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <p className="mt-3.5 text-sm leading-relaxed text-slate-600 border-t border-slate-200/60 pt-3">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
