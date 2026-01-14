"use client";

import { ComicBadge } from "@/components/ui/comic-badge";
import { RESUME_DATA } from "@/data/resume";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <section className="bg-light-bg dark:bg-dark-bg border-y-2 border-black py-20 dark:border-white">
      <div className="container mx-auto px-4">
        <h2 className="font-comic mb-12 text-center text-5xl">
          <span className="bg-golden border-2 border-black px-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Power Ups
          </span>
        </h2>

        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4">
          {RESUME_DATA.skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <ComicBadge
                color={
                  index % 3 === 0 ? "blue" : index % 3 === 1 ? "red" : "yellow"
                }
                className="px-4 py-2 text-lg"
              >
                {skill}
              </ComicBadge>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
