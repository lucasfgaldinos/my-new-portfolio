import img1 from "@/assets/projects/atlasBurguer/1.png";
import img2 from "@/assets/projects/atlasBurguer/2.png";
import img3 from "@/assets/projects/atlasBurguer/3.png";
import img4 from "@/assets/projects/atlasBurguer/4.png";
import img5 from "@/assets/projects/atlasBurguer/5.png";
import img6 from "@/assets/projects/atlasBurguer/6.png";
import img7 from "@/assets/projects/atlasBurguer/7.png";
import img8 from "@/assets/projects/atlasBurguer/8.png";
import img9 from "@/assets/projects/atlasBurguer/9.png";
import type { Project } from ".";

export const atlasburguer: Project = {
  name: "Atlas Burguer",
  description:
    "Sistema de hamburgueria digital com pedidos online, área administrativa e pagamento integrado.",
  stack: [
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
  ],
  type: "fullstack",
  isFreelancer: false,
  isHighlight: true,
  banner: img1,
  imgs: [img1, img2, img3, img4, img5, img6, img7, img8, img9],
  links: { repo: "https://github.com/lucasfgaldinos/atlas-burger-interface" },
};
