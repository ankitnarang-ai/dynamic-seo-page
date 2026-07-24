import type { Section } from "@/lib/types";
import Container from "../Container";

type Data = Extract<Section, { type: "card-grid" }>;

export default function CardGrid({ data }: { data: Data }) {
  if (!data.cards || data.cards.length === 0) return null;

  const isBento =
    data.heading?.toLowerCase().includes("why choose") || data.cards.length >= 10;

  if (isBento) {
    const c1 = data.cards[0];
    const c2 = data.cards[1];
    const c3 = data.cards[2];
    const middleRow = data.cards.slice(3, 6);
    const row3 = data.cards.slice(6, 8);
    const row4 = data.cards.slice(8, 10);

    return (
      <section className="py-16 md:py-24 bg-[#FAFBFD] text-slate-900">
        <Container>
          {/* Chapter / Subtitle Badge */}
          <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            <span className="h-2 w-2 rounded-full bg-[#C084FC] shadow-[0_0_8px_#C084FC]" />
            <span>CHAPTER 06</span>
            <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-[#7382FF]/40 to-transparent inline-block" />
            <span>WHY ABHIWAN</span>
          </div>

          {/* Heading */}
          <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold text-[#0F172A] leading-[1.1] tracking-[-1.2px] mb-12 max-w-3xl">
            {data.heading}
          </h2>

          {/* Bento Grid Layout */}
          <div className="space-y-5">
            {/* Top Row: Large featured card (left) + 2 stacked cards (right) */}
            <div className="grid gap-5 lg:grid-cols-12">
              {/* Card 01: Featured Tall */}
              {c1 && (
                <div className="lg:col-span-6 flex flex-col justify-between min-h-[280px] rounded-[24px] bg-[#EBEDF2] p-7 border border-slate-200/80 shadow-sm transition-transform hover:scale-[1.01]">
                  <span className="text-xs font-mono font-semibold text-slate-400">01</span>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A]">{c1.title}</h3>
                    <p className="mt-2 text-sm font-normal text-slate-500 leading-relaxed max-w-md">
                      {c1.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Cards 02 & 03: Stacked Right */}
              <div className="lg:col-span-6 flex flex-col gap-5">
                {c2 && (
                  <div className="flex-1 flex flex-col justify-between min-h-[130px] rounded-[24px] bg-[#EBEDF2] p-6 border border-slate-200/80 shadow-sm transition-transform hover:scale-[1.01]">
                    <span className="text-xs font-mono font-semibold text-slate-400">02</span>
                    <div>
                      <h3 className="text-base font-bold text-[#0F172A]">{c2.title}</h3>
                      <p className="mt-1 text-sm font-normal text-slate-500 leading-relaxed">
                        {c2.description}
                      </p>
                    </div>
                  </div>
                )}
                {c3 && (
                  <div className="flex-1 flex flex-col justify-between min-h-[130px] rounded-[24px] bg-[#EBEDF2] p-6 border border-slate-200/80 shadow-sm transition-transform hover:scale-[1.01]">
                    <span className="text-xs font-mono font-semibold text-slate-400">03</span>
                    <div>
                      <h3 className="text-base font-bold text-[#0F172A]">{c3.title}</h3>
                      <p className="mt-1 text-sm font-normal text-slate-500 leading-relaxed">
                        {c3.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Row 2: 3 Cards */}
            {middleRow.length > 0 && (
              <div className="grid gap-5 md:grid-cols-3">
                {middleRow.map((c, i) => {
                  const isFeaturedBorder = i === 2; // Card 06
                  return (
                    <div
                      key={i}
                      className={`flex flex-col justify-between min-h-[140px] rounded-[24px] bg-[#EBEDF2] p-6 shadow-sm transition-all hover:scale-[1.01] ${
                        isFeaturedBorder
                          ? "border-2 border-indigo-400/80 shadow-lg shadow-indigo-500/10"
                          : "border border-slate-200/80"
                      }`}
                    >
                      <span className="text-xs font-mono font-semibold text-slate-400">
                        {String(i + 4).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-base font-bold text-[#0F172A]">{c.title}</h3>
                        <p className="mt-1 text-sm font-normal text-slate-500 leading-relaxed">
                          {c.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Row 3: 2 Cards */}
            {row3.length > 0 && (
              <div className="grid gap-5 md:grid-cols-2">
                {row3.map((c, i) => (
                  <div
                    key={i}
                    className="flex flex-col justify-between min-h-[130px] rounded-[24px] bg-[#EBEDF2] p-6 border border-slate-200/80 shadow-sm transition-transform hover:scale-[1.01]"
                  >
                    <span className="text-xs font-mono font-semibold text-slate-400">
                      {String(i + 7).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-[#0F172A]">{c.title}</h3>
                      <p className="mt-1 text-sm font-normal text-slate-500 leading-relaxed">
                        {c.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Row 4: 2 Cards */}
            {row4.length > 0 && (
              <div className="grid gap-5 md:grid-cols-2">
                {row4.map((c, i) => (
                  <div
                    key={i}
                    className="flex flex-col justify-between min-h-[130px] rounded-[24px] bg-[#EBEDF2] p-6 border border-slate-200/80 shadow-sm transition-transform hover:scale-[1.01]"
                  >
                    <span className="text-xs font-mono font-semibold text-slate-400">
                      {String(i + 9).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-[#0F172A]">{c.title}</h3>
                      <p className="mt-1 text-sm font-normal text-slate-500 leading-relaxed">
                        {c.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>
    );
  }

  // Otherwise render Section 3 (Dark Theme)
  const renderHeading = () => {
    const headingText = data.heading || "";
    if (headingText.toLowerCase().includes(" for ")) {
      const parts = headingText.split(/ for /i);
      return (
        <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold tracking-tight text-white leading-[1.15]">
          {parts[0]} for
          <br />
          <span className="text-[#94A3B8]">{parts[1]}</span>
        </h2>
      );
    }
    return (
      <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold tracking-tight text-white leading-[1.15]">
        {data.heading}
      </h2>
    );
  };

  const firstRow = data.cards.slice(0, 3);
  const remainingRows = data.cards.slice(3);

  return (
    <section className="py-16 md:py-24 bg-[#090B13] text-white relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-20 left-10 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />
      <Container>
        <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#94A3B8]">
          <span className="h-2 w-2 rounded-full bg-[#C084FC] shadow-[0_0_8px_#C084FC]" />
          <span>CHAPTER 03</span>
          <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-[#7382FF]/40 to-transparent inline-block" />
          <span>WHY IT MATTERS</span>
        </div>
        <div className="mb-12">{renderHeading()}</div>
        <div className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {firstRow.map((c, i) => {
              const numStr = String(i + 1).padStart(2, "0");
              return (
                <div
                  key={i}
                  className="group relative flex flex-col justify-between min-h-[140px] rounded-[20px] border border-slate-800/80 bg-[#101423] p-6 lg:p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-[#151a2e]"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-purple-950/70 border border-purple-500/30 text-[11px] font-mono font-semibold text-purple-300">
                      {numStr}
                    </span>
                    <p className="text-[15px] font-normal leading-relaxed text-[#CBD5E1]">
                      {c.description || c.title}
                    </p>
                  </div>
                  <span className="absolute bottom-4 right-4 h-1.5 w-1.5 rounded-full bg-[#C084FC]/60 transition-opacity group-hover:opacity-100" />
                </div>
              );
            })}
          </div>
          {remainingRows.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2">
              {remainingRows.map((c, i) => {
                const numStr = String(i + 4).padStart(2, "0");
                return (
                  <div
                    key={i}
                    className="group relative flex flex-col justify-between min-h-[130px] rounded-[20px] border border-slate-800/80 bg-[#101423] p-6 lg:p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-[#151a2e]"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-purple-950/70 border border-purple-500/30 text-[11px] font-mono font-semibold text-purple-300">
                        {numStr}
                      </span>
                      <p className="text-[15px] font-normal leading-relaxed text-[#CBD5E1]">
                        {c.description || c.title}
                      </p>
                    </div>
                    <span className="absolute bottom-4 right-4 h-1.5 w-1.5 rounded-full bg-[#C084FC]/60 transition-opacity group-hover:opacity-100" />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
