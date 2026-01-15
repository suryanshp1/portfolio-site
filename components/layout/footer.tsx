import { RESUME_DATA } from "@/data/resume";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-12 w-full border-t-2 border-[var(--color-border-light)] dark:border-[var(--color-border-dark)] bg-white dark:bg-[var(--color-dark-bg)] py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="font-comic text-lg text-[var(--color-text-heading-light)] dark:text-[var(--color-text-heading-dark)]">
          © {new Date().getFullYear()} {RESUME_DATA.name}
        </p>

        <div className="flex gap-4">
          {RESUME_DATA.contact.social.map((social) => {
            const Icon =
              social.icon === "Github"
                ? Github
                : social.icon === "Linkedin"
                  ? Linkedin
                  : Twitter;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-heading-light)] dark:text-[var(--color-text-heading-dark)] hover:bg-hero-blue rounded-full border-2 border-[var(--color-border-light)] dark:border-[var(--color-border-dark)] p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)] transition-all hover:-translate-y-1 hover:text-white"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
