import { motion } from "motion/react";

type SectionContainerProps = React.ComponentProps<"section">;

export function SectionContainer({
  children,
  className,
}: SectionContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <section
        className={`
        max-w-5xl w-full pt-24 pb-12 px-4 md:px-10 mx-auto
        ${className}
      `}
      >
        {children}
      </section>
    </motion.div>
  );
}
