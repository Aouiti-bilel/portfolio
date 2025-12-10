"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const skills = [
  "Node.js",
  "Express.js",
  "GraphQL",
  "Socket.IO",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Remix.js",
  "React-native",
  "TailwindCSS",
  "Bootstrap",
  "MySQL",
  "PostgreSQL",
];

export default function Hero() {
  const [skillIndex, setSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSkillIndex((i) => (i + 1) % skills.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-6 mt-14 md:mt-24 grid md:grid-cols-2 gap-12 items-center relative">

      {/* LEFT */}
      <div>
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
          Hi, I’m <span className="text-blue-600 dark:text-blue-400">Bilel</span>
          <br />
          I Build Modern Web Experiences
        </h1>

        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-lg">
          Passionate Full-Stack JavaScript developer focused on building
          scalable products, clean UI systems, and fast user experiences.
        </p>

        {/* Animated text */}
        <div className="mt-6 inline-flex items-center px-4 py-2 rounded-full
          bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10
          text-sm font-medium backdrop-blur">
          🚀 {skills[skillIndex]}
        </div>

        {/* CTA */}
        <div className="mt-8 flex gap-4">
          <a
            href="projects"
            className="px-6 py-3 rounded-full font-medium bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition"
          >
            View Projects
          </a>

          <a
            href="contact"
            className="px-6 py-3 rounded-full font-medium border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative flex flex-col items-center">

        {/* Glow */}
        <div className="absolute -z-10 w-72 h-72 bg-blue-500/20 dark:bg-blue-400/20 blur-3xl rounded-full" />

        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur z-10">
          <Image src="/me.png" alt="Profile" width={350} height={350} className="object-cover" />
        </div>

        {/* BADGE CLOUD */}
        <div className="mt-6 flex flex-wrap justify-center gap-3 max-w-sm">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="
                px-3 py-1 text-xs rounded-full 
                bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10
                backdrop-blur 
                animate-softfloat
                shadow-sm hover:scale-110 transition-transform
              "
              style={{
                animationDelay: `${i * 150}ms`,
              }}
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
