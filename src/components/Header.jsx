import React from 'react';

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-brand-card/70 backdrop-blur-md border-b border-stone-200/60 py-4 px-6 transition-all">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        {/* Logo / Personal Brand */}
        <a href="#" className="font-mono font-bold text-lg tracking-tight text-brand-primary group">
          dev<span className="text-brand-highlight group-hover:text-brand-primary transition">.</span>portfolio
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-sm font-medium text-brand-muted">
          <a href="#skills" className="hover:text-brand-primary transition underline-offset-4 hover:underline scroll-mt-24">
            Skills
          </a>
          <a href="#projects" className="hover:text-brand-primary transition underline-offset-4 hover:underline scroll-mt-24">
            Projects
          </a>
          <a href="#contact" className="hover:text-brand-primary transition underline-offset-4 hover:underline scroll-mt-24">
            Contact
          </a>
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="text-xs font-mono uppercase tracking-wider bg-brand-accent text-brand-card px-4 py-2 rounded-lg hover:bg-brand-accent-hover transition shadow-sm scroll-mt-24"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </nav>
  );
}