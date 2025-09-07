import { motion } from "motion/react";

export const categories = [
  { id: "all", name: "All", count: 43 },
  { id: "cards", name: "Cards", count: 4 },
  { id: "typography", name: "Typography", count: 5 },
  { id: "backgrounds", name: "Backgrounds", count: 3 },
  { id: "buttons", name: "Buttons", count: 5 },
  { id: "inputs", name: "Inputs", count: 4 },
  { id: "navigation", name: "Navigation", count: 3 },
  { id: "loading", name: "Loading", count: 3 },
  { id: "modals", name: "Modals", count: 3 },
  { id: "data-display", name: "Data Display", count: 3 },
  { id: "feedback", name: "Feedback", count: 3 },
  { id: "layout", name: "Layout", count: 3 },
  { id: "interactive", name: "Interactive", count: 4 },
];

export const components = [
  {
    id: "card-hover",
    title: "Card Hover Animation",
    category: "cards",
    description: "A card with smooth hover animations and scale effects",
    tags: ["hover", "card", "animation"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <motion.div
          className="group cursor-pointer"
          whileHover={{ y: -8, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <div className="relative overflow-hidden bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <motion.div
              className="absolute inset-0 bg-gradient-primary"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-6">
              <motion.div
                className="w-12 h-12 bg-gradient-primary rounded-xl mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <h3 className="font-bold text-lg text-card-foreground mb-2">
                Animated Card
              </h3>
              <p className="text-muted-foreground">
                Hover to see the magic happen with smooth animations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    ),
    code: `import { motion } from 'motion/react';

export default function AnimatedCard() {
  return (
    <motion.div
      className="group cursor-pointer"
      whileHover={{ y: -8, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div className="relative overflow-hidden bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
        <motion.div 
          className="absolute inset-0 bg-gradient-primary"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="p-6">
          <motion.div 
            className="w-12 h-12 bg-gradient-primary rounded-xl mb-4"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <h3 className="font-bold text-lg text-card-foreground mb-2">Animated Card</h3>
          <p className="text-muted-foreground">Hover to see the magic happen with smooth animations.</p>
        </div>
      </div>
    </motion.div>
  );
}`,
  },
  {
    id: "colorful-text",
    title: "Colorful Text Animation",
    category: "typography",
    description:
      "Text with character-by-character animation and gradient colors",
    tags: ["text", "animation", "gradient"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <div className="text-4xl font-bold">
          {["A", "n", "i", "m", "a", "t", "e", "d"].map((char, i) => (
            <motion.span
              key={i}
              className="inline-block bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              {char}
            </motion.span>
          ))}
          <span className="ml-2 text-foreground">Text</span>
        </div>
      </div>
    ),
    code: `import { motion } from 'motion/react';

export default function ColorfulText({ text = "Animated" }) {
  return (
    <div className="text-4xl font-bold">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          className="inline-block bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: i * 0.1,
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 2
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}`,
  },
  {
    id: "gradient-bg",
    title: "Animated Gradient Background",
    category: "backgrounds",
    description: "Smooth animated gradient background with customizable colors",
    tags: ["background", "gradient", "animation"],
    dependencies: [],
    preview: (
      <div className="w-full h-48 rounded-xl overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 animate-gradient-shift bg-[length:200%_200%]">
          <div className="flex items-center justify-center h-full">
            <span className="text-white font-bold text-xl">
              Gradient Background
            </span>
          </div>
        </div>
      </div>
    ),
    code: `export default function GradientBackground({ children, className = "" }) {
  return (
    <div className={\`relative overflow-hidden \${className}\`}>
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 animate-gradient-shift bg-[length:200%_200%]" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// This uses the built-in animate-gradient-shift class from our design system`,
  },
  {
    id: "floating-card",
    title: "Floating Card",
    category: "cards",
    description: "Card that gently floats with continuous animation",
    tags: ["float", "card", "animation"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <motion.div
          className="bg-card rounded-2xl p-6 shadow-lg"
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-8 h-8 bg-gradient-primary rounded-full mb-4" />
          <h3 className="font-bold text-card-foreground mb-2">Floating Card</h3>
          <p className="text-muted-foreground text-sm">
            This card floats with a gentle animation.
          </p>
        </motion.div>
      </div>
    ),
    code: `import { motion } from 'motion/react';

export default function FloatingCard({ children, className = "" }) {
  return (
    <motion.div
      className={\`bg-card rounded-2xl p-6 shadow-lg \${className}\`}
      animate={{ y: [-10, 10, -10] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.div>
  );
}`,
  },
  {
    id: "pulse-button",
    title: "Pulse Button",
    category: "buttons",
    description: "Button with pulsing animation effect",
    tags: ["button", "pulse", "animation"],
    dependencies: [],
    preview: (
      <div className="flex items-center justify-center p-8">
        <button className="relative px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors">
          <span className="relative z-10">Click Me</span>
          <div className="absolute inset-0 bg-primary rounded-xl animate-ping opacity-25" />
        </button>
      </div>
    ),
    code: `export default function PulseButton({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={\`relative px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors \${className}\`}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-primary rounded-xl animate-ping opacity-25" />
    </button>
  );
}`,
  },
  {
    id: "glow-button",
    title: "Glow Button",
    category: "buttons",
    description: "Button with animated glow effect on hover",
    tags: ["button", "glow", "hover"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <motion.button
          className="px-8 py-3 bg-gradient-primary text-white rounded-xl font-semibold relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
          <span className="relative z-10">Hover Me</span>
        </motion.button>
      </div>
    ),
    code: `import { motion } from 'motion/react';

export default function GlowButton({ children, onClick, className = "" }) {
  return (
    <motion.button
      onClick={onClick}
      className={\`px-8 py-3 bg-gradient-primary text-white rounded-xl font-semibold relative overflow-hidden \${className}\`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}`,
  },
  {
    id: "typewriter-text",
    title: "Typewriter Text",
    category: "typography",
    description: "Text that types itself out with cursor effect",
    tags: ["typewriter", "text", "animation"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <motion.div
          className="text-2xl font-mono text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              display: "inline-block",
            }}
          >
            Hello, World!
          </motion.span>
          <motion.span
            className="inline-block w-0.5 h-6 bg-primary ml-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.div>
      </div>
    ),
    code: `import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function TypewriterText({ text = "Hello, World!", speed = 100 }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <div className="text-2xl font-mono">
      <span>{displayText}</span>
      <motion.span
        className="inline-block w-0.5 h-6 bg-primary ml-1"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </div>
  );
}`,
  },
  {
    id: "glitch-text",
    title: "Glitch Text Effect",
    category: "typography",
    description: "Text with digital glitch animation effect",
    tags: ["glitch", "text", "digital"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <motion.div
          className="text-3xl font-bold text-foreground relative"
          animate={{
            textShadow: [
              "0 0 0 transparent",
              "2px 0 0 hsl(var(--destructive)), -2px 0 0 hsl(var(--primary))",
              "0 0 0 transparent",
            ],
          }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        >
          GLITCH
        </motion.div>
      </div>
    ),
    code: `import { motion } from 'motion/react';

export default function GlitchText({ text = "GLITCH", className = "" }) {
  return (
    <motion.div
      className={\`text-3xl font-bold relative \${className}\`}
      animate={{
        textShadow: [
          "0 0 0 transparent",
          "2px 0 0 #ef4444, -2px 0 0 #3b82f6",
          "0 0 0 transparent"
        ],
        x: [0, -2, 2, 0],
      }}
      transition={{ 
        duration: 0.3, 
        repeat: Infinity, 
        repeatDelay: 3,
        ease: "easeInOut" 
      }}
    >
      {text}
    </motion.div>
  );
}`,
  },
  {
    id: "particle-bg",
    title: "Particle Background",
    category: "backgrounds",
    description: "Animated floating particles background effect",
    tags: ["particles", "background", "floating"],
    dependencies: ["motion"],
    preview: (
      <div className="w-full h-48 rounded-xl overflow-hidden relative bg-gradient-to-br from-slate-900 to-slate-800">
        {Array.from({ length: 30 }).map((_, i) => {
          const startX = Math.random() * 1200;
          const startY = Math.random() * 200;
          const endX = startX + (Math.random() * 100 - 50); // small drift
          const endY = startY + (Math.random() * 100 - 50);

          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full"
              initial={{ x: startX, y: startY, opacity: 0.6 }}
              animate={{ x: endX, y: endY, opacity: [0.6, 1, 0.6] }}
              transition={{
                duration: Math.random() * 6 + 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          );
        })}
        <div className="flex items-center justify-center h-full relative z-10">
          <span className="text-white font-bold text-xl">Particle Effect</span>
        </div>
      </div>
    ),
    code: `import { motion } from 'motion/react';

export default function ParticleBackground({ children, particleCount = 50, className = "" }) {
  return (
    <div className={\`relative overflow-hidden \${className}\`}>
      {Array.from({ length: particleCount }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}`,
  },
  {
    id: "magnetic-button",
    title: "Magnetic Button",
    category: "buttons",
    description: "Button that follows mouse movement with magnetic effect",
    tags: ["magnetic", "button", "interactive"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <motion.button
          className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            e.currentTarget.style.transform = `translate(${x * 0.1}px, ${
              y * 0.1
            }px) scale(1.1)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translate(0px, 0px) scale(1)";
          }}
        >
          Magnetic Button
        </motion.button>
      </div>
    ),
    code: `import { motion } from 'motion/react';

export default function MagneticButton({ children, onClick, className = "" }) {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    e.currentTarget.style.transform = \`translate(\${x * 0.1}px, \${y * 0.1}px) scale(1.1)\`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translate(0px, 0px) scale(1)';
  };

  return (
    <motion.button
      onClick={onClick}
      className={\`px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold transition-transform duration-200 \${className}\`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}`,
  },

  {
    id: "animated-input",
    title: "Animated Input Field",
    category: "inputs",
    description: "Input field with floating label animation",
    tags: ["input", "floating", "label"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <div className="relative w-64">
          <motion.input
            className="w-full px-4 py-3 border-2 border-border rounded-xl bg-background text-foreground focus:border-primary focus:outline-none transition-colors"
            placeholder=" "
            whileFocus={{ scale: 1.02 }}
          />
          <motion.label
            className="absolute left-4 top-3 text-muted-foreground pointer-events-none transition-all duration-300"
            initial={{ y: 0, scale: 1 }}
            whileFocus={{ y: -32, scale: 0.8, color: "hsl(var(--primary))" }}
          >
            Enter your email
          </motion.label>
        </div>
      </div>
    ),
    code: `import { motion } from 'motion/react';
import { useState } from 'react';

export default function AnimatedInput({ label, type = "text", ...props }) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative">
      <motion.input
        {...props}
        type={type}
        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl bg-white focus:border-blue-500 focus:outline-none transition-colors"
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value.length > 0);
        }}
        whileFocus={{ scale: 1.02 }}
        placeholder=" "
      />
      <motion.label
        className="absolute left-4 top-3 text-gray-500 pointer-events-none"
        animate={{
          y: isFocused || hasValue ? -32 : 0,
          scale: isFocused || hasValue ? 0.8 : 1,
          color: isFocused ? "#3b82f6" : "#6b7280",
        }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.label>
    </div>
  );
}`,
  },
  {
    id: "search-input",
    title: "Search Input with Icon",
    category: "inputs",
    description: "Search input with animated search icon and focus effects",
    tags: ["search", "input", "icon"],
    dependencies: ["lucide-react"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <div className="relative w-64">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            className="w-full pl-10 pr-4 py-3 border border-border rounded-xl bg-background text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="Search..."
          />
        </div>
      </div>
    ),
    code: `import { Search } from 'lucide/react-react';

export default function SearchInput({ placeholder = "Search...", onChange, className = "" }) {
  return (
    <div className={\`relative \${className}\`}>
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <Search className="w-5 h-5" />
      </div>
      <input
        type="text"
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}`,
  },
  {
    id: "animated-tabs",
    title: "Animated Tab Navigation",
    category: "navigation",
    description: "Tab navigation with smooth sliding indicator",
    tags: ["tabs", "navigation", "indicator"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <div className="relative bg-muted rounded-xl p-1">
          <div className="flex space-x-1">
            {["Tab 1", "Tab 2", "Tab 3"].map((tab, i) => (
              <button
                key={tab}
                className={`relative px-6 py-2 text-sm font-medium rounded-lg transition-colors z-10 ${
                  i === 0
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
                {i === 0 && (
                  <motion.div
                    className="absolute inset-0 bg-primary rounded-lg"
                    layoutId="activeTab"
                    style={{ zIndex: -1 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    ),
    code: `import { motion } from 'motion/react';
import { useState } from 'react';

export default function AnimatedTabs({ tabs, defaultActive = 0 }) {
  const [activeTab, setActiveTab] = useState(defaultActive);

  return (
    <div className="relative bg-gray-100 rounded-xl p-1">
      <div className="flex space-x-1">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(index)}
            className={\`relative px-6 py-2 text-sm font-medium rounded-lg transition-colors z-10 \${
              activeTab === index
                ? 'text-white'
                : 'text-gray-600 hover:text-gray-900'
            }\`}
          >
            {tab.label}
            {activeTab === index && (
              <motion.div
                className="absolute inset-0 bg-blue-500 rounded-lg"
                layoutId="activeTab"
                style={{ zIndex: -1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}`,
  },
  {
    id: "breadcrumb-nav",
    title: "Animated Breadcrumb",
    category: "navigation",
    description: "Breadcrumb navigation with hover animations",
    tags: ["breadcrumb", "navigation", "hover"],
    dependencies: ["motion", "lucide-react"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <nav className="flex items-center space-x-2 text-sm">
          <motion.a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Home
          </motion.a>
          <span className="text-muted-foreground">/</span>
          <motion.a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Components
          </motion.a>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">Navigation</span>
        </nav>
      </div>
    ),
    code: `import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function AnimatedBreadcrumb({ items }) {
  return (
    <nav className="flex items-center space-x-2 text-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          {index > 0 && (
            <ChevronRight className="w-4 h-4 text-gray-400" />
          )}
          {item.href ? (
            <motion.a
              href={item.href}
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.a>
          ) : (
            <span className="text-gray-900 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}`,
  },
  {
    id: "3d-card",
    title: "3D Tilt Card",
    category: "cards",
    description: "Card with 3D tilt effect following mouse movement",
    tags: ["3d", "tilt", "mouse", "card"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <motion.div
          className="w-64 h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 cursor-pointer"
          style={{ transformStyle: "preserve-3d" }}
          whileHover={{
            rotateY: 15,
            rotateX: 15,
            scale: 1.05,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="text-white">
            <h3 className="font-bold text-lg mb-2">3D Card</h3>
            <p className="text-sm opacity-90">Hover for 3D effect</p>
          </div>
        </motion.div>
      </div>
    ),
    code: `import { motion } from 'motion/react';

export default function TiltCard({ children, className = "" }) {
  return (
    <motion.div
      className={\`rounded-xl cursor-pointer \${className}\`}
      style={{ transformStyle: "preserve-3d" }}
      whileHover={{
        rotateY: 15,
        rotateX: 15,
        scale: 1.05
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
}`,
  },
  {
    id: "morphing-button",
    title: "Morphing Button",
    category: "buttons",
    description: "Button that morphs shape and content on interaction",
    tags: ["morph", "button", "shape", "transform"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <motion.button
          className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold"
          whileHover={{
            borderRadius: "8px",
            scaleX: 1.2,
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          Morph Me
        </motion.button>
      </div>
    ),
    code: `import { motion } from 'motion/react';

export default function MorphingButton({ children, onClick, className = "" }) {
  return (
    <motion.button
      onClick={onClick}
      className={\`bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold \${className}\`}
      whileHover={{
        borderRadius: "8px",
        scaleX: 1.2
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {children}
    </motion.button>
  );
}`,
  },
  {
    id: "wave-text",
    title: "Wave Text Animation",
    category: "typography",
    description: "Text with wave motion effect character by character",
    tags: ["wave", "text", "motion", "characters"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <div className="text-3xl font-bold text-foreground">
          {"WAVE TEXT".split("").map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>
      </div>
    ),
    code: `import { motion } from 'motion/react';

export default function WaveText({ text = "WAVE TEXT", className = "" }) {
  return (
    <div className={\`text-3xl font-bold \${className}\`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
}`,
  },
  {
    id: "liquid-button",
    title: "Liquid Fill Button",
    category: "buttons",
    description: "Button with liquid fill animation on hover",
    tags: ["liquid", "fill", "button", "hover"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <motion.button
          className="relative px-8 py-3 border-2 border-primary text-primary rounded-xl font-semibold overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-primary origin-bottom"
            initial={{ scaleY: 0 }}
            whileHover={{ scaleY: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <span className="relative z-10 group-hover:text-primary-foreground transition-colors">
            Liquid Fill
          </span>
        </motion.button>
      </div>
    ),
    code: `import { motion } from 'motion/react';

export default function LiquidButton({ children, onClick, className = "" }) {
  return (
    <motion.button
      onClick={onClick}
      className={\`relative px-8 py-3 border-2 border-primary text-primary rounded-xl font-semibold overflow-hidden group \${className}\`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-primary origin-bottom"
        initial={{ scaleY: 0 }}
        whileHover={{ scaleY: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <span className="relative z-10 group-hover:text-primary-foreground transition-colors">
        {children}
      </span>
    </motion.button>
  );
}`,
  },
  {
    id: "neon-bg",
    title: "Neon Glow Background",
    category: "backgrounds",
    description: "Background with animated neon glow effects",
    tags: ["neon", "glow", "background", "dark"],
    dependencies: ["motion"],
    preview: (
      <div className="w-full h-48 rounded-xl overflow-hidden bg-black relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-30 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <div className="flex items-center justify-center h-full relative z-10">
          <span className="text-white font-bold text-xl">Neon Glow</span>
        </div>
      </div>
    ),
    code: `import { motion } from 'motion/react';

export default function NeonBackground({ children, className = "" }) {
  return (
    <div className={\`relative bg-black rounded-xl overflow-hidden \${className}\`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-30 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}`,
  },
  {
    id: "glass-card",
    title: "Glassmorphism Card",
    category: "cards",
    description: "Card with modern glassmorphism effect",
    tags: ["glass", "blur", "card", "modern"],
    dependencies: [],
    preview: (
      <div className="flex items-center justify-center p-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl">
        <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-6 shadow-xl">
          <h3 className="font-bold text-white mb-2">Glass Card</h3>
          <p className="text-white/80 text-sm">
            Glassmorphism design with backdrop blur
          </p>
        </div>
      </div>
    ),
    code: `export default function GlassCard({ children, className = "" }) {
  return (
    <div className={\`bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-6 shadow-xl \${className}\`}>
      {children}
    </div>
  );
}`,
  },
  {
    id: "floating-input",
    title: "Floating Label Input",
    category: "inputs",
    description: "Input field with floating label animation",
    tags: ["input", "floating", "label", "form"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <div className="relative w-64">
          <input
            type="text"
            className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary peer"
            placeholder=" "
          />
          <motion.label
            className="absolute left-4 top-3 text-muted-foreground transition-all peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary peer-valid:top-1 peer-valid:text-xs"
            initial={false}
          >
            Email Address
          </motion.label>
        </div>
      </div>
    ),
    code: `import { motion } from 'motion/react';

export default function FloatingInput({ label, type = "text", className = "" }) {
  return (
    <div className={\`relative \${className}\`}>
      <input
        type={type}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
        placeholder=" "
      />
      <motion.label
        className="absolute left-4 top-3 text-gray-500 transition-all peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500 peer-valid:top-1 peer-valid:text-xs"
        initial={false}
      >
        {label}
      </motion.label>
    </div>
  );
}`,
  },
  {
    id: "sidebar-nav",
    title: "Animated Sidebar Nav",
    category: "navigation",
    description: "Collapsible sidebar with smooth animations",
    tags: ["sidebar", "navigation", "collapsible", "menu"],
    dependencies: ["motion", "lucide-react"],
    preview: (
      <div className="flex h-48 rounded-xl overflow-hidden border border-border">
        <motion.div
          className="bg-card border-r border-border p-4"
          initial={{ width: 200 }}
          whileHover={{ width: 240 }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-2">
            <div className="flex items-center space-x-3 p-2 hover:bg-accent rounded-lg transition-colors">
              <div className="w-4 h-4 bg-primary rounded" />
              <span className="text-sm">Dashboard</span>
            </div>
            <div className="flex items-center space-x-3 p-2 hover:bg-accent rounded-lg transition-colors">
              <div className="w-4 h-4 bg-primary rounded" />
              <span className="text-sm">Settings</span>
            </div>
          </div>
        </motion.div>
        <div className="flex-1 bg-background p-4">
          <span className="text-muted-foreground text-sm">Main Content</span>
        </div>
      </div>
    ),
    code: `import { motion } from 'motion/react';
import { useState } from 'react';

export default function AnimatedSidebar({ items, children }) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="flex h-screen">
      <motion.aside
        className="bg-white border-r border-gray-200 p-4"
        animate={{ width: isExpanded ? 240 : 80 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mb-4 p-2 hover:bg-gray-100 rounded-lg"
        >
          ☰
        </button>
        <nav className="space-y-2">
          {items.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              whileHover={{ x: 4 }}
            >
              <item.icon className="w-5 h-5" />
              <motion.span
                className="text-sm"
                animate={{ opacity: isExpanded ? 1 : 0 }}
              >
                {item.label}
              </motion.span>
            </motion.a>
          ))}
        </nav>
      </motion.aside>
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}`,
  },
  {
    id: "spinner-loader",
    title: "Animated Spinner",
    category: "loading",
    description: "Smooth spinning loader with custom styling",
    tags: ["spinner", "loading", "animation", "loader"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <motion.div
          className="w-8 h-8 border-4 border-muted border-t-primary rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    ),
    code: `import { motion } from 'motion/react';

export default function Spinner({ size = "w-8 h-8", className = "" }) {
  return (
    <motion.div
      className={\`border-4 border-gray-200 border-t-blue-500 rounded-full \${size} \${className}\`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  );
}`,
  },
  {
    id: "pulse-loader",
    title: "Pulse Dots Loader",
    category: "loading",
    description: "Three dots pulsing loader animation",
    tags: ["pulse", "dots", "loading", "animation"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-primary rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    ),
    code: `import { motion } from 'motion/react';

export default function PulseLoader({ className = "" }) {
  return (
    <div className={\`flex space-x-2 \${className}\`}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-3 h-3 bg-blue-500 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}`,
  },
  {
    id: "reveal-text",
    title: "Text Reveal Animation",
    category: "typography",
    description: "Text that reveals character by character with masking",
    tags: ["reveal", "text", "mask", "animation"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <motion.div
          className="text-2xl font-bold text-foreground overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: "auto" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            REVEALED TEXT
          </motion.span>
        </motion.div>
      </div>
    ),
    code: `import { motion } from 'motion/react';

export default function RevealText({ text = "REVEALED TEXT", className = "" }) {
  return (
    <motion.div
      className={\`text-2xl font-bold overflow-hidden \${className}\`}
      initial={{ width: 0 }}
      animate={{ width: "auto" }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
}`,
  },
  {
    id: "progress-bar",
    title: "Animated Progress Bar",
    category: "loading",
    description: "Progress bar with smooth fill animation",
    tags: ["progress", "loading", "bar", "animation"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <div className="w-64">
          <div className="bg-muted rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "75%" }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    ),
    code: `import { motion } from 'motion/react';

export default function ProgressBar({ progress = 0, className = "" }) {
  return (
    <div className={\`bg-gray-200 rounded-full h-2 overflow-hidden \${className}\`}>
      <motion.div
        className="h-full bg-blue-500 rounded-full"
        initial={{ width: "0%" }}
        animate={{ width: \`\${progress}%\` }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
}`,
  },
  {
    id: "modal-fade",
    title: "Fade Modal",
    category: "modals",
    description: "Modal with smooth fade in/out animations",
    tags: ["modal", "fade", "overlay", "dialog"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <motion.div
          className="bg-card rounded-xl p-6 shadow-xl border border-border max-w-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="font-bold text-card-foreground mb-2">Modal Title</h3>
          <p className="text-muted-foreground text-sm mb-4">
            This is a modal with fade animation.
          </p>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm">
            Close
          </button>
        </motion.div>
      </div>
    ),
    code: `import { motion, AnimatePresence } from 'motion/react';

export default function FadeModal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white rounded-xl p-6 shadow-xl max-w-md w-full mx-4">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}`,
  },
  {
    id: "slide-modal",
    title: "Slide Up Modal",
    category: "modals",
    description: "Modal that slides up from bottom with backdrop",
    tags: ["modal", "slide", "bottom", "mobile"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <motion.div
          className="bg-card rounded-t-xl p-6 shadow-xl border-t border-l border-r border-border w-64"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="w-12 h-1 bg-muted rounded-full mx-auto mb-4" />
          <h3 className="font-bold text-card-foreground mb-2">Slide Modal</h3>
          <p className="text-muted-foreground text-sm">Slides up from bottom</p>
        </motion.div>
      </div>
    ),
    code: `import { motion, AnimatePresence } from 'motion/react';

export default function SlideModal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-xl p-6 shadow-xl z-50"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4" />
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}`,
  },
  {
    id: "scale-modal",
    title: "Scale Modal",
    category: "modals",
    description: "Modal with scale animation from center",
    tags: ["modal", "scale", "zoom", "center"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <motion.div
          className="bg-card rounded-xl p-6 shadow-xl border border-border max-w-sm"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <h3 className="font-bold text-card-foreground mb-2">Scale Modal</h3>
          <p className="text-muted-foreground text-sm">
            Animated with scale effect
          </p>
        </motion.div>
      </div>
    ),
    code: `import { motion, AnimatePresence } from 'motion/react';

export default function ScaleModal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="bg-white rounded-xl p-6 shadow-xl max-w-md w-full mx-4">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}`,
  },
  {
    id: "avatar-group",
    title: "Animated Avatar Group",
    category: "data-display",
    description: "Group of avatars with stacking and hover animations",
    tags: ["avatar", "group", "stack", "users"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className={`w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br ${
                i === 1
                  ? "from-red-400 to-pink-400"
                  : i === 2
                  ? "from-blue-400 to-purple-400"
                  : i === 3
                  ? "from-green-400 to-teal-400"
                  : "from-yellow-400 to-orange-400"
              }`}
              whileHover={{
                scale: 1.2,
                zIndex: 10,
                transition: { duration: 0.2 },
              }}
              style={{ zIndex: 4 - i }}
            />
          ))}
        </div>
      </div>
    ),
    code: `import { motion } from 'motion/react';

export default function AvatarGroup({ avatars = [], max = 4 }) {
  const displayAvatars = avatars.slice(0, max);
  const extraCount = Math.max(0, avatars.length - max);

  return (
    <div className="flex -space-x-2">
      {displayAvatars.map((avatar, i) => (
        <motion.img
          key={i}
          src={avatar.src}
          alt={avatar.alt}
          className="w-10 h-10 rounded-full border-2 border-white"
          whileHover={{ 
            scale: 1.2, 
            zIndex: 10,
            transition: { duration: 0.2 }
          }}
          style={{ zIndex: displayAvatars.length - i }}
        />
      ))}
      {extraCount > 0 && (
        <motion.div
          className="w-10 h-10 rounded-full border-2 border-white bg-gray-500 flex items-center justify-center text-white text-xs font-semibold"
          whileHover={{ scale: 1.2, zIndex: 10 }}
        >
          +{extraCount}
        </motion.div>
      )}
    </div>
  );
}`,
  },
  {
    id: "stat-counter",
    title: "Animated Counter",
    category: "data-display",
    description: "Number that animates from 0 to target value",
    tags: ["counter", "number", "statistics", "animation"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <motion.div
            className="text-4xl font-bold text-primary"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            1,234
          </motion.div>
          <p className="text-muted-foreground text-sm mt-2">Users</p>
        </div>
      </div>
    ),
    code: `import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect } from 'react';

export default function AnimatedCounter({ 
  from = 0, 
  to, 
  duration = 2, 
  className = "" 
}) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration });
    return controls.stop;
  }, [count, to, duration]);

  return (
    <motion.div
      className={\`text-4xl font-bold \${className}\`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <motion.span>{rounded}</motion.span>
    </motion.div>
  );
}`,
  },
  {
    id: "badge-notification",
    title: "Notification Badge",
    category: "data-display",
    description: "Animated badge with count and pulse effect",
    tags: ["badge", "notification", "count", "pulse"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <div className="relative">
          <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
            📧
          </div>
          <motion.div
            className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              3
            </motion.span>
          </motion.div>
        </div>
      </div>
    ),
    code: `import { motion } from 'motion/react';

export default function NotificationBadge({ count = 0, children, className = "" }) {
  if (count === 0) return children;

  return (
    <div className={\`relative \${className}\`}>
      {children}
      <motion.div
        className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full min-w-6 h-6 flex items-center justify-center px-1"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 25 }}
      >
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {count > 99 ? '99+' : count}
        </motion.span>
      </motion.div>
    </div>
  );
}`,
  },
  {
    id: "toast-notification",
    title: "Toast Notification",
    category: "feedback",
    description: "Sliding toast notification with auto-dismiss",
    tags: ["toast", "notification", "feedback", "slide"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <motion.div
          className="bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
            ✓
          </div>
          <span className="text-sm font-medium">Success message!</span>
        </motion.div>
      </div>
    ),
    code: `import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';

export default function Toast({ 
  message, 
  type = 'success', 
  isVisible, 
  onDismiss,
  duration = 3000 
}) {
  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500'
  };

  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(onDismiss, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onDismiss]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={\`\${colors[type]} text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2\`}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <span className="text-sm font-medium">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}`,
  },
  {
    id: "alert-banner",
    title: "Animated Alert Banner",
    category: "feedback",
    description: "Alert banner with slide-down animation",
    tags: ["alert", "banner", "slide", "notification"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <motion.div
          className="bg-yellow-100 border border-yellow-300 text-yellow-800 px-4 py-3 rounded-lg w-64"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs">
              !
            </div>
            <span className="text-sm font-medium">Warning message</span>
          </div>
        </motion.div>
      </div>
    ),
    code: `import { motion, AnimatePresence } from 'motion/react';

export default function AlertBanner({ 
  message, 
  type = 'warning', 
  isVisible, 
  onDismiss 
}) {
  const styles = {
    success: 'bg-green-100 border-green-300 text-green-800',
    error: 'bg-red-100 border-red-300 text-red-800',
    warning: 'bg-yellow-100 border-yellow-300 text-yellow-800',
    info: 'bg-blue-100 border-blue-300 text-blue-800'
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={\`\${styles[type]} border px-4 py-3 rounded-lg\`}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{message}</span>
            {onDismiss && (
              <button
                onClick={onDismiss}
                className="ml-4 text-current hover:opacity-70"
              >
                ×
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}`,
  },
  {
    id: "progress-circle",
    title: "Circular Progress",
    category: "feedback",
    description: "Circular progress indicator with smooth animation",
    tags: ["progress", "circle", "loading", "percentage"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <div className="relative w-20 h-20">
          <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-muted stroke-current"
              fill="none"
              strokeWidth="3"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <motion.path
              className="text-primary stroke-current"
              fill="none"
              strokeWidth="3"
              strokeLinecap="round"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              initial={{ strokeDasharray: "0 100" }}
              animate={{ strokeDasharray: "75 100" }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-semibold text-foreground">75%</span>
          </div>
        </div>
      </div>
    ),
    code: `import { motion } from 'motion/react';

export default function CircularProgress({ 
  percentage = 0, 
  size = 80, 
  strokeWidth = 3,
  className = "" 
}) {
  const circumference = 2 * Math.PI * 15.9155;
  const strokeDasharray = \`\${(percentage / 100) * circumference} \${circumference}\`;

  return (
    <div className={\`relative \${className}\`} style={{ width: size, height: size }}>
      <svg 
        className="transform -rotate-90" 
        viewBox="0 0 36 36"
        style={{ width: size, height: size }}
      >
        <path
          className="text-gray-200 stroke-current"
          fill="none"
          strokeWidth={strokeWidth}
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <motion.path
          className="text-blue-500 stroke-current"
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          initial={{ strokeDasharray: "0 100" }}
          animate={{ strokeDasharray }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-semibold">{percentage}%</span>
      </div>
    </div>
  );
}`,
  },
  {
    id: "masonry-grid",
    title: "Animated Masonry Grid",
    category: "layout",
    description: "Masonry layout with staggered animation entrance",
    tags: ["masonry", "grid", "layout", "stagger"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <div className="grid grid-cols-3 gap-2 w-64">
          {[40, 60, 80, 50, 70, 45].map((height, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg"
              style={{ height: `${height}px` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            />
          ))}
        </div>
      </div>
    ),
    code: `import { motion } from 'motion/react';

export default function MasonryGrid({ items = [], columns = 3 }) {
  return (
    <div 
      className="grid gap-4"
      style={{ gridTemplateColumns: \`repeat(\${columns}, 1fr)\` }}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: index * 0.1, 
            duration: 0.5,
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
          whileHover={{ y: -4, scale: 1.02 }}
        >
          {item.content}
        </motion.div>
      ))}
    </div>
  );
}`,
  },
  {
    id: "sticky-header",
    title: "Animated Sticky Header",
    category: "layout",
    description: "Header that shrinks and changes on scroll",
    tags: ["sticky", "header", "scroll", "shrink"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <motion.header
          className="bg-card border border-border rounded-lg px-6 py-3 shadow-sm"
          initial={{ height: 60 }}
          animate={{ height: 48 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between">
            <motion.h1
              className="font-bold text-card-foreground"
              initial={{ fontSize: "1.25rem" }}
              animate={{ fontSize: "1rem" }}
              transition={{ duration: 0.3 }}
            >
              Logo
            </motion.h1>
            <nav className="flex space-x-4">
              <span className="text-sm text-muted-foreground">Home</span>
              <span className="text-sm text-muted-foreground">About</span>
            </nav>
          </div>
        </motion.header>
      </div>
    ),
    code: `import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';

export default function StickyHeader({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b"
      animate={{
        height: isScrolled ? 64 : 80,
        paddingTop: isScrolled ? 8 : 16,
        paddingBottom: isScrolled ? 8 : 16,
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-full">
        <motion.h1
          className="font-bold"
          animate={{
            fontSize: isScrolled ? "1.25rem" : "1.5rem",
          }}
          transition={{ duration: 0.3 }}
        >
          Logo
        </motion.h1>
        <nav>{children}</nav>
      </div>
    </motion.header>
  );
}`,
  },
  {
    id: "accordion-menu",
    title: "Animated Accordion",
    category: "layout",
    description: "Accordion with smooth expand/collapse animations",
    tags: ["accordion", "collapse", "expand", "menu"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <div className="w-64 border border-border rounded-lg overflow-hidden">
          <motion.div
            className="bg-card p-3 border-b border-border cursor-pointer"
            whileHover={{ backgroundColor: "hsl(var(--accent))" }}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-card-foreground">
                Section 1
              </span>
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="text-muted-foreground"
              >
                ↓
              </motion.span>
            </div>
          </motion.div>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-3 text-sm text-muted-foreground">
              Accordion content goes here
            </div>
          </motion.div>
        </div>
      </div>
    ),
    code: `import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function AnimatedAccordion({ items }) {
  const [openItems, setOpenItems] = useState(new Set([0]));

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      {items.map((item, index) => (
        <div key={index}>
          <motion.button
            className="w-full p-4 bg-white hover:bg-gray-50 border-b border-gray-200 flex items-center justify-between text-left"
            onClick={() => toggleItem(index)}
            whileHover={{ backgroundColor: "#f9fafb" }}
          >
            <span className="font-medium">{item.title}</span>
            <motion.span
              animate={{ rotate: openItems.has(index) ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ↓
            </motion.span>
          </motion.button>
          <AnimatePresence>
            {openItems.has(index) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 bg-gray-50">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}`,
  },
  {
    id: "drag-card",
    title: "Draggable Card",
    category: "interactive",
    description: "Card that can be dragged and returns to position",
    tags: ["drag", "card", "interactive", "physics"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <motion.div
          className="bg-card rounded-xl p-6 shadow-lg border border-border cursor-grab active:cursor-grabbing"
          drag
          dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
          dragElastic={0.1}
          whileDrag={{ scale: 1.1, rotate: 5 }}
        >
          <h3 className="font-bold text-card-foreground mb-2">Drag Me!</h3>
          <p className="text-muted-foreground text-sm">
            I can be dragged around
          </p>
        </motion.div>
      </div>
    ),
    code: `import { motion } from 'motion/react';

export default function DraggableCard({ children, className = "" }) {
  return (
    <motion.div
      className={\`bg-white rounded-xl p-6 shadow-lg cursor-grab active:cursor-grabbing \${className}\`}
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      dragElastic={0.1}
      whileDrag={{ 
        scale: 1.05, 
        rotate: Math.random() * 10 - 5,
        zIndex: 1000 
      }}
      dragTransition={{ 
        bounceStiffness: 600, 
        bounceDamping: 20 
      }}
    >
      {children}
    </motion.div>
  );
}`,
  },
  {
    id: "swipe-card",
    title: "Swipeable Card",
    category: "interactive",
    description: "Card that can be swiped left or right to dismiss",
    tags: ["swipe", "card", "dismiss", "gesture"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <motion.div
          className="bg-card rounded-xl p-6 shadow-lg border border-border w-64"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          whileDrag={{ rotate: 15 }}
        >
          <h3 className="font-bold text-card-foreground mb-2">Swipe Card</h3>
          <p className="text-muted-foreground text-sm">Swipe left or right</p>
        </motion.div>
      </div>
    ),
    code: `import { motion, useMotionValue, useTransform } from 'motion/react';

export default function SwipeCard({ 
  children, 
  onSwipeLeft, 
  onSwipeRight, 
  className = "" 
}) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-30, 30]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 100) {
      onSwipeRight?.();
    } else if (info.offset.x < -100) {
      onSwipeLeft?.();
    }
  };

  return (
    <motion.div
      className={\`bg-white rounded-xl p-6 shadow-lg cursor-grab active:cursor-grabbing \${className}\`}
      style={{ x, rotate, opacity }}
      drag="x"
      dragConstraints={{ left: -200, right: 200 }}
      onDragEnd={handleDragEnd}
      whileDrag={{ scale: 1.05 }}
    >
      {children}
    </motion.div>
  );
}`,
  },
  {
    id: "hover-card",
    title: "Hover Reveal Card",
    category: "interactive",
    description: "Card that reveals content on hover with overlay",
    tags: ["hover", "reveal", "overlay", "card"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <motion.div
          className="relative bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl w-48 h-32 overflow-hidden group cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold">Hover Me</span>
          </div>
          <motion.div
            className="absolute inset-0 bg-black/50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-white text-sm">Hidden Content!</span>
          </motion.div>
        </motion.div>
      </div>
    ),
    code: `import { motion } from 'motion/react';

export default function HoverRevealCard({ 
  children, 
  hoverContent, 
  className = "" 
}) {
  return (
    <motion.div
      className={\`relative rounded-xl overflow-hidden cursor-pointer \${className}\`}
      whileHover={{ scale: 1.02 }}
    >
      <div className="w-full h-full">
        {children}
      </div>
      <motion.div
        className="absolute inset-0 bg-black/70 flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-center text-white p-4">
          {hoverContent}
        </div>
      </motion.div>
    </motion.div>
  );
}`,
  },
  {
    id: "zoom-image",
    title: "Zoom on Hover Image",
    category: "interactive",
    description: "Image that zooms in smoothly on hover",
    tags: ["zoom", "image", "hover", "scale"],
    dependencies: ["motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <div className="w-32 h-32 rounded-xl overflow-hidden">
          <motion.div
            className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    ),
    code: `import { motion } from 'motion/react';

export default function ZoomImage({ 
  src, 
  alt, 
  className = "",
  zoomScale = 1.1 
}) {
  return (
    <div className={\`overflow-hidden rounded-lg \${className}\`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        whileHover={{ scale: zoomScale }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </div>
  );
}`,
  },
  {
    id: "search-input-animated",
    title: "Animated Search Input",
    category: "inputs",
    description: "Search input that expands on focus with icon animation",
    tags: ["search", "input", "expand", "focus"],
    dependencies: ["motion", "lucide-react"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <motion.div
          className="relative"
          initial={{ width: 200 }}
          whileFocus={{ width: 280 }}
        >
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <motion.div
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            whileFocus={{ scale: 1.1, color: "hsl(var(--primary))" }}
          >
            🔍
          </motion.div>
        </motion.div>
      </div>
    ),
    code: `import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import { useState } from 'react';

export default function AnimatedSearchInput({ 
  placeholder = "Search...", 
  className = "" 
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      className={\`relative \${className}\`}
      animate={{ width: isFocused ? 280 : 200 }}
      transition={{ duration: 0.3 }}
    >
      <input
        type="text"
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <motion.div
        className="absolute left-3 top-1/2 transform -translate-y-1/2"
        animate={{ 
          scale: isFocused ? 1.1 : 1,
          color: isFocused ? "#3b82f6" : "#6b7280"
        }}
        transition={{ duration: 0.2 }}
      >
        <Search size={18} />
      </motion.div>
    </motion.div>
  );
}`,
  },
];
