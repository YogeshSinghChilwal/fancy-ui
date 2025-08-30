"use client";

import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

const showcaseComponents = [
  {
    id: 1,
    title: "Gradient Button",
    description: "Beautiful animated button with hover effects",
    component: (
      <Button variant="gradient" size="lg" className="animate-pulse-glow">
        <Zap className="mr-2 h-5 w-5" />
        Get Started
      </Button>
    ),
    code: `<Button variant="gradient" size="lg">
  <Zap className="mr-2 h-5 w-5" />
  Get Started
</Button>`,
  },
  {
    id: 2,
    title: "Animated Card",
    description: "Hover effects with smooth transitions",
    component: (
      <Card className="w-64 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2">
        <CardHeader>
          <CardTitle className="gradient-text">Feature Card</CardTitle>
          <CardDescription>Beautiful hover animations</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This card demonstrates smooth hover effects with scale and elevation
            changes.
          </p>
        </CardContent>
      </Card>
    ),
    code: `<Card className="hover:shadow-xl transition-all duration-300 hover:scale-105">
  <CardHeader>
    <CardTitle className="gradient-text">Feature Card</CardTitle>
    <CardDescription>Beautiful hover animations</CardDescription>
  </CardHeader>
</Card>`,
  },
  {
    id: 3,
    title: "Gradient Text",
    description: "Animated gradient text effects",
    component: (
      <h3 className="text-4xl font-bold gradient-text animate-gradient-shift">
        Amazing Text
      </h3>
    ),
    code: `<h3 className="text-4xl font-bold gradient-text">
  Amazing Text
</h3>`,
  },
];

const Showcase = () => {
  return (
    <section className="py-24 max-w-8xl mx-auto md:px-10  bg-gradient-to-br">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Component <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See our components in action. Each one is ready to copy and paste
            into your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {showcaseComponents.map((component, index) => (
            <motion.div
              key={component.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Preview */}
              <div className="p-8 rounded-lg bg-gradient-surface flex items-center justify-center min-h-[200px]">
                {component.component}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button variant="gradient" size="xl" asChild>
            <Link href={"/components"} className="flex items-center">
              View All Components
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
