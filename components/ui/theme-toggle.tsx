"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { ComicButton } from "@/components/ui/comic-button";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <ComicButton variant="outline" className="px-3" disabled>
                <Sun className="h-5 w-5 opacity-0" />
            </ComicButton>
        )
    }

    return (
        <ComicButton
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-3"
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === "dark" ? 180 : 0,
                    scale: theme === "dark" ? 1 : 1,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
                {theme === "dark" ? (
                    <Moon className="h-5 w-5 text-purple-500" />
                ) : (
                    <Sun className="h-5 w-5 text-orange-500" />
                )}
            </motion.div>
        </ComicButton>
    );
}
