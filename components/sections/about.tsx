"use client";

import { ComicCard } from "@/components/ui/comic-card";
import { RESUME_DATA } from "@/data/resume";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-comic decoration-punch-red mb-12 text-center text-5xl underline decoration-wavy underline-offset-8">
          About Me
        </h2>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <ComicCard className="bg-sky-blue/10 rotate-2">
            <p className="text-lg leading-loose font-medium">
              {RESUME_DATA.about}
            </p>
          </ComicCard>

          <div className="space-y-6">
            <ComicCard className="bg-golden -rotate-1">
              <h3 className="font-comic mb-2 text-2xl">My Mission</h3>
              <p>
                Building resilient, scalable systems that power the future of AI
                and Security.
              </p>
            </ComicCard>
            <ComicCard className="bg-punch-red/20 rotate-1">
              <h3 className="font-comic mb-2 text-2xl">Current Status</h3>
              <p>
                Open for new opportunities in Agentic AI and Backend Systems.
              </p>
            </ComicCard>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
