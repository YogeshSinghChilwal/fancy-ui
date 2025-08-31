import { Search, Folder } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { JSX } from "react";

interface Category {
  id: string;
  name: string;
  count: number;
}

interface ComponentSidebarProps {
  categories: Category[];
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filteredComponents: {
    id: string;
    title: string;
    category: string;
    description: string;
    tags: string[];
    dependencies: string[];
    preview: JSX.Element;
    code: string;
  }[];
  selectedComponent: string;
  onComponentSelect: (componentId: string) => void;
}

export function ComponentSidebar({
  categories,
  selectedCategory,
  onCategorySelect,
  searchQuery,
  onSearchChange,
  filteredComponents,
  selectedComponent,
  onComponentSelect,
}: ComponentSidebarProps) {
  return (
    <div className="w-64 border-r bg-sidebar border-sidebar-border h-screen overflow-y-auto overflow-x-hidden scroll-smooth md:px-8">
      <div className="py-6 space-y-6 ">
        {/* Header */}
        <div>
          <h2 className="font-bold text-sidebar-foreground mb-4">Components</h2>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 bg-background border-border"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-muted-foreground mb-2 flex items-center">
            <Folder className="w-4 h-4 mr-2" />
            Categories
          </h3>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category.id)}
              className={cn(
                "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between",
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <span>{category.name}</span>
              <span className="text-xs opacity-60">{category.count}</span>
            </button>
          ))}
        </div>

        {/* Component List */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-muted-foreground mb-2">
            Components
          </h3>
          <div className="space-y-1">
            {filteredComponents.map((component) => (
              <button
                key={component.id}
                onClick={() => onComponentSelect(component.id)}
                className={cn(
                  "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                  selectedComponent === component.id
                    ? "bg-primary text-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                {component.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
