import type { Dispatch, SetStateAction } from "react";
import { skillButtonNavOptions } from "@/data/skillButtonOptions";
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
      className="w-full border-b-2 border-my-light-gray flex gap-4 md:gap-6"
    >
      {skillButtonNavOptions.length > 0 &&
        skillButtonNavOptions.map((item) => (
          <button
            key={item.skillName}
            className={`
          relative top-0.5 pb-1 md:pb-2 font-medium text-sm cursor-pointer md:text-lg transition
        ${skillActive === item.skillName ? "text-my-text-blue border-b-2 border-my-text-blue" : "text-my-secondary-text border-b-2 border-transparent"}
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
