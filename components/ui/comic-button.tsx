"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ComicButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "icon";
}

export const ComicButton = React.forwardRef<HTMLButtonElement, ComicButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    const variants = {
      primary: "bg-hero-blue text-white",
      secondary: "bg-golden text-black",
      outline: "bg-white text-black",
    };

    const sizes = {
      default: "px-6 py-3",
      icon: "h-10 w-10 p-2",
    };

    return (
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)" }}
        whileTap={{ scale: 0.95, boxShadow: "2px 2px 0px 0px rgba(0,0,0,1)" }}
        className={cn(
          "font-comic inline-flex items-center justify-center gap-2 rounded-lg border-2 border-black text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
ComicButton.displayName = "ComicButton";
