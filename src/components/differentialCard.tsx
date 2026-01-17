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
    <div
      {...props}
      className="flex items-center md:hover:bg-blue-100 rounded-sm transition p-1 hover:shadow hover:transform hover:scale-102"
    >
      <div className="text-blue-600 h-full flex items-center justify-center pr-3">
        {icon}
      </div>

      <div>
        <p className="font-bold">{title}</p>
        <p className="text-gray-500 font-medium text-sm">{subTitle}</p>
      </div>
    </div>
  );
}
