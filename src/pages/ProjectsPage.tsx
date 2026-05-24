import { useState, useRef, useMemo } from "react";
import { useTheme } from "@/context/useTheme";
import { useTranslation } from "@/i18n/useTranslation";
import {
  FILTER_CATEGORY_SLUGS,
  matchesCategoryFilter,
  type FilterCategorySlug,
} from "@/i18n/categories";
import { translateProject } from "@/i18n/projectTranslations";
import { Briefcase, Target, Globe, Palette, Zap } from "lucide-react";
import ProjectCard from "../components/ui/ProjectCard";
import CategoryTabs from "../components/ui/CategoryTabs";
import { FEATURED_PROJECTS } from "../data/project";

const categoryIcons = {
  all: Target,
  webApps: Globe,
  uiComponents: Palette,
  fullStack: Zap,
};

const ProjectsPage = () => {
  const { isDark } = useTheme();
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<FilterCategorySlug>("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = useMemo(
    () => FILTER_CATEGORY_SLUGS.map((slug) => t(`categories.${slug}`)),
    [t],
  );

  const filteredProjects = useMemo(
    () =>
      FEATURED_PROJECTS.filter((project) =>
        matchesCategoryFilter(project.category, activeCategory),
      ).map((project) => translateProject(project, t)),
    [activeCategory, t],
  );

  const handleCategoryChange = (categoryLabel: string) => {
    const slug =
      FILTER_CATEGORY_SLUGS.find((key) => t(`categories.${key}`) === categoryLabel) ??
      "all";
    setActiveCategory(slug);
    setCurrentIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth / 3;
      container.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

  const getDotClasses = (index: number): string => {
    const baseClasses = "rounded-full transition-all duration-300";
    if (index === currentIndex) {
      return `${baseClasses} ${isDark ? "bg-blue-300 w-6 h-2" : "bg-blue-600 w-6 h-2"}`;
    }
    return `${baseClasses} ${isDark ? "bg-white/30 w-2 h-2 hover:bg-white/50" : "bg-slate-300 w-2 h-2 hover:bg-slate-400"}`;
  };

  const activeCategoryLabel = t(`categories.${activeCategory}`);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`w-full rounded-3xl p-8 shadow-sm sm:p-12 lg:p-16 ${isDark ? "border border-white/10 bg-white/5" : "border border-slate-200/70 bg-white"}`}
        >
          <div className="text-center mb-12">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${isDark ? "bg-blue-300/10 border border-blue-300/30" : "bg-blue-600/10 border border-blue-600/30"}`}
            >
              <Briefcase
                className={`w-4 h-4 ${isDark ? "text-blue-300" : "text-blue-600"}`}
              />
              <span
                className={`text-sm font-medium ${isDark ? "text-blue-300" : "text-blue-600"}`}
              >
                {t("common.myWork")}
              </span>
            </div>
            <h2
              className={`text-4xl lg:text-5xl font-normal mb-4 ${isDark ? "text-white" : "text-slate-900"}`}
            >
              {t("Projects")}
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto ${isDark ? "text-white/60" : "text-slate-600"}`}
            >
              {t("common.featuredProjectsSubtitle")}
            </p>
          </div>

          <CategoryTabs
            categories={categories}
            activeCategory={activeCategoryLabel}
            onCategoryChange={handleCategoryChange}
            isDark={isDark}
            categoryIcons={categoryIcons}
            categorySlugs={FILTER_CATEGORY_SLUGS}
          />

          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
            >
              <div className="flex gap-6 pb-4">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start"
                  >
                    <ProjectCard project={project} isDark={isDark} />
                  </div>
                ))}
              </div>
            </div>

            {filteredProjects.length > 3 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                {Array.from(
                  { length: Math.max(0, filteredProjects.length - 2) },
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToIndex(index)}
                      className={getDotClasses(index)}
                      aria-label={t("common.goToSlide", { index: index + 1 })}
                    />
                  ),
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
