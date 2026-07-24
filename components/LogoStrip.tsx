import type { Logo } from "@/lib/types";
import Container from "./Container";
import SafeImage from "./SafeImage";

// "Trusted by" strip. Returns null when there are no logos, so no empty band renders (TC-10/12).
export default function LogoStrip({
  logos,
}: {
  logos?: { heading?: string; items: Logo[] };
}) {
  if (!logos || !logos.items || logos.items.length === 0) return null;
  return (
    <section className="border-b border-border/60 py-10">
      <Container>
        {logos.heading && (
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted">
            {logos.heading}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-70">
          {logos.items.map((l, i) => (
            <SafeImage key={i} src={l.src} alt={l.alt} height={32} className="h-8 w-auto" />
          ))}
        </div>
      </Container>
    </section>
  );
}
