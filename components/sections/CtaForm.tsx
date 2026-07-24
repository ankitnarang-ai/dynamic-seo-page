import type { Section } from "@/lib/types";
import Container from "../Container";

type Data = Extract<Section, { type: "cta-form" }>;

// Presentational contact form. Fields are JSON-driven; submission is a no-op stub
// (there is no backend in this project) so the form is inert but structurally complete.
export default function CtaForm({ data }: { data: Data }) {
  if (!data.fields || data.fields.length === 0) return null;
  return (
    <section id="contact" className="scroll-mt-20 py-20">
      <Container>
        <div className="grid gap-10 rounded-3xl border border-border/60 bg-surface p-8 md:grid-cols-2 md:p-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{data.heading}</h2>
            {data.subheading && (
              <p className="mt-4 text-base leading-relaxed text-muted">{data.subheading}</p>
            )}
          </div>
          <form className="space-y-4" action="#" method="post">
            {data.fields.map((f) => (
              <div key={f.name}>
                <label htmlFor={f.name} className="mb-1.5 block text-sm font-medium">
                  {f.label}
                </label>
                {f.type === "textarea" ? (
                  <textarea
                    id={f.name}
                    name={f.name}
                    rows={4}
                    placeholder={f.placeholder}
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted/60 focus:border-accent"
                  />
                ) : (
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type ?? "text"}
                    placeholder={f.placeholder}
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted/60 focus:border-accent"
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="w-full rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              {data.submitLabel}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
