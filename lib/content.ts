import fs from "node:fs";
import path from "node:path";
import type { Cities, City, NavService, PageData, ServiceData } from "./types";

const DATA_DIR = path.join(process.cwd(), "data");
const SERVICES_DIR = path.join(DATA_DIR, "services");

// Read + parse a JSON file, returning null if it does not exist / is invalid.
// Files are loaded at request time (not bundled), so dropping in a new JSON file
// serves immediately with NO rebuild — the scalability requirement.
function readJson<T>(file: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return null;
  }
}

// Title-case a slug for display / token fallback, e.g. "game-development" -> "Game Development".
function humanize(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function getAllCities(): Cities {
  return readJson<Cities>(path.join(DATA_DIR, "cities.json")) ?? {};
}

// List available service slugs (used by the home index).
export function getAllServiceSlugs(): string[] {
  try {
    return fs
      .readdirSync(SERVICES_DIR)
      .filter((f) => f.endsWith(".json"))
      .map((f) => f.replace(/\.json$/, ""));
  } catch {
    return [];
  }
}

// Build the navbar menu tree (Services → cities) entirely from JSON on disk, so a new
// service file or city entry appears automatically with no code change and no rebuild.
export function getNavServices(): NavService[] {
  const cities: NavService["cities"] = Object.entries(getAllCities()).map(([slug, c]) => ({
    slug,
    label: c.label,
  }));

  return getAllServiceSlugs().map((slug) => {
    const raw = readJson<ServiceData>(path.join(SERVICES_DIR, `${slug}.json`));
    return { slug, label: raw?.label ?? humanize(slug), cities };
  });
}

// Replace {city}, {country}, {service} tokens in a single string.
function fillTokens(str: string, tokens: Record<string, string>): string {
  return str.replace(/\{(\w+)\}/g, (m, key) =>
    Object.prototype.hasOwnProperty.call(tokens, key) ? tokens[key] : m,
  );
}

// Deep-walk any JSON value, replacing tokens in every string. This single pass
// drives hero, description, bullets, sections and SEO — nothing is templated by hand.
function deepFill<T>(value: T, tokens: Record<string, string>): T {
  if (typeof value === "string") return fillTokens(value, tokens) as unknown as T;
  if (Array.isArray(value)) return value.map((v) => deepFill(v, tokens)) as unknown as T;
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      out[k] = deepFill(v, tokens);
    }
    return out as T;
  }
  return value;
}

// Load + resolve a page. Returns null for any unknown service or city (→ 404).
export function getPageData(service: string, location: string): PageData | null {
  const cities = getAllCities();
  const city: City | undefined = cities[location];
  if (!city) return null;

  const raw = readJson<ServiceData>(path.join(SERVICES_DIR, `${service}.json`));
  if (!raw) return null;

  const tokens: Record<string, string> = {
    city: city.label,
    country: city.country,
    service: raw.label ?? humanize(service),
  };

  const data = deepFill(raw, tokens);
  return { service, location, city, data };
}
