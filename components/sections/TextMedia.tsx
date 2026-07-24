import type { Section } from "@/lib/types";
import Container from "../Container";
import SafeImage from "../SafeImage";

type Data = Extract<Section, { type: "text-media" }>;

export default function TextMedia({ data }: { data: Data }) {
  if (!data.heading && !data.body) return null;
  return (
    <section className="py-20">
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{data.heading}</h2>
          {data.body && <p className="mt-4 text-base leading-relaxed text-muted">{data.body}</p>}
        </div>
        {data.image && (
          <SafeImage
            src={data.image}
            alt={data.imageAlt ?? ""}
            className="w-full rounded-2xl border border-border/60"
          />
        )}
      </Container>
    </section>
  );
}
