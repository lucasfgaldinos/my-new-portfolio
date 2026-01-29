import {
  CaretDownIcon,
  GithubLogoIcon,
  type IconProps,
  LinkedinLogoIcon,
  ReadCvLogoIcon,
} from "@phosphor-icons/react";
import clsx from "clsx";
import { type ComponentType, useEffect, useRef, useState } from "react";
import curriculum from "../../public/DesenvolvedorFullStack-LucasGaldino.pdf";
import { HeaderLink } from "./headerLink";

type UsefulLink = {
  label: string;
  url: string;
  icon: ComponentType<IconProps>;
};

const usefulLinks: UsefulLink[] = [
  {
    label: "LinkedIn",
    icon: LinkedinLogoIcon,
    url: "https://www.linkedin.com/in/lucas-fernando-galdino-da-silva",
  },
  {
    label: "GitHub",
    icon: GithubLogoIcon,
    url: "https://github.com/lucasfgaldinos",
  },
  {
    label: "Ver currículo",
    icon: ReadCvLogoIcon,
    url: curriculum,
  },
];

export function ContactDropdown() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggleDropdown() {
    setOpen((prev) => !prev);
  }

  function closeDropdown() {
    setOpen(false);
  }

  return (
    <div ref={containerRef} className="relative inline-block">
      {/* Trigger */}
      <HeaderLink
        onClick={toggleDropdown}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        Contato
        <CaretDownIcon
          size={16}
          className={clsx("ml-1 transition-transform", open && "rotate-180")}
        />
      </HeaderLink>

      {/* Dropdown */}
      {open && (
        <div
          role="menu"
          className="absolute left-1/2 z-50 mt-2 w-52 -translate-x-1/2 overflow-hidden rounded-lg bg-my-light-gray"
        >
          <ul className="py-2">
            {usefulLinks.map(({ label, url, icon: Icon }) => (
              <li key={url} className="group">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeDropdown}
                  className="group-hover:text-my-background flex items-center gap-2 px-4 py-2 text-sm text-my-secondary-text transition hover:bg-my-text-blue"
                >
                  <Icon size={22} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
