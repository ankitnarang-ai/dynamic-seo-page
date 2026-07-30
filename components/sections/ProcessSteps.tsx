import type { Section } from "@/lib/types";
import Container from "../Container";

type Data = Extract<Section, { type: "process" }>;

export default function ProcessSteps({ data }: { data: Data }) {
  if (!data.steps || data.steps.length === 0) return null;

  const count = data.steps.length;

  return (
    <section className="py-16 md:py-24 bg-[#FAFBFD] text-slate-900">
      <Container>
        {/* Chapter / Subtitle Badge */}
        <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          <span className="h-2 w-2 rounded-full bg-[#C47BFF]" />
          <span>CHAPTER 04</span>
          <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-[#7382FF]/40 to-transparent inline-block" />
          <span>HOW WE BUILD IT</span>
        </div>

        {/* Heading */}
        <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold text-[#0F172A] leading-[1.1] tracking-[-1.2px] mb-12 sm:mb-16">
          {data.heading}
        </h2>

        {/* Mobile / Tablet Vertical Timeline (< lg) */}
        <div className="lg:hidden space-y-4">
          {data.steps.map((s, i) => {
            const is5thStep = s.no === "05" || i === 4;
            return (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl p-5 border bg-white border-slate-200/80 shadow-sm"
              >
                <div
                  className={`flex h-12 w-12 flex-none items-center justify-center rounded-full font-bold text-sm text-[#0F172A] ${
                    is5thStep
                      ? "bg-white border border-[#0036FF80] shadow-md shadow-blue-500/10"
                      : "bg-[#F5F7FA] border border-[#E2E8F0]"
                  }`}
                >
                  {s.no}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0F172A]">{s.title}</h3>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Horizontal Timeline (lg+) */}
        <div className="hidden lg:block relative pb-4 pt-2">
          <div className="relative px-2">
            {/* Connecting Horizontal Line in soft purple/lavender spanning center-to-center */}
            <div
              className="absolute top-9 left-0 right-0 h-[1.5px] bg-[#C47BFF]/40 z-0"
              style={{
                left: `calc(100% / ${count} / 2)`,
                right: `calc(100% / ${count} / 2)`,
              }}
            />

            {/* Stepper Nodes Dynamic Grid */}
            <div
              className="grid gap-3 relative z-10"
              style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
            >
              {data.steps.map((s, i) => {
                const is5thStep = s.no === "05" || i === 4;
                return (
                  <div key={i} className="flex flex-col items-center text-center">
                    {/* Circle Node */}
                    <div
                      className={`flex h-18 w-18 items-center justify-center rounded-full font-bold text-base text-[#0F172A] shadow-sm ${
                        is5thStep
                          ? "bg-white border border-[#0036FF80] shadow-md shadow-blue-500/10"
                          : "bg-[#F5F7FA] border border-[#E2E8F0]"
                      }`}
                    >
                      {s.no}
                    </div>

                    {/* Step Title */}
                    <h3 className="mt-4 text-sm font-bold text-[#0F172A] leading-tight px-1">
                      {s.title}
                    </h3>

                    {/* Step Description */}
                    <p className="mt-1.5 text-xs text-slate-500 leading-relaxed px-1">
                      {s.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
