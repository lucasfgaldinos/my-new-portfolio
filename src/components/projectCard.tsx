import type { ProjectProps } from "@/data/projects";
import { Button } from "./ui/button";

type ProjectCardProp = {
  project: ProjectProps;
};

export function ProjectCard({ project: props }: ProjectCardProp) {
  return (
    <div className="w-full border border-gray-300 rounded-xl overflow-hidden mt-3">
      <div className="bg-violet-600 w-full h-36">
        {/* <img src="" alt="" /> */}
      </div>

      <div className="w-full p-4">
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
