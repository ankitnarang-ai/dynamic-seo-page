// Shared content types. Everything on a page is described by these — all copy lives in JSON.

export type Cta = { label: string; href: string; variant?: "primary" | "ghost" };
export type Logo = { src: string; alt: string };
export type Card = { icon?: string; title: string; description: string };
export type Step = { no: string; title: string; description: string };
export type GalleryItem = { src: string; alt: string };
export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
  avatarAlt?: string;
};
export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "textarea";
  placeholder?: string;
};
export type Faq = { q: string; a: string };

// A section is a discriminated union on `type`. Add a new type here + a renderer,
// and it becomes usable from any service JSON.
export type Section =
  | { type: "text-media"; heading: string; body: string; image?: string; imageAlt?: string }
  | { type: "card-grid"; heading: string; subheading?: string; cards: Card[] }
  | { type: "process"; heading: string; subheading?: string; steps: Step[] }
  | { type: "callout"; heading: string; body: string }
  | { type: "gallery"; heading: string; subheading?: string; items: GalleryItem[] }
  | { type: "testimonials"; heading: string; subheading?: string; items: Testimonial[] }
  | { type: "cta-form"; heading: string; subheading?: string; fields: Field[]; submitLabel: string }
  | { type: "faqs"; heading: string; subheading?: string; items: Faq[] };

export type Hero = {
  titlePrefix?: string;
  highlight: string;
  titleSuffix?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  bullets?: string[];
  ctas?: Cta[];
};

export type Seo = {
  metaTitle: string;
  metaDescription: string;
  keywords?: string[];
  robots?: string;
  canonical: string;
  og?: {
    title?: string;
    description?: string;
    image?: string;
    imageWidth?: number;
    imageHeight?: number;
    siteName?: string;
  };
  twitter?: { card?: string; title?: string; description?: string; image?: string };
};

export type ServiceData = {
  slug: string;
  label: string;
  hero: Hero;
  logos?: { heading?: string; items: Logo[] };
  sections?: Section[];
  seo: Seo;
};

export type City = { label: string; country: string; locale: string };
export type Cities = Record<string, City>;

// Fully resolved page (all {tokens} replaced), ready to render.
export type PageData = {
  service: string;
  location: string;
  city: City;
  data: ServiceData;
};

// Navigation menu tree — generated from JSON, consumed by the navbar dropdown.
export type NavCity = { slug: string; label: string };
export type NavService = { slug: string; label: string; cities: NavCity[] };
