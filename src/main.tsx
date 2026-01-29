import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "next-themes";
import { Home } from "./screens/home";

// biome-ignore lint: false positive
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider attribute="class">
      <Home />
    </ThemeProvider>
  </StrictMode>,
);
