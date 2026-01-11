type SectionContainerProps = React.ComponentProps<"section">;

export function SectionContainer({
  children,
  className,
}: SectionContainerProps) {
  return (
    <section
      className={`
        max-w-5xl w-full py-8 md:py-24 px-4 md:px-10 mx-auto
        ${className}
      `}
    >
      {children}
    </section>
  );
}
