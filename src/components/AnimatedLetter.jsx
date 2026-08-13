import React, { useState } from 'react';

export default function AnimatedLetter({ children, variant = "solid", className = "" }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleInteraction = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      // Synchronized to turn off exactly when the 0.8s CSS animation ends
      setTimeout(() => setIsPlaying(false), 800);
    }
  };

  // FIX: Replacing 'text-transparent' with 'text-white' masks out internal font glyph lines
  const baseStyles = variant === "solid"
    ? "text-brand-primary"
    : "text-white [-webkit-text-stroke:1.5px_var(--color-brand-primary)] md:[-webkit-text-stroke:2.5px_var(--color-brand-primary)]";

  // Dynamic active configurations applied during an ongoing bounce cycle
  const activeStyles = variant === "solid"
    ? "text-brand-highlight"
    : "text-white [-webkit-text-stroke:1.5px_var(--color-brand-highlight)] md:[-webkit-text-stroke:2.5px_var(--color-brand-highlight)]";

  return (
    <span
      onMouseEnter={handleInteraction}
      onTouchStart={handleInteraction} /* Enable touch/tap animation on mobile */
      className={`inline-block cursor-default select-none font-sans font-black transition-colors duration-200 ${
        isPlaying ? `animate-rubberband ${activeStyles}` : baseStyles
      } ${className}`}
    >
      {children}
    </span>
  );
}