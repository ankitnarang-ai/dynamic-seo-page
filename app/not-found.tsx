import Link from "next/link";
import Container from "@/components/Container";

// Custom 404 shown for invalid service or city slugs (TC-14).
export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center py-24">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">404</p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          This page doesn&apos;t exist
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-muted">
          The service or location you&apos;re looking for isn&apos;t available. Check the URL or
          head back home.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
        >
          Go home
        </Link>
      </Container>
    </main>
  );
}
