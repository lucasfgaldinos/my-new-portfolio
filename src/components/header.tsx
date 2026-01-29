import { CodeIcon, ListIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { ContactDropdown } from "./contactDropdown";
import { HeaderLink } from "./headerLink";
import { ThemeToggleButton } from "./themeToggleButton";

export function Header() {
  const [mobileNavIsActive, setMobileNavIsActive] = useState(false);

  return (
    <header className="flex flex-col fixed w-full top-0 left-0 shadow z-50 bg-my-background/50 backdrop-blur-md">
      <div className="flex items-center justify-between py-2 px-4 md:py-3 md:px-5 max-w-5xl w-full mx-auto">
        <div className="flex items-center gap-2">
          <div className="text-my-background p-1.5 bg-my-primary-text rounded-lg">
            <CodeIcon weight="bold" />
          </div>
          <strong className="text-base md:text-xl">Lucas Galdino</strong>
        </div>

        {/* Nav desktop */}
        <nav className="items-center gap-4 hidden md:flex lg:gap-10">
          <HeaderLink>Projetos</HeaderLink>
          <HeaderLink>Sobre</HeaderLink>
          <HeaderLink>Habilidades</HeaderLink>
          <ContactDropdown />

          <ThemeToggleButton />
        </nav>

        {/* Botão de menu -> aparece apenas em telas pequenas */}
        <button
          onClick={() => setMobileNavIsActive((value) => !value)}
          type="button"
          className="cursor-pointer p-1.5 shadow rounded-xl md:hidden"
        >
          <ListIcon size={30} weight="light" />
        </button>
      </div>

      {/* Nav mobile */}
      <nav
        className={`
          ${mobileNavIsActive ? "flex" : "hidden"}
          md:hidden w-full p-4 flex-col gap-6 items-center
        `}
      >
        <HeaderLink>Projetos</HeaderLink>
        <HeaderLink>Sobre</HeaderLink>
        <HeaderLink>Habilidades</HeaderLink>
        <ContactDropdown />

        <ThemeToggleButton />
      </nav>
    </header>
  );
}
