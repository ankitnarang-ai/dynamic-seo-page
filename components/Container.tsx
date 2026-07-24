import type { ReactNode } from "react";

// Shared width constraint used by every section — keeps content centered and
// prevents horizontal overflow at all breakpoints (TC-15..17).
export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className ?? ""}`}>
      {children}
    </div>
  );
}
