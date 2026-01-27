import type { HTMLAttributes } from "react";

type HeaderLinkProps = HTMLAttributes<HTMLAnchorElement>;

export function HeaderLink({ children }: HeaderLinkProps) {
  return (
    <button
      type="button"
      className="text-lg text-my-primary-text font-medium cursor-pointer flex items-center gap-1 hover:text-my-text-blue transition-colors"
    >
      {children}
    </button>
  );
}
