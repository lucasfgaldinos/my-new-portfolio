import type { Dispatch, SetStateAction } from "react";
import {
  type ProjectButtonOptions,
  projectButtonOptions,
} from "@/data/projectButtonOptions";

type ProjectsNavProps = React.ComponentProps<"nav"> & {
  isActive: ProjectButtonOptions;
  setIsActive: Dispatch<SetStateAction<ProjectButtonOptions>>;
};

export function ProjectsNav({
  isActive,
  setIsActive,
  ...props
}: ProjectsNavProps) {
  return (
    <nav
      {...props}
      className="flex flex-row gap-1.5 bg-muted w-fit rounded-full p-1.5 mx-auto md:mx-0"
    >
      {projectButtonOptions.map((item) => (
        <button
          onClick={() => setIsActive(item.optionName)}
          key={item.optionName}
          className={`
              px-2 py-2 md:px-4 flex items-center justify-center rounded-full text-xs md:text-base cursor-pointer font-medium
              ${isActive === item.optionName ? "hover:bg-background bg-background shadow" : "hover:bg-muted-foreground/20"}
              `}
          type="button"
        >
          {item.screenName}
        </button>
      ))}
    </nav>
  );
}
