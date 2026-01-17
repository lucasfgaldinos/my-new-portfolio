type SectionTitleProps = React.ComponentProps<"div"> & {
  title: string;
};

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="h-10 md:h-19 flex items-center relative mb-8 md:mb-12">
      <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
      <span className="text-[45px] md:text-8xl font-extrabold text-gray-200 absolute -left-1.5 -top-3.75 md:-left-3 md:-top-4 -z-10 select-none uppercase">
        {title}
      </span>
    </div>
  );
}
