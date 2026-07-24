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
    <section id="work" className="scroll-mt-20 py-20 md:py-28 bg-[#090B13] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-32 right-10 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[140px]" />

      <Container>
        {/* Chapter / Subtitle Badge */}
        <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#94A3B8]">
          <span className="h-2 w-2 rounded-full bg-[#C084FC] shadow-[0_0_8px_#C084FC]" />
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

        {/* 2-Column Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT COLUMN (Wide 7-span ~ 724px) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Top Left: Skyline Mercedes Showroom (Tall 520px) */}
            {itemSkyline && (
              <div className="group relative w-full h-[380px] sm:h-[520px] rounded-[28px] overflow-hidden border border-white/10 bg-slate-900/60 shadow-2xl transition-all duration-300 hover:border-purple-500/50">
                <SafeImage
                  src={itemSkyline.src}
                  alt={itemSkyline.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            )}

            {/* Bottom Left: Article AR VR Product Table (~300px) */}
            {itemArticle && (
              <div className="group relative w-full h-[240px] sm:h-[300px] rounded-[28px] overflow-hidden border border-white/10 bg-slate-900/60 shadow-2xl transition-all duration-300 hover:border-purple-500/50">
                <SafeImage
                  src={itemArticle.src}
                  alt={itemArticle.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            )}
          </div>

          {/* RIGHT COLUMN (5-span ~ 512px) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Top Right: Game Avatar Hub (~265px) */}
            {itemGame && (
              <div className="group relative w-full h-[240px] sm:h-[265px] rounded-[28px] overflow-hidden border border-white/10 bg-slate-900/60 shadow-2xl transition-all duration-300 hover:border-purple-500/50">
                <SafeImage
                  src={itemGame.src}
                  alt={itemGame.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            )}

            {/* Middle Right: Roob Electronics Store (~265px) */}
            {itemRoob && (
              <div className="group relative w-full h-[240px] sm:h-[265px] rounded-[28px] overflow-hidden border border-white/10 bg-slate-900/60 shadow-2xl transition-all duration-300 hover:border-purple-500/50">
                <SafeImage
                  src={itemRoob.src}
                  alt={itemRoob.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            )}

            {/* Bottom Right: Studio Coin Dome (~265px) */}
            {itemStudio && (
              <div className="group relative w-full h-[240px] sm:h-[265px] rounded-[28px] overflow-hidden border border-white/10 bg-slate-900/60 shadow-2xl transition-all duration-300 hover:border-purple-500/50">
                <SafeImage
                  src={itemStudio.src}
                  alt={itemStudio.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
