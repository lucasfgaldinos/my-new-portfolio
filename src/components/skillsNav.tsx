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
      className="w-full border-b-2 border-border flex gap-4 md:gap-6"
    >
      {skillButtonNavOptions.length > 0 &&
        skillButtonNavOptions.map((item) => (
          <button
            key={item.skillName}
            className={`
          relative top-0.5 pb-1 md:pb-2 font-medium text-sm cursor-pointer md:text-lg border-b-2
        ${skillActive === item.skillName ? "text-foreground border-foreground" : "text-muted-foreground border-transparent"}
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
