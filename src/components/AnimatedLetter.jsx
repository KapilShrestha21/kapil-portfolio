import React, { useState } from 'react';

export default function AnimatedLetter({ children, variant = "solid", className = "" }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleInteraction = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      setTimeout(() => setIsPlaying(false), 800);
    }
  };

  // 1px border on mobile, 2px border on md screens+
  // text-white fills the inside so overlapping internal font paths don't show through
  const baseStyles = variant === "solid"
    ? "text-brand-primary"
    : "text-white [-webkit-text-stroke:1px_var(--color-brand-primary)] md:[-webkit-text-stroke:2px_var(--color-brand-primary)]";

  const activeStyles = variant === "solid"
    ? "text-brand-highlight"
    : "text-white [-webkit-text-stroke:1px_var(--color-brand-highlight)] md:[-webkit-text-stroke:2px_var(--color-brand-highlight)]";

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