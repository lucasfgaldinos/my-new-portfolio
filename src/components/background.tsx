import { useMemo } from "react";

const particlesAmount = 40;

export function Background() {
  const particles = useMemo(
    () =>
      Array.from({ length: particlesAmount }).map(() => ({
        id: crypto.randomUUID(),
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 3 + Math.random() * 6,
        duration: 12 + Math.random() * 6,
        delay: Math.random() * 6,
        opacity: 0.2 + Math.random() * 0.4,
      })),
    [],
  );

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none bg-background">
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
