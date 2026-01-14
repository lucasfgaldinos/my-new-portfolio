import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-300 border-t border-gray-400">
      <div className="max-w-5xl w-full py-8 md:py-24 px-4 md:px-10 mx-auto">
        <div className="pb-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-black text-white p-1 rounded-sm w-fit h-fit flex items-center">{`</>`}</div>
            <strong className="text-base md:text-xl">Lucas Galdino</strong>
          </div>

          <div className="flex items-center gap-4">
            <p className="font-bold text-gray-500 cursor-pointer">Projetos</p>
            <p className="font-bold text-gray-500 cursor-pointer">Sobre</p>
            <p className="font-bold text-gray-500 cursor-pointer">
              Habilidades
            </p>
          </div>
        </div>

        <div className="pt-10 flex flex-col-reverse gap-8 items-center md:flex-row md:gap-0 md:justify-between border-t border-gray-400">
          <p className="text-gray-600 font-medium">
            &copy; {currentYear} - <strong>Lucas Galdino</strong>. Todos os
            direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 transform hover:scale-110 transition"
              href="https://www.linkedin.com/in/lucas-fernando-galdino-da-silva/"
            >
              <LinkedinLogoIcon size={32} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 transform hover:scale-110 transition"
              href="https://github.com/lucasfgaldinos"
            >
              <GithubLogoIcon size={32} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
