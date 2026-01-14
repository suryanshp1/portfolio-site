"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { RESUME_DATA } from "@/data/resume";
import { motion } from "framer-motion";

export function Header() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="dark:bg-dark-bg/80 sticky top-0 z-50 w-full border-b-2 border-black bg-white/80 backdrop-blur-sm dark:border-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="font-comic hover:text-hero-blue text-2xl font-bold tracking-wider transition-colors"
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
                  : "text-text-primary dark:text-white"
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
        </nav>
      </div>
    </header>
  );
}
