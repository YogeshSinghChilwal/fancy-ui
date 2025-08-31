"use client";

import Link from "next/link";
import { Github, Zap } from "lucide-react";
import { motion } from "motion/react";
import { JSX } from "react";

export function Footer(): JSX.Element {
  return (
    <footer className="bg-gradient-surface border-t border-border/50">
      {/* Gradient divider */}
      <div className="h-px bg-gradient-primary w-full" />

      <div className="container py-12 max-w-8xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="p-2 rounded-lg bg-gradient-primary"
              >
                <Zap className="h-5 w-5 text-white" />
              </motion.div>
              <span className="font-bold text-xl gradient-text">FancyUI</span>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Beautiful, animated, copy-paste friendly components for React,
              Next.js, and TypeScript projects. Built with modern technologies
              and best practices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/components"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Components
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/YogeshSinghChilwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center space-x-2"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  License
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Changelog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
          

          <p className="text-muted-foreground text-sm">
            © 2025 FancyUI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
