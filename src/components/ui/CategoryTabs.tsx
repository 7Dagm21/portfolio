import { createElement } from "react";
import type { LucideIcon } from "lucide-react";

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  isDark: boolean;
  categoryIcons: Record<string, LucideIcon>;
}

const CategoryTabs = ({
  categories,
  activeCategory,
  onCategoryChange,
  isDark,
  categoryIcons,
}: CategoryTabsProps) => {
  const getTabClasses = (category: string): string => {
    const isActive = activeCategory === category;
    const baseClasses =
      "group relative px-6 py-3 rounded-full font-medium transition-all duration-300";

    if (isActive) {
      return `${baseClasses} ${isDark ? "text-white" : "text-slate-900"}`;
    }
    return `${baseClasses} ${isDark ? "text-white/60 hover:text-white" : "text-slate-600 hover:text-slate-900"}`;
  };

  const getBackgroundClasses = (category: string): string => {
    const isActive = activeCategory === category;
    const baseClasses =
      "absolute inset-0 rounded-full transition-all duration-300";

    if (isActive) {
      return `${baseClasses} ${isDark ? "bg-blue-300/10 opacity-100" : "bg-blue-600/10 opacity-100"}`;
    }
    return `${baseClasses} ${isDark ? "bg-white/5 border border-white/10 group-hover:bg-white/10" : "bg-slate-100 border border-slate-200 group-hover:bg-slate-200"}`;
  };

  const getGlowClasses = (): string => {
    return `absolute inset-0 rounded-full ${isDark ? "bg-blue-300" : "bg-blue-600"} blur-xl opacity-50 -z-10`;
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-16">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={getTabClasses(category)}
        >
          <div className={getBackgroundClasses(category)} />
          <div className="relative flex items-center gap-2">
            {createElement(categoryIcons[category], {
              className: "w-4 h-4",
            })}
            <span>{category}</span>
          </div>

          {activeCategory === category && <div className={getGlowClasses()} />}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
