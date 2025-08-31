"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Github, Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { href: "/docs", label: "Docs" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "px-3 fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="p-2 rounded-lg bg-gradient-primary"
          >
            <Zap className="h-5 w-5 text-white" />
          </motion.div>
          <span className="font-bold text-xl gradient-text">FancyUI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden  md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative px-3 py-2 text-sm font-medium transition-colors duration-300",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
              {pathname === item.href && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-primary rounded-full"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-3">
          <ThemeToggle />

          <Button variant="ghost" size="sm" asChild className="hidden md:flex">
            <a
              href="https://github.com/YogeshSinghChilwal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden h-10 w-10 p-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-b border-border/50"
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "block px-3 py-2 text-sm font-medium transition-colors duration-300",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="w-full justify-start"
          >
            <a
              href="https://github.com/YogeshSinghChilwal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </Button>
        </div>
      </motion.div>
    </motion.header>
  );
}
