import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Journey", href: "#journey" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() =>
    document.documentElement.classList.contains('dark') || window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  // Listen for theme changes
  useEffect(() => {
    const updateTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark') || window.matchMedia('(prefers-color-scheme: dark)').matches);
    };
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', updateTheme);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
  className={cn(
    "fixed w-full z-40 transition-all duration-300 transition-colors border-b border-border backdrop-blur-md",
    isScrolled
      ? "py-3 bg-background/90"
      : "py-5 bg-transparent"
  )}
>

        <div className="container flex items-center justify-between">
         
          <a className="text-xl font-bold text-foreground transition-colors duration-300 flex items-center pl-6" href="#hero">
  <span className="relative z-10">Devin's Portfolio</span>
</a>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8 mr-16">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                style={{ color: isDarkMode ? 'white' : '#374151' }}
                className="transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-white z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed top-0 left-0 w-full h-screen bg-black z-50 flex flex-col items-center justify-center md:hidden",
          "transition-all duration-300",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 p-2 text-white"
          aria-label="Close Menu"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col space-y-8 text-xl">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              style={{ color: isDarkMode ? 'white' : '#374151' }}
              className="transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
