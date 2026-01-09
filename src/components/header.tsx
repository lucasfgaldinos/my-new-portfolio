import { CaretDownIcon, ListIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { HeaderLink } from "./headerLink";

export function Header() {
  const [mobileNavIsActive, setMobileNavIsActive] = useState(false);

  return (
    <header className="flex flex-col fixed w-full top-0 left-0 shadow">
      <div className="flex items-center justify-between py-2 px-4 md:py-3 md:px-5 max-w-5xl w-full mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-black text-white p-1 rounded-sm w-fit h-fit flex items-center">{`</>`}</div>
          <strong className="text-base md:text-xl">Lucas Galdino</strong>
        </div>

        <nav className="items-center gap-4 hidden md:flex lg:gap-10">
          <HeaderLink>Projetos</HeaderLink>
          <HeaderLink>Sobre</HeaderLink>
          <HeaderLink>Habilidades</HeaderLink>
          <HeaderLink>
            Contato <CaretDownIcon />
          </HeaderLink>
        </nav>

        <button
          onClick={() => setMobileNavIsActive((value) => !value)}
          type="button"
          className="cursor-pointer p-1.5 shadow rounded-xl md:hidden"
        >
          <ListIcon size={30} weight="light" />
        </button>
      </div>

      <nav
        className={`
          ${mobileNavIsActive ? "flex" : "hidden"}
          md:hidden bg-white w-full p-4 flex-col gap-6 items-center
        `}
      >
        <HeaderLink>Projetos</HeaderLink>
        <HeaderLink>Sobre</HeaderLink>
        <HeaderLink>Habilidades</HeaderLink>
        <HeaderLink>
          Contato <CaretDownIcon />
        </HeaderLink>
      </nav>
    </header>
  );
}
