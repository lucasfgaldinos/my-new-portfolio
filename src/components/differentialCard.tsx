import type { ReactNode } from "react";

type DifferentialCardProps = React.ComponentProps<"div"> & {
  icon: ReactNode;
  title: string;
  subTitle: string;
};

export function DifferentialCard({
  icon,
  title,
  subTitle,
  ...props
}: DifferentialCardProps) {
  return (
    <div {...props} className="flex items-center p-1">
      <div className="text-my-text-blue h-full flex items-center justify-center pr-3">
        {icon}
      </div>

      <div>
        <p className="font-bold text-my-primary-text">{title}</p>
        <p className="text-my-secondary-text font-medium text-sm">{subTitle}</p>
      </div>
    </div>
  );
}
