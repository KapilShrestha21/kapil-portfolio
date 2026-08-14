import React, { useState } from 'react';

export default function AnimatedLetter({ children, variant = "solid", className = "" }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleInteraction = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      // Resets after 0.8s matching the rubberband CSS animation duration
      setTimeout(() => setIsPlaying(false), 800);
    }
  };

  // Solid fill on mobile (< md breakpoint)
  // Outline stroke on desktop (>= md breakpoint)
  const baseStyles = variant === "solid"
    ? "text-brand-primary"
    : "text-brand-primary md:text-white md:[-webkit-text-stroke:2.5px_var(--color-brand-primary)]";

  const activeStyles = variant === "solid"
    ? "text-brand-highlight"
    : "text-brand-highlight md:text-white md:[-webkit-text-stroke:2.5px_var(--color-brand-highlight)]";

  return (
    <span
      onMouseEnter={handleInteraction}
      onTouchStart={handleInteraction}
      className={`inline-block cursor-default select-none font-sans font-black transition-colors duration-200 ${
        isPlaying ? `animate-rubberband ${activeStyles}` : baseStyles
      } ${className}`}
    >
      {children}
    </span>
  );
}