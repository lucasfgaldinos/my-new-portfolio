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
      <div className="text-primary h-full flex items-center justify-center pr-3">
        {icon}
      </div>

      <div>
        <p className="font-bold">{title}</p>
        <p className="text-muted-foreground font-medium text-sm">{subTitle}</p>
      </div>
    </div>
  );
}
