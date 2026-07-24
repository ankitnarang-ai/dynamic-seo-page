import type { Section } from "@/lib/types";
import Container from "../Container";
import SafeImage from "../SafeImage";
import SectionHeading from "./SectionHeading";

type Data = Extract<Section, { type: "gallery" }>;

export default function Gallery({ data }: { data: Data }) {
  if (!data.items || data.items.length === 0) return null;
  return (
    <section id="work" className="scroll-mt-20 py-20">
      <Container>
        <SectionHeading heading={data.heading} subheading={data.subheading} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {data.items.map((g, i) => (
            <SafeImage
              key={i}
              src={g.src}
              alt={g.alt}
              className="aspect-[3/2] w-full rounded-2xl border border-border/60 object-cover"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
