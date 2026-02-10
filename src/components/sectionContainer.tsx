type SectionContainerProps = React.ComponentProps<"section">;

export function SectionContainer({
  children,
  className,
}: SectionContainerProps) {
  return (
    <section
      className={`
        max-w-5xl w-full pt-24 pb-12 px-4 md:px-10 mx-auto
        ${className}
      `}
    >
      {children}
    </section>
  );
}
