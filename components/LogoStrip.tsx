import type { Logo } from "@/lib/types";
import Container from "./Container";
import SafeImage from "./SafeImage";

const BRAND_LOGOS = [
  { src: "/brands/Bajaj_Finserv_Logo 1.svg", alt: "Bajaj Finserv" },
  { src: "/brands/796-7966191_vaseline-logo-black-and-white-html5-icon-png 1.svg", alt: "Vaseline" },
  { src: "/brands/248-2486695_iskcon-of-richmond-lotous-feet-of-radha-krishna 2.svg", alt: "Lotus" },
  { src: "/brands/2bfc6af0-3f56-456c-811b-dbfd54bd0cf8.svg", alt: "Stripto" },
  { src: "/brands/Black Creative Professional Photographer Online Portfolio (1) 1.svg", alt: "Coca-Cola" },
  { src: "/brands/Untitled design (25) 1.svg", alt: "Philips" },
  { src: "/brands/Untitled design (25) 3.svg", alt: "Ogilvy" },
  { src: "/brands/Untitled design (52) 4.svg", alt: "Dainik Jagran" },
];

export default function LogoStrip({
  logos,
}: {
  logos?: { heading?: string; items: Logo[] };
}) {
  // JSON-driven: use the logos.items from the service JSON when provided,
  // otherwise fall back to the default brand set.
  const itemsToUse =
    logos?.items && logos.items.length > 0 ? logos.items : BRAND_LOGOS;

  const marqueeItems = [...itemsToUse, ...itemsToUse];

  return (
    <section className="relative overflow-hidden bg-[#050711] py-7 border-y border-slate-800/60 z-10">
      <Container className="flex items-center gap-6 md:gap-10">
        {/* Fixed Left Label Text */}
        <div className="flex-none pr-6 sm:pr-10 border-r border-slate-800/80 z-20 bg-[#050711]">
          <p className="text-[12px] sm:text-[13px] font-normal leading-[1.3] text-slate-300 whitespace-nowrap">
            Brands that<br />trust us
          </p>
        </div>

        {/* Scrolling Brand Logomark Marquee */}
        <div className="relative overflow-hidden flex-1">
          {/* Right Gradient Edge Fade */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-16 bg-gradient-to-l from-[#050711] to-transparent" />

          <div className="animate-marquee flex items-center gap-12 sm:gap-16">
            {marqueeItems.map((l, i) => (
              <div
                key={i}
                className="flex-none flex items-center justify-center h-9 sm:h-11 w-auto opacity-85 transition-opacity hover:opacity-100"
              >
                <SafeImage
                  src={l.src}
                  alt={l.alt || "Brand Logo"}
                  className="h-6 sm:h-8 w-auto max-w-[140px] sm:max-w-[160px] object-contain filter brightness-110 contrast-125"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
