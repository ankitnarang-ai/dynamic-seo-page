"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { NavService } from "@/lib/types";

// JSON-generated navigation. Desktop: a "Services" dropdown with a per-service cities
// submenu (hover/focus). Mobile: a hamburger accordion. Data comes from getNavServices()
// on the server and is passed in as a prop — nothing here is hardcoded.
export default function NavMenu({ services }: { services: NavService[] }) {
  const pathname = usePathname();
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [activeService, setActiveService] = useState<string | null>(
    services[0]?.slug ?? null,
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileService, setMobileService] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  // Close both menus — called when a destination link is chosen.
  const closeAll = () => {
    setDesktopOpen(false);
    setMobileOpen(false);
  };

  // Close desktop menu on outside-click / Esc.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setDesktopOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setDesktopOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const active = services.find((s) => s.slug === activeService) ?? services[0];

  return (
    <div ref={rootRef} className="flex items-center">
      {/* ---------- Desktop (md+) ---------- */}
      <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
        <div
          className="relative"
          onMouseEnter={() => setDesktopOpen(true)}
          onMouseLeave={() => setDesktopOpen(false)}
        >
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded={desktopOpen}
            onClick={() => setDesktopOpen((v) => !v)}
            onFocus={() => setDesktopOpen(true)}
            className="flex items-center gap-1 transition-colors hover:text-foreground"
          >
            Services
            <svg
              className={`h-4 w-4 transition-transform ${desktopOpen ? "rotate-180" : ""}`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {desktopOpen && services.length > 0 && (
            <div className="absolute left-0 top-full z-50 pt-3">
              <div className="grid w-[34rem] grid-cols-[13rem_1fr] overflow-hidden rounded-2xl border border-border/60 bg-surface shadow-2xl">
                {/* Service list */}
                <ul className="border-r border-border/60 p-2">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <button
                        type="button"
                        onMouseEnter={() => setActiveService(s.slug)}
                        onFocus={() => setActiveService(s.slug)}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                          active?.slug === s.slug
                            ? "bg-surface-2 text-foreground"
                            : "text-muted hover:bg-surface-2 hover:text-foreground"
                        }`}
                      >
                        {s.label}
                        <span aria-hidden="true">›</span>
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Cities submenu for the active service */}
                <div className="p-2">
                  <p className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-muted">
                    {active?.label} — choose a city
                  </p>
                  <ul className="grid grid-cols-2 gap-1">
                    {active?.cities.map((c) => {
                      const href = `/${active.slug}/${c.slug}`;
                      const isActive = pathname === href;
                      return (
                        <li key={c.slug}>
                          <Link
                            href={href}
                            onClick={closeAll}
                            className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                              isActive
                                ? "bg-accent/15 text-accent"
                                : "text-foreground/90 hover:bg-surface-2 hover:text-accent"
                            }`}
                          >
                            {c.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        <a href="#work" className="transition-colors hover:text-foreground">
          Work
        </a>
        <a href="#contact" className="transition-colors hover:text-foreground">
          Contact
        </a>
      </nav>

      {/* ---------- Mobile (< md) ---------- */}
      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((v) => !v)}
        className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {mobileOpen ? (
            <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
          ) : (
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {mobileOpen && (
        <div className="absolute inset-x-0 top-16 z-40 border-b border-border/60 bg-background md:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-4 sm:px-6">
            {services.map((s) => {
              const open = mobileService === s.slug;
              return (
                <li key={s.slug} className="border-b border-border/40 last:border-0">
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setMobileService(open ? null : s.slug)}
                    className="flex w-full items-center justify-between py-3 text-left text-sm font-medium"
                  >
                    {s.label}
                    <span className={`transition-transform ${open ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {open && (
                    <ul className="grid grid-cols-2 gap-1 pb-3">
                      {s.cities.map((c) => (
                        <li key={c.slug}>
                          <Link
                            href={`/${s.slug}/${c.slug}`}
                            onClick={closeAll}
                            className="block rounded-lg px-3 py-2 text-sm text-muted hover:bg-surface hover:text-accent"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
