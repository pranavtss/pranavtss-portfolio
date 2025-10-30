import React, { useMemo } from "react";

export default function Starfield({ starCount = 50, rayCount = 5 }) {
  const stars = useMemo(() => {
    return [...Array(starCount)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      delay: Math.random() * 6,
      duration: Math.random() * 6 + 4,
      opacity: Math.random() * 0.8 + 0.2,
    }));
  }, [starCount]);

  const lightRays = useMemo(() => {
    return [...Array(rayCount)].map((_, i) => ({
      id: i,
      width: `${Math.random() * 300 + 150}px`,
      height: `${Math.random() * 3 + 1}px`,
      top: `${Math.random() * 100}%`,
      rotate: `${Math.random() * 360}deg`,
      duration: Math.random() * 15 + 6,
      delay: Math.random() * 6,
      opacity: Math.random() * 0.3 + 0.15,
      direction: Math.random() > 0.5 ? "leftToRight" : "rightToLeft",
    }));
  }, [rayCount]);

  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((s) => (
        <span
          key={`s-${s.id}`}
          className="star"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}

      {lightRays.map((r) => (
        <span
          key={`r-${r.id}`}
          className={`light-ray ${r.direction === "leftToRight" ? "ltr" : "rtl"}`}
          style={{
            top: r.top,
            width: r.width,
            height: r.height,
            opacity: r.opacity,
            ["--ray-rotate"]: r.rotate,
            animationDelay: `${r.delay}s`,
            animationDuration: `${r.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
