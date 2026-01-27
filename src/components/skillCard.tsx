import type { Skill } from "@/data/skills";

type SkillCardProps = React.ComponentProps<"div"> & {
  skill: Omit<Skill, "stack">;
};

export function SkillCard({ skill, ...props }: SkillCardProps) {
  return (
    <div
      {...props}
      className="flex items-center p-2 md:p-3 border border-my-light-gray w-30 md:w-54 gap-2 rounded-md"
    >
      <img
        className="w-6 h-6 md:w-8 md:h-8 aspect-square"
        src={skill.img}
        alt={skill.name}
      />

      <p className="text-sm md:text-base font-bold text-my-primary-text">
        {skill.name}
      </p>
    </div>
  );
}
