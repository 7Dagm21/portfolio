import { FEATURED_PROJECTS } from "../data/project";
import { Briefcase, Sparkles, Target, Globe, Palette, Zap, ChevronLeft, ChevronRight } from "lucide-react"; 
import ProjectCard from '../ui/ProjectCard';
import FadeIn from '../animations/FadeIn';
import { s } from "node_modules/react-router/dist/development/context-DGGUoDIu.d.mts";
import type { text } from "stream/consumers";

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeCategory === "All"
  ? projects
  : projects.filter(project => project.category === activeCategory);

  // reset carousel when category changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const scrollToIndex = (index) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const container = s
      const cardWidth = container.offsetWidth / 3; // assuming 3 cards visible at a time
      container.scrollTO({
        left: cardWidth * index,
        behavior: "smooth",
      })
    }
  };

  const nextSlide = () => {
    const maxIndex = Math.max(0, filteredProjects.length - 3); // assuming 3 cards visible at a time
    const newIndex = Math.min(currentIndex + 1, maxIndex);
    scrollToIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    scrollToIndex(newIndex);
  };

  // Category icons mapping
  const categoryIcons = {
    'All': Target,
    'Web Apps': Globe,
    'UI Components': Palette,
    'Full Stack': Zap,
  };

  return (
   <section id="projects" className="">
      <div className="">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>

      <div className="">
        <FadeIn delay={0}>
          <div className="">
            <div className="">
              <Briefcase className=""/>
              <span className="">My Work</span>
            </div>
            <h2 className="">Featured Projects</h2>
            <p className="">
              Showcasing my best work and achievements
            </p>
          </div>
        </FadeIn>

        {/* Category Filters */}
        <FadeIn delay={100}>
          <div className="">
            {categories.map((category) => {
              <button
                key={category}
                onClick={()=>handleCategoryChange(category)}
                className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                  ? 'text-white'
                : 'text-white/60 hover:text-white'}`}
              >
                <div className={`absolute inset-9 rounded-full transition-all duration-300  ${activeCategory == handleCategoryChange
                  ? 'bg-primary/10 opacity-100'
                  : 'bg-white/5 border border-white/10 group-hover:bg-hover'
                }`}/>
                <div className="">
                  {React.createElement(categoryIcons[category], { className: "w-4 h-4" })}
                  <span className="">{category}</span>
                </div>

                {activeCategory === category && (
                  <div className=""/>
                )}
              </button>

            ))}
          </div>
        </FadeIn>

        {/* Projects Carousel */}
        <FadeIn delay={200}>
          <div className="">
            <div ref={scrollContainerRef}
            className="">
              <div className="">
                {filteredProjects.map{(project, index) => (
                  <div 
                  key={project.id}
                  className="">
                  <ProjectCard project={project} />
                  </div>
                )}}
              </div>
            </div>

            {/* Navigation arrows */}
            {filteredProjects.length > 3 && (
              <>
                <button 
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className=""
                aria-label="Previous projects">
                    <ChevronLeft className=""/>
                </button>
                
                <button 
                onClick={nextSlide}
                disabled={currentIndex >= filteredProjects.length - 3}
                className=""
                aria-label="Next projects">
                  <ChevronRight className=""/>
                </button>
              </> 
            )}

            {/* Navigation dots */}
            {filteredProjects.length}
   </section>
  );
};

export default ProjectsPage;
