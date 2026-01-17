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
      <div className="w-0.5 self-stretch bg-blue-200 rounded-full py-2" />
      <div className="absolute w-2 h-2 bg-blue-500 rounded-full left-[4.6px]" />

      <div className="relative -top-2 hover:bg-blue-100 hover:shadow w-full px-1 rounded-sm transition hover:transform hover:-translate-1">
        <span className="text-gray-500 font-medium">
          {workExperience.startDate} -{" "}
          {workExperience.endDate ? workExperience.endDate : "Presente"}
        </span>

        <p className="text-lg font-bold">{workExperience.title}</p>
        <span className="text-blue-500 font-medium relative -top-1">
          {workExperience.companyName}
        </span>

        <p className="text-gray-500 font-medium mb-4">
          {workExperience.description}
        </p>
      </div>
    </div>
  );
}
