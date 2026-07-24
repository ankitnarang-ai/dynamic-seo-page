"use client";

import { useState } from "react";

const FALLBACK = "/images/placeholder.svg";

type Props = {
  src?: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
};

// Plain <img> (deliberately NOT next/image) with an onError fallback, so a missing
// or broken path degrades gracefully to a placeholder — no hydration flash (TC-06/07).
export default function SafeImage({ src, alt, className, width, height, loading = "lazy" }: Props) {
  const [current, setCurrent] = useState(src && src.trim() ? src : FALLBACK);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={current}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      onError={() => {
        if (current !== FALLBACK) setCurrent(FALLBACK);
      }}
      className={`max-w-full ${className ?? ""}`}
    />
  );
}
