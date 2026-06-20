import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineDatabase, HiOutlineTerminal } from "react-icons/hi";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import AnimatedLetter from './AnimatedLetter';

export default function Body() {
    const nameLines = [
        { text: "KAPIL", variant: "solid" },
        { text: "SHRESTHA", variant: "outline" }
    ];

    const projects = [
        {
            id: "01",
            title: "SHOES E-COMMERCE",
            description: "A full-stack e-commerce application featuring dynamic product filtering, persistent shopping cart state.",
            tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Drizzle ORM"],
            codeLink: "https://github.com/KapilShrestha21/Shoes-ecommerce-nextjs",
            demoLink: "https://shoes-ecommerce-nextjs.vercel.app/",
            accentBorder: "border-t-brand-highlight",
            tagTheme: "text-brand-highlight border-brand-highlight"
        },
        {
            id: "02",
            title: "MYSTERY MESSAGE",
            description: "An anonymous messaging platform designed for authentic feedback and interaction. Features real-time data handling, secure user authentication, and a minimalist interface for seamless communication.",
            tags: ["Next.js", "NextAuth", "Zod", "Tailwind CSS", "MongoDB", "TypeScript"],
            codeLink: "https://github.com/KapilShrestha21/Mystery-message-in-nextjs",
            demoLink: "https://mystery-message-in-nextjs.vercel.app/",
            accentBorder: "border-t-brand-highlight",
            tagTheme: "text-brand-highlight border-brand-highlight"
        },
        {
            id: "03",
            title: "MERN NOTEPAD",
            description: "A fast, streamlined note-taking application designed for rapid capture and organization. Built with a full-stack MERN architecture, it provides a persistent, clutter-free environment for managing thoughts instantly.",
            tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
            codeLink: "https://github.com/KapilShrestha21/mern-notepad",
            demoLink: "https://mern-notepad-xdh0.onrender.com/",
            accentBorder: "border-t-brand-highlight",
            tagTheme: "text-brand-highlight border-brand-highlight"
        }
    ];

    // Subtly colored icon backgrounds for a clean aesthetic
    const skillGroups = [
        {
            title: "Backend",
            icon: <HiOutlineDatabase className="text-xl text-red-600" />,
            iconBg: "bg-red-50",
            skills: ["Python", "Django", "Django REST Framework", "Node.js", "TypeScript"]
        },
        {
            title: "Frontend",
            icon: <FaReact  className="text-xl text-blue-600" />,
            iconBg: "bg-blue-50",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"]
        },
        {
            title: "Tools & Others",
            icon: <HiOutlineTerminal className="text-xl text-emerald-600" />,
            iconBg: "bg-emerald-50",
            skills: ["Git", "PostgreSQL", "MongoDB", "REST APIs"]
        }
    ];

    return (
        <main className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-32">

            {/* HERO SECTION */}
            <section className="space-y-8 max-w-4xl relative">
                <div className='flex flex-wrap items-center gap-y-2'>
                    <span className="text-sm font-mono uppercase tracking-widest text-brand-highlight font-semibold">
                        Available for Opportunities
                    </span>
                    <div className="flex items-center justify-center gap-1 text-sm font-mono text-brand-muted">
                        <IoLocationOutline className='ml-0 md:ml-4 text-base' /> Budhanilkantha, Kathmandu
                    </div>
                </div>

                <div className="py-6 select-none relative rounded-2xl">
                    <h1 className="text-7xl sm:text-7xl md:text-8xl lg:text-9xl uppercase flex flex-col gap-0 tracking-tighter">
                        {nameLines.map((line, wordIndex) => (
                            <div key={wordIndex} className="flex flex-wrap leading-[0.85] md:leading-[0.85]">
                                {line.text.split("").map((letter, letterIndex) => (
                                    <AnimatedLetter
                                        key={`${wordIndex}-${letterIndex}`}
                                        variant={line.variant}
                                    >
                                        {letter}
                                    </AnimatedLetter>
                                ))}
                            </div>
                        ))}
                    </h1>
                </div>

                <p className="text-sm sm:text-base md:text-base text-brand-muted leading-relaxed font-normal max-w-2xl">
                    I am a Full-Stack Web Developer passionate about building high-quality, performant applications.
                    I thrive on solving technical challenges and am eager to contribute my skills to a professional engineering team.
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                    <a href="#projects" className="bg-brand-accent text-brand-card px-6 py-3 rounded-lg text-sm font-medium hover:bg-brand-accent-hover transition shadow-sm">
                        Explore Projects
                    </a>
                    <a
                        href="/kapilCV.pdf"
                        download="Kapil_Shrestha_CV.pdf"
                        className="border border-stone-300 text-brand-primary px-6 py-3 rounded-lg text-sm font-medium hover:bg-stone-100 transition">
                        Download CV
                    </a>
                </div>
            </section>


            {/* TECHNICAL SKILLS SECTION */}
            <section id='skills' className="space-y-8">
                <div className="border-b border-stone-200 pb-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-brand-primary">Technical Expertise</h2>
                    <p className="text-sm text-brand-muted mt-1">Core stacks and specialized tools I build with.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {skillGroups.map((group, index) => (
                        <div
                            key={index}
                            className="bg-white border border-stone-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-stone-300 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                {/* Clean color accent on the icon */}
                                <div className={`p-2.5 rounded-lg ${group.iconBg}`}>
                                    {group.icon}
                                </div>
                                <h3 className="font-semibold text-base text-stone-900">
                                    {group.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-stone-50 text-stone-600 text-xs font-medium px-3 py-1.5 rounded-md border border-stone-200 hover:bg-stone-100 hover:text-stone-900 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* PROJECTS SECTION */}
            <section id="projects" className="space-y-12 scroll-mt-24">
                <div className="border-b border-stone-200 pb-4 flex justify-between items-end">
                    <h2 className="text-2xl font-semibold tracking-tight text-brand-primary">Selected Engineering Work</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`bg-white border-x border-b border-stone-200 border-t-4 ${project.accentBorder} rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-stone-300 transition-all duration-300 flex flex-col`}
                        >
                            <div className="px-6 pt-5 pb-3 flex justify-between items-center">
                                <span className="font-mono text-sm font-bold text-stone-400">
                                    {project.id}
                                </span>
                                <div className="flex items-center gap-2">
                                    {project.codeLink && (
                                        <a
                                            href={project.codeLink}
                                            className="inline-flex items-center gap-1.5 text-stone-500 hover:text-stone-900 transition-colors p-1"
                                            aria-label="View Source Code"
                                        >
                                            <FiGithub className="text-lg" />
                                        </a>
                                    )}
                                    {project.demoLink && (
                                        <a
                                            href={project.demoLink}
                                            className="inline-flex items-center gap-1.5 text-stone-500 hover:text-stone-900 transition-colors p-1"
                                            aria-label="View Live Demo"
                                        >
                                            <FiExternalLink className="text-lg" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Card Body Content Area */}
                            <div className="px-6 pb-6 flex flex-col justify-between flex-1 space-y-6">
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold tracking-tight text-stone-900">
                                        {project.title}
                                    </h3>
                                    <p className="text-stone-600 text-sm leading-relaxed font-normal">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Bottom Tag Matrix with matching clean color theme */}
                                <div className="flex flex-wrap gap-1.5 pt-2">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className={`text-[11px] font-semibold px-2.5 py-1 rounded border ${project.tagTheme}`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}