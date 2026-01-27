import {
  FileDocIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";
import profilePicture from "@/assets/profilePicture.jpg";
import { SectionContainer } from "@/components/sectionContainer";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <SectionContainer className="mt-16 md:mt-26">
      <div className="flex flex-col-reverse md:flex-row md:justify-between gap-6 md:gap-16">
        <div className="max-w-lg w-full">
          <p className="text-my-text-blue font-medium">
            Olá, seja bem-vindo(a) ao meu portfólio! Eu sou
          </p>
          <h1 className="text-my-text-blue font-extrabold text-3xl">
            Lucas Galdino
          </h1>
          <h2 className="font-bold text-3xl leading-5 text-my-primary-text">
            Desenvolvedor Full Stack
          </h2>
          <p className="font-medium text-my-secondary-text my-7">
            Com mais de 2 anos de experiência, sou apaixonado por criar soluções
            web inovadoras e eficientes. Minha expertise abrange tanto o
            desenvolvimento frontend quando o backend, permitindo-me construir
            aplicações completas e de alta qualidade.
          </p>

          <div className="flex flex-col gap-3 md:flex-row">
            <Button>
              Meu LinkedIn <LinkedinLogoIcon />
            </Button>
            <Button>
              Meu GitHub <GithubLogoIcon />
            </Button>
            <Button>
              Meu CV <FileDocIcon />
            </Button>
          </div>
        </div>

        <div className="shrink-0 w-30 h-30 md:w-50 md:h-50 rounded-full overflow-hidden">
          <img
            src={profilePicture}
            alt="Foto de perfil"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </SectionContainer>
  );
}
