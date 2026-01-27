import type { WorkExperience } from "@/data/workExperience";

type WorkExperienceCardProps = React.ComponentProps<"div"> & {
  workExperience: WorkExperience;
};

export function WorkExperienceCard({
  workExperience,
  ...props
}: WorkExperienceCardProps) {
  return (
    <div {...props} className="flex relative gap-4 pl-2">
      <div className="w-0.5 self-stretch bg-my-light-gray rounded-full py-2" />
      <div className="absolute w-2 h-2 bg-my-text-blue rounded-full left-1.25" />

      <div className="relative -top-2 w-full px-1">
        <span className="text-my-secondary-text font-medium">
          {workExperience.startDate} -{" "}
          {workExperience.endDate ? workExperience.endDate : "Presente"}
        </span>

        <p className="text-lg text-my-primary-text font-bold">
          {workExperience.title}
        </p>
        <span className="text-my-text-blue font-medium relative -top-1">
          {workExperience.companyName}
        </span>

        <p className="text-my-secondary-text font-medium mb-4">
          {workExperience.description}
        </p>
      </div>
    </div>
  );
}
