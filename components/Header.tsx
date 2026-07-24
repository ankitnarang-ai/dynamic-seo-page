import Link from "next/link";
import type { NavService } from "@/lib/types";
import Container from "./Container";
import NavMenu from "./NavMenu";

// Sticky top chrome. Brand + nav are site-level. The nav menu (Services → cities) is
// generated from JSON on the server and passed in via `services`.
export default function Header({
  brand,
  services,
}: {
  brand: string;
  services: NavService[];
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight">
          {brand}
        </Link>

        <div className="flex items-center gap-4">
          <NavMenu services={services} />
          <a
            href="#contact"
            className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90 sm:inline-block"
          >
            Let's Talk
          </a>
        </div>
      </Container>
    </header>
  );
}
