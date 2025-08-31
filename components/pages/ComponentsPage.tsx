"use client";
import { useState } from "react";
import { ComponentSidebar } from "@/components/ComponentSidebar";
import { ComponentDisplay } from "@/components/ComponentCard";
import { categories, components } from "@/data/components";

export default function Components() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedComponent, setSelectedComponent] = useState(
    components[0]?.id || ""
  );

  const filteredComponents = components.filter((component) => {
    const matchesCategory =
      selectedCategory === "all" || component.category === selectedCategory;
    const matchesSearch =
      component.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const currentComponent =
    components.find((comp) => comp.id === selectedComponent) || components[0];

  return (
    <div className="min-h-screen pt-16 flex justify-between container mx-auto">
      {/* Sidebar */}
      <div className="hidden sm:block">
        <ComponentSidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filteredComponents={filteredComponents}
          selectedComponent={selectedComponent}
          onComponentSelect={setSelectedComponent}
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 min-w-0 sm:ml-6 p-6  ">
        {currentComponent && <ComponentDisplay component={currentComponent} />}
      </main>
    </div>
  );
}
