import type { Hero as HeroData } from "@/lib/types";
import Container from "./Container";
import SafeImage from "./SafeImage";

export default function Hero({ hero }: { hero: HeroData }) {
  const displayImage =
    hero.image && !hero.image.endsWith(".svg")
      ? hero.image
      : "/images/vr-hero-showroom.png";

  const renderHeading = () => {
    // Fully JSON-driven: titlePrefix is the plain lead-in, highlight is the
    // gradient-emphasised phrase, titleSuffix (e.g. " in {city}") is the location line.
    const prefix = (hero.titlePrefix || "Virtual Showroom Development").trim();
    const highlight = (hero.highlight || "for Automotive Industry").trim();
    const location = (hero.titleSuffix || "in Noida").trim();

    return (
      <h1 className="text-[34px] sm:text-[48px] lg:text-[62px] font-extrabold tracking-[-1.5px] text-white leading-[1.12] lg:leading-[70px] text-center lg:text-left mx-auto lg:mx-0">
        <span className="text-white">{prefix}</span>
        <br />
        <span className="bg-gradient-to-r from-[#FFFFFF] via-[#E2E8F0] via-60% to-[#C084FC] bg-clip-text text-transparent font-extrabold">
          {highlight}
        </span>
        <br />
        <span className="text-white">{location}</span>
      </h1>
    );
  };

  return (
    <section className="relative overflow-hidden py-10 md:py-20 lg:py-24 bg-[#050711] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-40 right-10 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px]" />

      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          {/* Chapter / Subtitle Badge */}
          <div className="mb-6 flex items-center justify-center lg:justify-start gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#94A3B8]">
            <span className="h-2 w-2 rounded-full bg-[#C084FC] shadow-[0_0_8px_#C084FC]" />
            <span>CHAPTER 01</span>
            <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-[#7382FF]/40 to-transparent inline-block" />
            <span>THE OPPORTUNITY</span>
          </div>

          {/* Heading */}
          <div className="mb-6 w-full">{renderHeading()}</div>

          {/* Description */}
          {hero.description && (
            <p className="mt-2 max-w-md lg:max-w-xl text-[15px] sm:text-[17px] font-normal leading-[26px] sm:leading-[27.63px] text-[#94A3B8] text-center lg:text-left mx-auto lg:mx-0">
              {hero.description}
            </p>
          )}

          {/* Bullets / Keypoints */}
          {hero.bullets && hero.bullets.length > 0 && (
            <ul className="mt-6 space-y-3 hidden sm:block">
              {hero.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3.5 text-[15px] font-normal leading-[22.5px] text-[#CBD5E1]">
                  <span className="mt-2.5 h-[3px] w-4 flex-none rounded-full bg-[#C084FC]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Stacked CTA Buttons */}
          {hero.ctas && hero.ctas.length > 0 && (
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto lg:mx-0">
              {hero.ctas.map((c, i) => {
                const isPrimary = c.variant !== "ghost";
                if (isPrimary) {
                  return (
                    <a
                      key={i}
                      href={c.href}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-[15px] font-semibold text-[#0F172A] shadow-lg transition-all hover:scale-[1.02] hover:bg-slate-100"
                    >
                      <svg
                        className="h-4 w-4 text-[#0F172A]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span>{c.label}</span>
                    </a>
                  );
                }
                return (
                  <a
                    key={i}
                    href={c.href}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-slate-800 bg-[#0B0E1B] px-8 py-3.5 text-[15px] font-medium text-slate-200 transition-all hover:border-slate-700 hover:bg-[#121629]"
                  >
                    <span>{c.label}</span>
                    <span className="text-xs">→</span>
                  </a>
                );
              })}
            </div>
          )}
        </div>

        {/* Scaled Hero 3D Graphic Image without shifting left content position */}
        <div className="relative flex justify-center lg:justify-end mt-6 lg:mt-0 w-full">
          <SafeImage
            src={displayImage}
            alt={hero.imageAlt ?? "Virtual Showroom"}
            loading="eager"
            className="relative w-full max-w-[700px] lg:max-w-none lg:w-[130%] xl:w-[140%] h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)] lg:-mr-24 xl:-mr-36 transition-all"
          />
        </div>
      </Container>
    </section>
  );
}
