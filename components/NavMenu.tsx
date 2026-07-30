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
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [desktopCaseOpen, setDesktopCaseOpen] = useState(false);
  const [activeService, setActiveService] = useState<string | null>(
    services[0]?.slug ?? null,
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileService, setMobileService] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const closeAll = () => {
    setDesktopServicesOpen(false);
    setDesktopCaseOpen(false);
    setMobileOpen(false);
  };

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setDesktopServicesOpen(false);
        setDesktopCaseOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setDesktopServicesOpen(false);
        setDesktopCaseOpen(false);
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

  useEffect(() => {
    if (!pathname) return;
    const currentSlug = pathname.split("/")[1];
    if (currentSlug) {
      const match = services.find((s) => s.slug === currentSlug);
      if (match) setActiveService(match.slug);
    }
  }, [pathname, services]);

  const active = services.find((s) => s.slug === activeService) ?? services[0];

  return (
    <div ref={rootRef} className="flex items-center">
      {/* ---------- Desktop Nav (md+) ---------- */}
      <nav className="hidden items-center gap-6 text-[15px] font-medium text-[#1E293B] md:flex">
        {/* Home Link */}
        <Link href="/" className="transition-colors hover:text-black">
          Home
        </Link>

        {/* Services Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setDesktopServicesOpen(true)}
          onMouseLeave={() => setDesktopServicesOpen(false)}
        >
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded={desktopServicesOpen}
            onClick={() => setDesktopServicesOpen((v) => !v)}
            className="flex items-center gap-1.5 transition-colors hover:text-black"
          >
            Services
            <svg
              className={`h-3.5 w-3.5 text-[#4B5563] transition-transform ${
                desktopServicesOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {desktopServicesOpen && services.length > 0 && (
            <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
              <div className="grid w-[34rem] grid-cols-[13rem_1fr] overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl text-slate-800">
                {/* Service list */}
                <ul className="border-r border-slate-100 p-1 space-y-0.5">
                  {services.map((s) => {
                    const firstCity = s.cities[0]?.slug ?? "noida";
                    const isCurrentCategory = pathname.startsWith(`/${s.slug}`);
                    return (
                      <li key={s.slug}>
                        <Link
                          href={`/${s.slug}/${firstCity}`}
                          onMouseEnter={() => setActiveService(s.slug)}
                          onClick={closeAll}
                          className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors ${
                            active?.slug === s.slug || isCurrentCategory
                              ? "bg-slate-100 text-purple-700"
                              : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                          }`}
                        >
                          <span>{s.label}</span>
                          <span aria-hidden="true">›</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                {/* Cities submenu */}
                <div className="p-2">
                  <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {active?.label} — Cities
                  </p>
                  <ul className="grid grid-cols-2 gap-1 mt-1">
                    {active?.cities.map((c) => {
                      const href = `/${active.slug}/${c.slug}`;
                      const isActive = pathname === href;
                      return (
                        <li key={c.slug}>
                          <Link
                            href={href}
                            onClick={closeAll}
                            className={`block rounded-lg px-3 py-1.5 text-sm transition-colors ${
                              isActive
                                ? "bg-purple-50 font-semibold text-purple-700"
                                : "text-slate-600 hover:bg-slate-100 hover:text-purple-600"
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

        {/* Case Study Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setDesktopCaseOpen(true)}
          onMouseLeave={() => setDesktopCaseOpen(false)}
        >
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded={desktopCaseOpen}
            onClick={() => setDesktopCaseOpen((v) => !v)}
            className="flex items-center gap-1.5 transition-colors hover:text-black"
          >
            Case Study
            <svg
              className={`h-3.5 w-3.5 text-[#4B5563] transition-transform ${
                desktopCaseOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {desktopCaseOpen && (
            <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
              <div className="w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl text-slate-800">
                <Link
                  href="#work"
                  onClick={closeAll}
                  className="block rounded-xl px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-purple-700"
                >
                  Automotive VR Showcase
                </Link>
                <Link
                  href="#work"
                  onClick={closeAll}
                  className="block rounded-xl px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-purple-700"
                >
                  Interactive Configurator
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Portfolio */}
        <a href="#work" className="transition-colors hover:text-black">
          Portfolio
        </a>

        {/* About Us */}
        <a href="#about" className="transition-colors hover:text-black">
          About Us
        </a>

        {/* Contact Us */}
        <a href="#contact" className="transition-colors hover:text-black">
          Contact Us
        </a>
      </nav>

      {/* ---------- Mobile Trigger (< md) ---------- */}
      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((v) => !v)}
        className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0B0F19] text-white"
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
        <div className="absolute inset-x-4 top-20 z-50 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl text-slate-900 md:hidden">
          <ul className="space-y-2">
            <li>
              <Link href="/" onClick={closeAll} className="block py-2 text-base font-semibold">
                Home
              </Link>
            </li>
            {services.map((s) => {
              const open = mobileService === s.slug;
              return (
                <li key={s.slug} className="border-t border-slate-100 pt-2">
                  <button
                    type="button"
                    onClick={() => setMobileService(open ? null : s.slug)}
                    className="flex w-full items-center justify-between py-2 text-left text-base font-semibold"
                  >
                    {s.label}
                    <span className={`transition-transform ${open ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {open && (
                    <ul className="grid grid-cols-2 gap-1.5 pb-2 pt-1">
                      {s.cities.map((c) => (
                        <li key={c.slug}>
                          <Link
                            href={`/${s.slug}/${c.slug}`}
                            onClick={closeAll}
                            className="block rounded-lg px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-100 hover:text-purple-600"
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
            <li className="border-t border-slate-100 pt-2">
              <a href="#work" onClick={closeAll} className="block py-2 text-base font-semibold">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeAll} className="block py-2 text-base font-semibold">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeAll} className="block py-2 text-base font-semibold">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
