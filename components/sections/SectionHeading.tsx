// Small shared section-title block used by the section renderers.
export default function SectionHeading({
  heading,
  subheading,
  center,
}: {
  heading: string;
  subheading?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{heading}</h2>
      {subheading && <p className="mt-3 text-base text-muted">{subheading}</p>}
    </div>
  );
}
