import type { Section } from "@/lib/types";
import Container from "../Container";

type Data = Extract<Section, { type: "callout" }>;

export default function CalloutBand({ data }: { data: Data }) {
  if (!data.heading && !data.body) return null;

  return (
    <section className="py-20 md:py-28 bg-[#090B13] text-white text-center relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[600px] rounded-full bg-purple-600/10 blur-[130px]" />

      {/* Floating Accent Dots */}
      <span className="h-1.5 w-1.5 rounded-full bg-[#C47BFF] absolute top-14 right-[22%] hidden md:block" />

      <Container className="relative z-10">
        {/* Top Vertical Line Accent */}
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-purple-500/50 to-[#C084FC] mx-auto mb-8" />

        {/* Chapter / Subtitle Badge */}
        <div className="mb-6 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#94A3B8]">
          <span className="h-2 w-2 rounded-full bg-[#C47BFF]" />
          <span>CHAPTER 05</span>
          <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-[#7382FF]/40 to-transparent inline-block" />
          <span>THE IMPACT</span>
        </div>

        {/* Heading */}
        <h2 className="mx-auto max-w-4xl text-[32px] sm:text-[42px] lg:text-[48px] font-bold tracking-tight text-white leading-[1.15] mb-8">
          {data.heading}
        </h2>

        {/* Body Text */}
        {data.body && (
          <p className="mx-auto max-w-3xl text-[15px] sm:text-[17px] font-normal leading-[1.8] text-[#94A3B8]">
            {data.body}
          </p>
        )}

        {/* Bottom Vertical Line Accent */}
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#C084FC] via-purple-500/50 to-transparent mx-auto mt-12" />
      </Container>
    </section>
  );
}
