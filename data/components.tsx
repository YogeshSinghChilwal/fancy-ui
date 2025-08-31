import { motion } from "motion/react";

export const categories = [
  { id: "all", name: "All", count: 15 },
  { id: "cards", name: "Cards", count: 3 },
  { id: "typography", name: "Typography", count: 3 },
  { id: "backgrounds", name: "Backgrounds", count: 2 },
  { id: "buttons", name: "Buttons", count: 3 },
  { id: "inputs", name: "Inputs", count: 2 },
  { id: "navigation", name: "Navigation", count: 2 },
];

export const components = [
  {
    id: "card-hover",
    title: "Card Hover Animation",
    category: "cards",
    description: "A card with smooth hover animations and scale effects",
    tags: ["hover", "card", "animation"],
    dependencies: ["framer-motion"],
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
              <h3 className="font-bold text-lg text-card-foreground mb-2">Animated Card</h3>
              <p className="text-muted-foreground">Hover to see the magic happen with smooth animations.</p>
            </div>
          </div>
        </motion.div>
      </div>
    ),
    code: `import { motion } from 'framer-motion';

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
    description: "Text with character-by-character animation and gradient colors",
    tags: ["text", "animation", "gradient"],
    dependencies: ["framer-motion"],
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
                repeatDelay: 2
              }}
            >
              {char}
            </motion.span>
          ))}
          <span className="ml-2 text-foreground">Text</span>
        </div>
      </div>
    ),
    code: `import { motion } from 'framer-motion';

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
            <span className="text-white font-bold text-xl">Gradient Background</span>
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
}`,
  },
  {
    id: "floating-card",
    title: "Floating Card",
    category: "cards",
    description: "Card that gently floats with continuous animation",
    tags: ["float", "card", "animation"],
    dependencies: ["framer-motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <motion.div
          className="bg-card rounded-2xl p-6 shadow-lg"
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-8 h-8 bg-gradient-primary rounded-full mb-4" />
          <h3 className="font-bold text-card-foreground mb-2">Floating Card</h3>
          <p className="text-muted-foreground text-sm">This card floats with a gentle animation.</p>
        </motion.div>
      </div>
    ),
    code: `import { motion } from 'framer-motion';

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
    dependencies: ["framer-motion"],
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
    code: `import { motion } from 'framer-motion';

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
    dependencies: ["framer-motion"],
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
            style={{ overflow: "hidden", whiteSpace: "nowrap", display: "inline-block" }}
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
    code: `import { motion } from 'framer-motion';
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
    dependencies: ["framer-motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <motion.div
          className="text-3xl font-bold text-foreground relative"
          animate={{
            textShadow: [
              "0 0 0 transparent",
              "2px 0 0 hsl(var(--destructive)), -2px 0 0 hsl(var(--primary))",
              "0 0 0 transparent"
            ],
          }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        >
          GLITCH
        </motion.div>
      </div>
    ),
    code: `import { motion } from 'framer-motion';

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
    dependencies: ["framer-motion"],
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
    code: `import { motion } from 'framer-motion';

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
    dependencies: ["framer-motion"],
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
            e.currentTarget.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.1)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translate(0px, 0px) scale(1)';
          }}
        >
          Magnetic Button
        </motion.button>
      </div>
    ),
    code: `import { motion } from 'framer-motion';

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
    id: "glass-card",
    title: "Glass Morphism Card",
    category: "cards",
    description: "Card with glass morphism effect and backdrop blur",
    tags: ["glass", "card", "morphism"],
    dependencies: [],
    preview: (
      <div className="flex items-center justify-center p-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl">
        <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-6 shadow-xl">
          <div className="w-10 h-10 bg-white/30 rounded-lg mb-4" />
          <h3 className="font-bold text-white mb-2">Glass Card</h3>
          <p className="text-white/80 text-sm">Beautiful glass morphism effect with backdrop blur.</p>
        </div>
      </div>
    ),
    code: `export default function GlassCard({ children, className = "" }) {
  return (
    <div className={\`bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-6 shadow-xl \${className}\`}>
      {children}
    </div>
  );
}

// Usage with background:
// <div className="bg-gradient-to-br from-purple-400 to-pink-400 p-8">
//   <GlassCard>Your content here</GlassCard>
// </div>`,
  },
  {
    id: "animated-input",
    title: "Animated Input Field",
    category: "inputs",
    description: "Input field with floating label animation",
    tags: ["input", "floating", "label"],
    dependencies: ["framer-motion"],
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
    code: `import { motion } from 'framer-motion';
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
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            className="w-full pl-10 pr-4 py-3 border border-border rounded-xl bg-background text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="Search..."
          />
        </div>
      </div>
    ),
    code: `import { Search } from 'lucide-react';

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
    dependencies: ["framer-motion"],
    preview: (
      <div className="flex items-center justify-center p-8">
        <div className="relative bg-muted rounded-xl p-1">
          <div className="flex space-x-1">
            {["Tab 1", "Tab 2", "Tab 3"].map((tab, i) => (
              <button
                key={tab}
                className={`relative px-6 py-2 text-sm font-medium rounded-lg transition-colors z-10 ${
                  i === 0 ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
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
    code: `import { motion } from 'framer-motion';
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
    dependencies: ["framer-motion", "lucide-react"],
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
    code: `import { motion } from 'framer-motion';
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
];