import type { HTMLAttributes } from "react";

type HeaderLinkProps = HTMLAttributes<HTMLAnchorElement>;

export function HeaderLink({ children }: HeaderLinkProps) {
  return (
    <button
      type="button"
      className="text-lg font-medium cursor-pointer flex items-center gap-1 hover:text-blue-600 transition-colors"
    >
      {children}
    </button>
  );
}
