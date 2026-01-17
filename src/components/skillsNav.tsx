import type { Dispatch, SetStateAction } from "react";
import { buttonOptions } from "@/data/buttonOptions";
import type { Stack } from "@/data/skills";

type SkillsNavProps = React.ComponentProps<"div"> & {
  skillActive: Stack;
  setSkillActive: Dispatch<SetStateAction<Stack>>;
};

export function SkillsNav({
  skillActive,
  setSkillActive,
  ...props
}: SkillsNavProps) {
  return (
    <div
      {...props}
      className="w-full border-b-2 border-gray-200 flex gap-4 md:gap-6"
    >
      {buttonOptions.length > 0 &&
        buttonOptions.map((item) => (
          <button
            key={item.skillName}
            className={`
          relative top-0.5 pb-1 md:pb-2 font-medium text-sm cursor-pointer md:text-lg transition
        ${skillActive === item.skillName ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-400 border-b-2 border-transparent"}
      `}
            onClick={() => setSkillActive(item.skillName)}
            type="button"
          >
            {item.screenName}
          </button>
        ))}
    </div>
  );
}
