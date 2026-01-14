import * as React from "react";
import { cn } from "@/lib/utils";

interface ComicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  variant?: "primary" | "secondary" | "accent" | "neutral";
}

export const ComicCard = React.forwardRef<HTMLDivElement, ComicCardProps>(
  ({ className, hoverEffect = false, variant = "neutral", ...props }, ref) => {
    const variants = {
      primary: "bg-[var(--color-card-primary-light)] dark:bg-[var(--color-card-primary-dark)]",
      secondary: "bg-[var(--color-card-secondary-light)] dark:bg-[var(--color-card-secondary-dark)]",
      accent: "bg-[var(--color-card-accent-light)] dark:bg-[var(--color-card-accent-dark)]",
      neutral: "bg-[var(--color-card-neutral-light)] dark:bg-[var(--color-card-neutral-dark)]",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border-2 border-[var(--color-border-light)] p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:border-[var(--color-border-dark)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]",
          variants[variant],
          hoverEffect &&
          "transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.4)]",
          className
        )}
        {...props}
      />
    );
  }
);
ComicCard.displayName = "ComicCard";
