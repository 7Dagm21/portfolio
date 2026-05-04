import { FEATURED_PROJECTS } from "../data/project";
import { Briefcase, Sparkles, Target, Globe, Palette, Zap, ChevronLeft, ChevronRight } from "lucide-react"; 
import ProjectCard from '../ui/ProjectCard';
import FadeIn from '../animations/FadeIn';
import { s } from "node_modules/react-router/dist/development/context-DGGUoDIu.d.mts";

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
  
  return (
   <div>Projects</div>
  );
};

export default ProjectsPage;
