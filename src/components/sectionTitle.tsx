type SectionTitleProps = React.ComponentProps<"div"> & {
  title: string;
};

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="h-24 flex items-center relative">
      <h3 className="text-xl md:text-3xl font-bold">{title}</h3>
      <span className="text-8xl font-extrabold text-gray-100 absolute -left-3 -top-2 -z-10 select-none uppercase">
        {title}
      </span>
    </div>
  );
}
