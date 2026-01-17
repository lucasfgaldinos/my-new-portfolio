import { useState } from "react";

type OptionsProps = "Destaques" | "Freelancer" | "Full Stack" | "Frontend";

export function ProjectsNav() {
  const options: OptionsProps[] = [
    "Destaques",
    "Freelancer",
    "Full Stack",
    "Frontend",
  ];
  const [isActive, setIsActive] = useState<OptionsProps>("Destaques");

  return (
    <nav className="flex flex-row gap-1.5 bg-gray-100 w-fit rounded-full p-1.5 mx-auto md:mx-0">
      {options.map((item) => (
        <button
          onClick={() => setIsActive(item)}
          key={item}
          className={`
              py-1 px-2 md:py-2 md:px-4 flex items-center justify-center rounded-full text-xs md:text-base cursor-pointer font-medium transition
              ${isActive === item ? "hover:white" : "hover:bg-gray-200"}
              ${isActive === item && "bg-white shadow"}
              `}
          type="button"
        >
          {item}
        </button>
      ))}
    </nav>
  );
}
