"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RESUME_DATA } from "@/data/resume";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[var(--color-border-light)] dark:border-[var(--color-border-dark)] bg-white/80 dark:bg-[var(--color-dark-bg)]/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="font-comic hover:text-hero-blue text-2xl font-bold tracking-wider transition-colors text-[var(--color-text-heading-light)] dark:text-[var(--color-text-heading-dark)]"
        >
          {RESUME_DATA.name.toUpperCase()}
        </Link>

        <nav className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-comic hover:text-hero-blue relative text-xl tracking-wide uppercase transition-colors",
                pathname === link.href
                  ? "text-hero-blue"
                  : "text-[var(--color-text-heading-light)] dark:text-[var(--color-text-heading-dark)]"
              )}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  layoutId="underline"
                  className="bg-hero-blue absolute top-full left-0 block h-[2px] w-full"
                />
              )}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
