import { useEffect, useMemo, useState } from "react";

const desktopParticles = 40;
const mobileParticles = 16;

export function Background() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    const update = () => setIsMobile(media.matches);
    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const particles = useMemo(() => {
    const amount = isMobile ? mobileParticles : desktopParticles;

    return Array.from({ length: amount }).map(() => ({
      id: crypto.randomUUID(),
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 3 + Math.random() * 6,
      duration: 12 + Math.random() * 6,
      delay: Math.random() * 6,
      opacity: 0.2 + Math.random() * 0.4,
    }));
  }, [isMobile]);

  return (
    <div
      className="fixed top-0 left-0 w-screen h-svh -z-10 pointer-events-none bg-background"
      style={{
        transform: "translateZ(0)",
        willChange: "transform",
      }}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-xs animate-float"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: "rgba(50,80,255, 0.40)",
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}
