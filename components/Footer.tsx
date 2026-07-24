import Container from "./Container";

const COLUMNS = [
  { title: "Services", links: ["Virtual Showroom", "Game Development", "AR / VR", "3D Modeling"] },
  { title: "Company", links: ["About", "Work", "Careers", "Contact"] },
  { title: "Resources", links: ["Blog", "Case Studies", "Support", "Privacy"] },
];

export default function Footer({ brand }: { brand: string }) {
  return (
    <footer className="border-t border-border bg-background pt-20 pb-10">
      <Container>
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="text-[4rem] font-black tracking-tight text-accent leading-none sm:text-[6rem] lg:text-[8rem]">
            {brand}
          </div>
          <p className="mt-6 max-w-md text-base text-muted">
            Immersive experiences for modern brands — built to convert.
          </p>
        </div>
        
        <div className="grid gap-10 border-t border-border/60 pt-10 sm:grid-cols-3 text-center">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="transition-colors hover:text-accent">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted sm:flex-row">
          <div>© {new Date().getFullYear()} {brand}. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
