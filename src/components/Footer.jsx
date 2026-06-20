import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-stone-200/60 bg-brand-card mt-32 py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">

        {/* Column 1 */}
        <div className="text-left space-y-1">
          <h2 className="text-2xl font-bold tracking-tighter text-brand-primary uppercase">
            KAPIL SHRESTHA
          </h2>
          <p className="text-sm font-medium text-brand-muted tracking-tight">
            Full-Stack Developer
          </p>
        </div>

        {/* Column 2: Digital Contact channels */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-widest text-brand-highlight font-semibold">Connect</h4>
          <ul className="text-sm space-y-2 text-brand-muted">
            <li><a href="https://github.com/KapilShrestha21" className="hover:text-brand-primary transition">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/kapil-shrestha-0baa5433b/" className="hover:text-brand-primary transition">LinkedIn</a></li>
            <li><a href="mailto:kapilshrestha890@gmail.com" className="hover:text-brand-primary transition">Email</a></li>
            <li><a href="" className="hover:text-brand-primary transition">kapilshrestha890@gmail.com</a></li>
          </ul>
        </div>

        {/* Column 3: Status details */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-widest text-brand-muted font-semibold">Location & Time</h4>
          <p className="text-sm text-brand-primary">Based in Nepal / Remote</p>
          <p className="text-xs font-mono text-brand-muted">© {currentYear} — All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}