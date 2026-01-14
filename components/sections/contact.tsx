"use client";

import { ComicButton } from "@/components/ui/comic-button";
import { RESUME_DATA } from "@/data/resume";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-sky-blue/10 border-t-2 border-black py-20"
    >
      <div className="container mx-auto max-w-2xl px-4 text-center">
        <h2 className="font-comic mb-8 text-5xl">Ready to Team Up?</h2>
        <p className="mb-8 text-xl">
          Whether you need a backend architect, an AI specialist, or a security
          expert, I'm ready for the next mission.
        </p>
        <a href={`mailto:${RESUME_DATA.contact.email}`}>
          <ComicButton className="bg-punch-red hover:bg-punch-red/90 border-white px-8 py-4 text-xl text-white">
            <Mail className="mr-2 inline h-6 w-6" />
            Send Signal
          </ComicButton>
        </a>
      </div>
    </section>
  );
}
