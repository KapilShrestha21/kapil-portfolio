import React, { useState } from 'react';

export default function AnimatedLetter({ children, variant = "solid" }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      // Synchronized perfectly to turn off exactly when the 0.8s CSS animation ends
      setTimeout(() => setIsPlaying(false), 800);
    }
  };

  // Base configurations for standard static layout
  const baseStyles = variant === "solid"
    ? "text-brand-primary"
    : "text-transparent [-webkit-text-stroke:1.5px_var(--color-brand-primary)] md:[-webkit-text-stroke:2.5px_var(--color-brand-primary)]";

  // Dynamic active configurations applied during an ongoing bounce cycle
  const activeStyles = variant === "solid"
    ? "text-brand-highlight"
    : "text-transparent [-webkit-text-stroke:1.5px_var(--color-brand-highlight)] md:[-webkit-text-stroke:2.5px_var(--color-brand-highlight)]";

  return (
    <span
      onMouseEnter={handleMouseEnter}
      className={`inline-block cursor-default select-none font-sans font-black tracking-tighter transition-colors duration-200 ${
        isPlaying ? `animate-rubberband ${activeStyles}` : baseStyles
      }`}
    >
      {children}
    </span>
  );
}