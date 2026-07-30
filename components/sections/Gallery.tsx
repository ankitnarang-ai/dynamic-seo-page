import type { Section } from "@/lib/types";
import Container from "../Container";
import SafeImage from "../SafeImage";

type Data = Extract<Section, { type: "gallery" }>;

export default function Gallery({ data }: { data: Data }) {
  if (!data.items || data.items.length === 0) return null;

  const itemSkyline = data.items[0]; // Top Left (Mercedes Showroom ~560px)
  const itemGame = data.items[1]; // Top Right (Avatar Hub ~280px)
  const itemRoob = data.items[2]; // Middle Right (Electronics Store ~280px)
  const itemArticle = data.items[3]; // Bottom Left (Product Display ~302px)
  const itemStudio = data.items[4]; // Bottom Right (Coin Dome ~280px)

  return (
    <section id="work" className="scroll-mt-20 pt-28 sm:pt-36 md:pt-44 lg:pt-52 pb-64 sm:pb-80 md:pb-[350px] lg:pb-[480px] bg-[#090B13] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-32 right-10 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[140px]" />

      {/* Top Decorative Line & Glow Dot */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-[120px] z-10"
        style={{
          background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(115, 130, 255, 0.5) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
      />
      <span
        className="pointer-events-none absolute top-14 left-[68%] lg:left-[66%] h-2 w-2 rounded-full bg-[#C47BFF] z-10 hidden sm:block"
        style={{ boxShadow: "0px 0px 20.71px 0px #C47BFFCC" }}
      />

      <Container className="pb-24 sm:pb-32 lg:pb-40">
        {/* Chapter / Subtitle Badge */}
        <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#94A3B8]">
          <span className="h-2 w-2 rounded-full bg-[#C47BFF]" />
          <span>CHAPTER 07</span>
          <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-[#7382FF]/40 to-transparent inline-block" />
          <span>PROOF OF WORK</span>
        </div>

        {/* Heading & Subheading */}
        <div className="mb-12">
          <h2 className="text-[36px] sm:text-[48px] font-bold tracking-[-1.2px] text-white leading-tight">
            {data.heading}
          </h2>
          {data.subheading && (
            <p className="mt-2 text-[22px] sm:text-[30px] font-bold tracking-[-0.8px] text-[#94A3B8]">
              {data.subheading}
            </p>
          )}
        </div>

        {/* 2-Column Grid Layout - Matching Height Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch lg:h-[700px]">
          {/* LEFT COLUMN (2 Images) */}
          <div className="flex flex-col gap-6 h-full">
            {itemSkyline && (
              <div className="flex-[1.3] h-[260px] sm:h-[320px] lg:h-auto relative w-full rounded-[24px] sm:rounded-[28px] overflow-hidden border border-white/10 bg-slate-900/60 shadow-2xl">
                <SafeImage
                  src={itemSkyline.src}
                  alt={itemSkyline.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {itemArticle && (
              <div className="flex-1 h-[200px] sm:h-[240px] lg:h-auto relative w-full rounded-[24px] sm:rounded-[28px] overflow-hidden border border-white/10 bg-slate-900/60 shadow-2xl">
                <SafeImage
                  src={itemArticle.src}
                  alt={itemArticle.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* RIGHT COLUMN (3 Images) */}
          <div className="flex flex-col gap-6 h-full">
            {itemGame && (
              <div className="flex-1 h-[180px] sm:h-[220px] lg:h-auto relative w-full rounded-[24px] sm:rounded-[28px] overflow-hidden border border-white/10 bg-slate-900/60 shadow-2xl">
                <SafeImage
                  src={itemGame.src}
                  alt={itemGame.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {itemRoob && (
              <div className="flex-1 h-[180px] sm:h-[220px] lg:h-auto relative w-full rounded-[24px] sm:rounded-[28px] overflow-hidden border border-white/10 bg-slate-900/60 shadow-2xl">
                <SafeImage
                  src={itemRoob.src}
                  alt={itemRoob.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {itemStudio && (
              <div className="flex-1 h-[180px] sm:h-[220px] lg:h-auto relative w-full rounded-[24px] sm:rounded-[28px] overflow-hidden border border-white/10 bg-slate-900/60 shadow-2xl">
                <SafeImage
                  src={itemStudio.src}
                  alt={itemStudio.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Bottom Decorative Line & Glow Dot */}
      <div
        className="pointer-events-none absolute bottom-12 left-1/2 -translate-x-1/2 w-[1px] h-[120px] z-10"
        style={{
          background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(115, 130, 255, 0.5) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
      />
      <span
        className="pointer-events-none absolute bottom-24 left-[68%] lg:left-[66%] h-2 w-2 rounded-full bg-[#C47BFF] z-10 hidden sm:block"
        style={{ boxShadow: "0px 0px 20.71px 0px #C47BFFCC" }}
      />
    </section>
  );
}
