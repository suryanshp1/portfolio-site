"use client";

import { ComicButton } from "@/components/ui/comic-button";
import { RESUME_DATA } from "@/data/resume";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#4B68F7_2px,transparent_2px)] [background-size:24px_24px] opacity-10" />

      <div className="z-10 max-w-4xl space-y-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-golden font-comic mb-4 inline-block rotate-[-2deg] border-2 border-black px-4 py-2 text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Hello World!
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-comic text-text-primary mb-6 text-6xl drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] md:text-8xl lg:text-9xl dark:text-white dark:drop-shadow-[4px_4px_0px_rgba(255,255,255,0.5)]"
        >
          I'M{" "}
          <span className="text-hero-blue">
            {RESUME_DATA.name.split(" ")[0].toUpperCase()}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-text-secondary mx-auto max-w-2xl text-xl leading-relaxed md:text-2xl dark:text-gray-300"
        >
          {RESUME_DATA.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <ComicButton onClick={() => (window.location.href = "#projects")}>
            View My Work
          </ComicButton>
          <ComicButton
            variant="outline"
            onClick={() =>
              (window.location.href = "mailto:" + RESUME_DATA.contact.email)
            }
          >
            <Mail className="mr-2 inline-block h-5 w-5" />
            Contact Me
          </ComicButton>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8"
      >
        <ArrowDown className="text-hero-blue h-8 w-8" />
      </motion.div>
    </section>
  );
}
