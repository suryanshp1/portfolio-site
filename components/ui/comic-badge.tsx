import * as React from "react";
import { cn } from "@/lib/utils";

interface ComicBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: "blue" | "red" | "yellow" | "gray";
}

export const ComicBadge = React.forwardRef<HTMLSpanElement, ComicBadgeProps>(
  ({ className, color = "gray", ...props }, ref) => {
    const colors = {
      blue: "bg-sky-blue text-white",
      red: "bg-punch-red text-white",
      yellow: "bg-golden text-black",
      gray: "bg-gray-200 text-black dark:bg-gray-700 dark:text-white",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full border-2 border-black px-3 py-1 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
          colors[color],
          className
        )}
        {...props}
      />
    );
  }
);
ComicBadge.displayName = "ComicBadge";
