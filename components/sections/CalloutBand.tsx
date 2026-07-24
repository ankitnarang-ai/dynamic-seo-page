import type { Section } from "@/lib/types";
import Container from "../Container";

type Data = Extract<Section, { type: "callout" }>;

export default function CalloutBand({ data }: { data: Data }) {
  if (!data.heading && !data.body) return null;
  return (
    <section className="py-24 text-center">
      <Container>
        <h2 className="mx-auto max-w-4xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight">
          {data.heading}
        </h2>
        {data.body && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted/90">{data.body}</p>
        )}
      </Container>
    </section>
  );
}
