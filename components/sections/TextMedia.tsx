import type { Section } from "@/lib/types";
import Container from "../Container";
import SafeImage from "../SafeImage";

type Data = Extract<Section, { type: "text-media" }>;

export default function TextMedia({ data }: { data: Data }) {
  if (!data.heading && !data.body) return null;

  const displayImage =
    data.image && data.image.includes("Container.svg")
      ? data.image
      : "/images/Container.svg";

  const paragraphs = data.body ? data.body.split("\n\n") : [];

  return (
    <section className="py-16 md:py-24 bg-[#FAFBFD] text-slate-900">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <div>
          {/* Chapter / Subtitle Badge */}
          <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            <span className="h-2 w-2 rounded-full bg-[#C47BFF]" />
            <span>CHAPTER 02</span>
            <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-[#7382FF]/40 to-transparent inline-block" />
            <span>THE DIGITAL SHIFT</span>
          </div>

          {/* Heading with exact typography specs: Inter Tight, 48px, line-height 52.8px, -1.2px letter-spacing */}
          <h2 className="text-[36px] sm:text-[48px] font-bold text-[#0F172A] leading-[1.1] sm:leading-[52.8px] tracking-[-1.2px]">
            {data.heading}
          </h2>

          {/* Body paragraphs with exact typography specs: Inter Tight, 17px, line-height 27.63px */}
          {paragraphs.length > 0 && (
            <div className="mt-8 space-y-6 text-[17px] font-normal leading-[27.63px] tracking-[0px] text-[#475569]">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}
        </div>

        {/* Right side Container.svg image */}
        <div className="relative flex justify-center lg:justify-end">
          <SafeImage
            src={displayImage}
            alt={data.imageAlt ?? "Virtual Showroom Development"}
            className="w-full max-w-[660px] h-auto object-contain"
          />
        </div>
      </Container>
    </section>
  );
}
