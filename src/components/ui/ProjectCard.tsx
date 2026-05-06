export interface Project {
  id: number;
  title: string;
  summary: string;
  stack: string;
  category: string;
}

const ProjectCard = ({
  project,
  isDark,
}: {
  project: Project;
  isDark: boolean;
}) => {
  const technologies = project.stack.split(", ");

  return (
    <div
      className={`group relative border rounded-2xl overflow-hidden transition-all duration-300 ${isDark ? "bg-white/5 border-white/10 hover:border-blue-300/30" : "bg-white border-slate-200 hover:border-blue-600/30"}`}
    >
      <div className="p-6 space-y-4">
        <div>
          <h3
            className={`text-xl font-semibold mb-2 transition-colors duration-300 ${isDark ? "text-white group-hover:text-blue-300" : "text-slate-900 group-hover:text-blue-600"}`}
          >
            {project.title}
          </h3>
          <p
            className={`text-sm leading-relaxed line-clamp-2 ${isDark ? "text-white/60" : "text-slate-600"}`}
          >
            {project.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-3 py-1 text-xs font-medium border rounded-lg transition-colors duration-200 ${isDark ? "text-blue-300 bg-blue-300/10 border-blue-300/20 hover:bg-blue-300/20" : "text-blue-600 bg-blue-600/10 border-blue-600/20 hover:bg-blue-600/20"}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
