import { useState, useRef, useMemo } from "react";
import { useTheme } from "@/context/ThemeContext";
import {
  Briefcase,
  Target,
  Globe,
  Palette,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ProjectCard from "../components/ui/ProjectCard";
import CategoryTabs from "../components/ui/CategoryTabs";
import { FEATURED_PROJECTS } from "../data/project";

const categories = ["All", "Web Apps", "UI Components", "Full Stack"];

const categoryIcons = {
  All: Target,
  "Web Apps": Globe,
  "UI Components": Palette,
  "Full Stack": Zap,
};

const ProjectsPage = () => {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? FEATURED_PROJECTS
        : FEATURED_PROJECTS.filter(
            (project) => project.category === activeCategory
          ),
    [activeCategory]
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
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

  const nextSlide = () => {
    const maxIndex = Math.max(0, filteredProjects.length - 3);
    const newIndex = Math.min(currentIndex + 1, maxIndex);
    scrollToIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    scrollToIndex(newIndex);
  };

  const navButtonClasses = `flex absolute top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 border rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10 ${isDark ? "bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20" : "bg-slate-100 backdrop-blur-sm border-slate-200 hover:bg-slate-200"}`;

  const getDotClasses = (index: number): string => {
    const baseClasses = "rounded-full transition-all duration-300";
    if (index === currentIndex) {
      return `${baseClasses} ${isDark ? "bg-blue-300 w-6 h-2" : "bg-blue-600 w-6 h-2"}`;
    }
    return `${baseClasses} ${isDark ? "bg-white/30 w-2 h-2 hover:bg-white/50" : "bg-slate-300 w-2 h-2 hover:bg-slate-400"}`;
  };

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
                My Work
              </span>
            </div>
            <h2
              className={`text-4xl lg:text-5xl font-normal mb-4 ${isDark ? "text-white" : "text-slate-900"}`}
            >
              Featured Projects
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto ${isDark ? "text-white/60" : "text-slate-600"}`}
            >
              Showcasing my best work and achievements
            </p>
          </div>

          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            isDark={isDark}
            categoryIcons={categoryIcons}
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
              <>
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className={`${navButtonClasses} left-0 -translate-x-2 lg:-translate-x-4`}
                  aria-label="Previous projects"
                >
                  <ChevronLeft
                    className={`w-6 h-6 ${isDark ? "text-white" : "text-slate-900"}`}
                  />
                </button>

                <button
                  onClick={nextSlide}
                  disabled={currentIndex >= filteredProjects.length - 3}
                  className={`${navButtonClasses} right-0 translate-x-2 lg:translate-x-4`}
                  aria-label="Next projects"
                >
                  <ChevronRight
                    className={`w-6 h-6 ${isDark ? "text-white" : "text-slate-900"}`}
                  />
                </button>
              </>
            )}

            {filteredProjects.length > 3 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                {Array.from(
                  { length: Math.max(0, filteredProjects.length - 2) },
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToIndex(index)}
                      className={getDotClasses(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  )
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
