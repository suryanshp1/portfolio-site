import { RESUME_DATA } from "@/data/resume";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="dark:bg-dark-bg mt-12 w-full border-t-2 border-black bg-white py-8 dark:border-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="font-comic text-lg">
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
                className="hover:bg-hero-blue rounded-full border-2 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 hover:text-white dark:border-white dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
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
