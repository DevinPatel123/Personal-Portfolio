import { Moon, Sun } from "lucide-react"
import {useEffect, useState} from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    // Force dark mode as default if no theme is set
    if (!storedTheme) {
        document.documentElement.classList.add("dark");
        document.documentElement.style.setProperty('--linkedin-fill-color', 'white');
        localStorage.setItem("theme", "dark");
        setIsDarkMode(true);
        return;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = storedTheme === "dark" || (!storedTheme && prefersDark);
    setIsDarkMode(isDark);
    if (isDark) {
        document.documentElement.classList.add("dark");
        document.documentElement.style.setProperty('--linkedin-fill-color', 'white');
    } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.style.setProperty('--linkedin-fill-color', 'black');
    }
}, []);

    const toggleTheme = () => {
        if (isDarkMode){
            document.documentElement.classList.remove("dark");
            document.documentElement.style.setProperty('--linkedin-fill-color', 'black');
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else{
            document.documentElement.classList.add("dark");
            document.documentElement.style.setProperty('--linkedin-fill-color', 'white');
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }

    return(
    <button onClick={toggleTheme} 
    className={cn("max-sm:hidden p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
    )}> 
        {isDarkMode ? (
            <Sun className="h-6 w-6 text-yellow-300"/> 
        ) : (
            <Moon className="h-6 w-6 text-blue-900"/>
        )} 
    </button>
    );
}