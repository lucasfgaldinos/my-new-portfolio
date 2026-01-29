import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";

export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();

  function toggle() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <button onClick={toggle} type="button" className="cursor-pointer p-1.5">
      {theme === "light" ? (
        <MoonIcon size={24} className="text-indigo-800" />
      ) : (
        <SunIcon size={24} className="text-amber-300" />
      )}
    </button>
  );
}
