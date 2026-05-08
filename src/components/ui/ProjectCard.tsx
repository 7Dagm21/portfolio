export interface Project {
  id: number;
  title: string;
  summary: string;
  stack: string;
  category: string;
  image: string;
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
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
        isDark
          ? "border-white/10 bg-white/5 hover:border-blue-300/30"
          : "border-slate-200 bg-white hover:border-blue-600/30"
      }`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
      </div>

      <div className="space-y-4 p-6">
        <div>
          <h3
            className={`mb-2 text-xl font-semibold transition-colors duration-300 ${
              isDark
                ? "text-white group-hover:text-blue-300"
                : "text-slate-900 group-hover:text-blue-600"
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`line-clamp-2 text-sm leading-relaxed ${
              isDark ? "text-white/60" : "text-slate-600"
            }`}
          >
            {project.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`rounded-lg border px-3 py-1 text-xs font-medium transition-colors duration-200 ${
                isDark
                  ? "border-blue-300/20 bg-blue-300/10 text-blue-300 hover:bg-blue-300/20"
                  : "border-blue-600/20 bg-blue-600/10 text-blue-600 hover:bg-blue-600/20"
              }`}
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
