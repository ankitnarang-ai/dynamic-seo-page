import type { Section } from "@/lib/types";
import Container from "../Container";

type Data = Extract<Section, { type: "process" }>;

export default function ProcessSteps({ data }: { data: Data }) {
  if (!data.steps || data.steps.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-[#FAFBFD] text-slate-900">
      <Container>
        {/* Chapter / Subtitle Badge */}
        <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          <span className="h-2 w-2 rounded-full bg-[#C084FC] shadow-[0_0_8px_#C084FC]" />
          <span>CHAPTER 04</span>
          <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-[#7382FF]/40 to-transparent inline-block" />
          <span>HOW WE BUILD IT</span>
        </div>

        {/* Heading */}
        <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold text-[#0F172A] leading-[1.1] tracking-[-1.2px] mb-16">
          {data.heading}
        </h2>

        {/* Horizontal Timeline Container */}
        <div className="relative overflow-x-auto pb-8 pt-2 hide-scrollbar">
          <div className="min-w-[1000px] relative px-4">
            {/* Connecting Horizontal Line */}
            <div className="absolute top-9 sm:top-[42px] left-12 right-12 h-[1.5px] bg-slate-200/80 z-0" />

            {/* Stepper Nodes Grid */}
            <div className="grid grid-cols-9 gap-4 relative z-10">
              {data.steps.map((s, i) => {
                const isFeatured = s.no === "05" || i === 4;
                return (
                  <div key={i} className="flex flex-col items-center text-center">
                    {/* Circle Node */}
                    <div
                      className={`flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white font-bold text-base sm:text-lg text-slate-800 shadow-sm transition-all duration-300 hover:scale-110 ${
                        isFeatured
                          ? "border-2 border-indigo-500 shadow-md shadow-indigo-500/15 scale-105 text-indigo-600"
                          : "border border-slate-200 hover:border-purple-400"
                      }`}
                    >
                      {s.no}
                    </div>

                    {/* Step Title */}
                    <h3 className="mt-5 text-sm font-bold text-[#0F172A] leading-tight">
                      {s.title}
                    </h3>

                    {/* Step Description */}
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed max-w-[140px]">
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
