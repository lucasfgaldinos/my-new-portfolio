import type { Project } from "@/data/projects";
import { Button } from "./ui/button";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project: props }: ProjectCardProps) {
  return (
    <div className="w-full border border-gray-300 rounded-xl overflow-hidden mt-3">
      <div className="w-full aspect-video overflow-hidden cursor-grab active:cursor-grabbing">
        <img
          className="w-full h-full object-cover"
          src={props.banner}
          alt={`Banner ${props.name}`}
        />
      </div>

      <div className="w-full p-4 cursor-grab active:cursor-grabbing">
        <div className="flex flex-col gap-3">
          <b className="text-2xl">{props.name}</b>
          <p>{props.description}</p>
          <div className="flex items-center gap-2 flex-wrap">
            {props.stack.map((item) => (
              <span
                className="p-0.5 px-2.5 rounded-xl bg-emerald-300 text-sm font-medium"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 mt-20">
          {props.links?.deploy && <Button>{props.links.deploy}</Button>}

          {props.links?.repo && <Button>{props.links.repo}</Button>}

          <Button>Ver imagens</Button>
        </div>
      </div>
    </div>
  );
}
