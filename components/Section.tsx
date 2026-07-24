import type { Section as SectionType } from "@/lib/types";
import TextMedia from "./sections/TextMedia";
import CardGrid from "./sections/CardGrid";
import ProcessSteps from "./sections/ProcessSteps";
import CalloutBand from "./sections/CalloutBand";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import CtaForm from "./sections/CtaForm";
import Faqs from "./sections/Faqs";

// Dispatch a single section to its renderer by `type`. Sections render in JSON order,
// so add/remove/reorder is purely a data change (TC-11). Unknown types render nothing.
export default function Section({ section }: { section: SectionType }) {
  switch (section.type) {
    case "text-media":
      return <TextMedia data={section} />;
    case "card-grid":
      return <CardGrid data={section} />;
    case "process":
      return <ProcessSteps data={section} />;
    case "callout":
      return <CalloutBand data={section} />;
    case "gallery":
      return <Gallery data={section} />;
    case "testimonials":
      return <Testimonials data={section} />;
    case "cta-form":
      return <CtaForm data={section} />;
    case "faqs":
      return <Faqs data={section} />;
    default:
      return null;
  }
}
