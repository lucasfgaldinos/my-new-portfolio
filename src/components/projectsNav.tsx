import { useState } from "react";
import {
  type ProjectButtonOptions,
  projectButtonOptions,
} from "@/data/projectButtonOptions";

export function ProjectsNav() {
  const [isActive, setIsActive] = useState<ProjectButtonOptions>("highlights");

  return (
    <nav className="flex flex-row gap-1.5 bg-gray-100 w-fit rounded-full p-1.5 mx-auto md:mx-0">
      {projectButtonOptions.map((item) => (
        <button
          onClick={() => setIsActive(item.optionName)}
          key={item.optionName}
          className={`
              py-1 px-2 md:py-2 md:px-4 flex items-center justify-center rounded-full text-xs md:text-base cursor-pointer font-medium transition
              ${isActive === item.optionName ? "hover:white" : "hover:bg-gray-200"}
              ${isActive === item.optionName && "bg-white shadow"}
              `}
          type="button"
        >
          {item.screenName}
        </button>
      ))}
    </nav>
  );
}
