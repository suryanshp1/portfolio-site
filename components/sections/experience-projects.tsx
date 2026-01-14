"use client";

import { ComicCard } from "@/components/ui/comic-card";
import { ComicButton } from "@/components/ui/comic-button";
import { RESUME_DATA } from "@/data/resume";
import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-20">
      <h2 className="font-comic mb-16 text-center text-5xl">
        Featured Missions
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {RESUME_DATA.projects.map((project, index) => (
          <ComicCard
            key={project.title}
            hoverEffect
            className="flex h-full flex-col"
          >
            <h3 className="font-comic bg-sky-blue mb-4 inline-block w-fit border-2 border-black px-2 text-3xl text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {project.title}
            </h3>
            <p className="mb-6 flex-grow text-lg">{project.description}</p>
            <div className="mb-6 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-black bg-gray-200 px-2 py-1 text-sm font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.link?.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ComicButton variant="primary" className="px-4 py-2 text-sm">
                  <Github className="mr-2 inline h-4 w-4" /> Code
                </ComicButton>
              </a>
            </div>
          </ComicCard>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="container mx-auto max-w-4xl px-4 py-20">
      <h2 className="font-comic mb-16 text-center text-5xl">Origin Story</h2>

      <div className="space-y-12">
        {RESUME_DATA.work.map((role, index) => (
          <motion.div
            key={`${role.company}-${role.start}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-0"
          >
            <div className="absolute top-0 bottom-0 left-[50%] hidden w-1 -translate-x-1/2 bg-black md:block" />

            <div
              className={`items-center justify-between gap-8 md:flex ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="mb-4 md:mb-0 md:w-1/2" />

              <div className="bg-punch-red absolute left-[-9px] h-6 w-6 rounded-full border-4 border-black md:left-[50%] md:-translate-x-1/2" />

              <div className="md:w-1/2">
                <ComicCard
                  className={`${index % 2 === 0 ? "md:-rotate-2" : "md:rotate-2"} transition-transform hover:rotate-0`}
                >
                  <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-comic text-xl font-bold">
                      {role.company}
                    </h3>
                    <span className="bg-golden border border-black px-2 text-sm font-bold">
                      {role.start} - {role.end}
                    </span>
                  </div>
                  <h4 className="text-hero-blue mb-4 font-bold">
                    {role.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {role.description}
                  </p>
                </ComicCard>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
