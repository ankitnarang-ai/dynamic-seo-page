"use client";

import type { Section } from "@/lib/types";
import Container from "../Container";

type Data = Extract<Section, { type: "cta-form" }>;

// Presentational contact form. Fields are JSON-driven; submission is a no-op stub
// (there is no backend in this project) so the form is inert but structurally complete.
export default function CtaForm({ data }: { data: Data }) {
  if (!data.fields || data.fields.length === 0) return null;

  const renderHeading = () => {
    const text = data.heading || "";
    if (text.toLowerCase().includes("interactive")) {
      const parts = text.split(/interactive/i);
      return (
        <h2 className="text-[36px] sm:text-[48px] font-bold text-white leading-[1.1] tracking-[-1.5px]">
          {parts[0]}
          <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-indigo-300 bg-clip-text text-transparent">
            interactive
          </span>
          {parts[1]}
        </h2>
      );
    }
    return (
      <h2 className="text-[36px] sm:text-[48px] font-bold text-white leading-[1.1] tracking-[-1.5px]">
        {data.heading}
      </h2>
    );
  };

  const featureList = [
    "NDA-first conversations",
    "Senior architects, not account managers",
    "Fixed scope or embedded pods",
  ];

  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-28 bg-[#090B13] text-white relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-purple-600/10 blur-[140px]" />

      <Container className="relative z-10">
        {/* Top Vertical Line Accent */}
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-purple-500/50 to-[#C084FC] mx-auto mb-10" />

        {/* Outer Dark Glass Card */}
        <div className="rounded-[36px] bg-[#0A0D1A] border border-slate-800/80 p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 items-start">
            {/* Left Column: Heading & Feature Bullets */}
            <div className="lg:col-span-6">
              {/* Chapter Badge */}
              <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#94A3B8]">
                <span className="h-2 w-2 rounded-full bg-[#C084FC] shadow-[0_0_8px_#C084FC]" />
                <span>CHAPTER 08</span>
                <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-[#7382FF]/40 to-transparent inline-block" />
                <span>LET&apos;S BUILD TOGETHER</span>
              </div>

              {/* Heading */}
              <div className="mb-6">{renderHeading()}</div>

              {/* Subheading / Description */}
              {data.subheading && (
                <p className="text-[15px] font-normal leading-relaxed text-[#94A3B8] max-w-md mb-8">
                  {data.subheading}
                </p>
              )}

              {/* 3 Feature Bullets */}
              <ul className="space-y-4">
                {featureList.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm font-normal text-slate-300">
                    <svg className="h-4 w-4 text-[#C084FC] flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-6">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                {/* First name & Last name grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-full rounded-xl bg-[#0B0F1E] border border-slate-800/80 px-4 py-3.5 text-sm text-white placeholder-slate-500 outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-full rounded-xl bg-[#0B0F1E] border border-slate-800/80 px-4 py-3.5 text-sm text-white placeholder-slate-500 outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Work Email */}
                <div>
                  <input
                    type="email"
                    placeholder="Work email"
                    className="w-full rounded-xl bg-[#0B0F1E] border border-slate-800/80 px-4 py-3.5 text-sm text-white placeholder-slate-500 outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                {/* Company */}
                <div>
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full rounded-xl bg-[#0B0F1E] border border-slate-800/80 px-4 py-3.5 text-sm text-white placeholder-slate-500 outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                {/* What are you building? */}
                <div>
                  <textarea
                    rows={4}
                    placeholder="What are you building?"
                    className="w-full rounded-xl bg-[#0B0F1E] border border-slate-800/80 px-4 py-3.5 text-sm text-white placeholder-slate-500 outline-none focus:border-purple-500 h-28 resize-none transition-colors"
                  />
                </div>

                {/* Submit Pill Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="rounded-full bg-white text-[#0F172A] font-semibold px-8 py-3.5 text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:bg-slate-100 transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    <span>{data.submitLabel || "Request a conversation"}</span>
                    <span className="text-base leading-none">→</span>
                  </button>
                  <p className="text-xs text-slate-500 mt-3">
                    Reply within 48 hours. NDA on request.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Vertical Line Accent */}
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#C084FC] via-purple-500/50 to-transparent mx-auto mt-10" />
      </Container>
    </section>
  );
}
