import Link from "next/link";
import Image from "next/image";
import type { NavService } from "@/lib/types";
import Container from "./Container";
import NavMenu from "./NavMenu";

export default function Header({
  brand,
  services,
}: {
  brand: string;
  services: NavService[];
}) {
  return (
    <header className="sticky top-0 z-50 pt-5 pb-3 w-full backdrop-blur-[2px]">
      <Container>
        <div className="flex items-center justify-between rounded-full bg-[#D5D8DF] px-7 py-3 shadow-xl border border-white/50 text-[#111827]">
          {/* Brand / Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logos/union-logo.svg"
              alt={brand || "Abhiwan"}
              width={58}
              height={36}
              className="w-[58.1px] h-[35.76px] object-contain transition-transform hover:scale-105"
              priority
            />
          </Link>

          {/* Center Nav Links */}
          <NavMenu services={services} />

          {/* Right CTA Button */}
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full bg-[#0B0F19] px-5 py-2.5 text-sm font-medium text-white transition-all hover:scale-[1.02] hover:bg-black sm:inline-flex shadow-sm"
          >
            <span>Start a project</span>
            <span className="text-xs font-bold">↗</span>
          </a>
        </div>
      </Container>
    </header>
  );
}
