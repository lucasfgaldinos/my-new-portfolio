import { CodeIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { ContactDropdown } from "./contactDropdown";
import { HeaderLink } from "./headerLink";
import { ThemeToggleButton } from "./themeToggleButton";

export function Header() {
  const [mobileNavIsActive, setMobileNavIsActive] = useState(false);

  return (
    <header className="flex flex-col fixed w-full px-4 top-4 left-0 z-50">
      <div className="flex items-center justify-between py-2 px-4 md:py-3 md:px-5 max-w-5xl w-full mx-auto border border-my-light-gray rounded-2xl bg-my-background/50 backdrop-blur-md">
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
          className="cursor-pointer p-1 md:hidden"
        >
          {!mobileNavIsActive ? (
            <ListIcon size={30} weight="light" />
          ) : (
            <XIcon size={30} weight="light" />
          )}
        </button>
      </div>

      {/* Nav mobile */}
      <nav
        className={`
          ${mobileNavIsActive ? "flex" : "hidden"}
          mt-2 md:hidden w-full p-4 flex-col gap-6 items-center transition-transform bg-my-background/50 backdrop-blur-md rounded-2xl border border-my-light-gray
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
