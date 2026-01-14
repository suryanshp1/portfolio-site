import * as React from "react";
import { cn } from "@/lib/utils";

interface ComicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export const ComicCard = React.forwardRef<HTMLDivElement, ComicCardProps>(
  ({ className, hoverEffect = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border-2 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-slate-800 dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]",
          hoverEffect &&
            "transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
          className
        )}
        {...props}
      />
    );
  }
);
ComicCard.displayName = "ComicCard";
