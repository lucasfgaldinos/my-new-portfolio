import img from "@/assets/projects/gbuddy/1.jpg";
import type { Project } from ".";

export const gbuddy: Project = {
  name: "G.Buddy - WebApp",
  description:
    "Desenvolvimento de componentes e modais interativos para aplicativo web de academia.",
  stack: ["HTML", "CSS", "JavaScript"],
  type: "frontend",
  isFreelancer: true,
  isHighlight: true,
  banner: img,
  imgs: [img],
  links: { deploy: "https://www.gbuddyapp.com" },
};
