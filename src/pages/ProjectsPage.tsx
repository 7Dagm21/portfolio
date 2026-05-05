import {FEATURED_PROJECTS} from '../data/projects'

const ProjectsPage = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black py-20 text-white"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <span aria-hidden="true" className="text-sm text-primary">
              *
            </span>
            <span className="text-sm font-medium text-primary">
              Selected Work
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-normal text-white lg:text-5xl">
            Projects
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            A snapshot of recent work focused on usability, speed, and
            maintainable engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {FEATURED_PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-primary/30"
            >
              <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="h-8 w-1 rounded-full bg-linear-to-b from-primary/30 to-primary/10" />
                <h2 className="text-xl font-medium text-white">
                  {project.title}
                </h2>
              </div>

              <p className="mb-4 text-sm text-white/70">{project.summary}</p>
              <p className="text-xs uppercase tracking-wide text-primary/80">
                {project.stack}
              </p>

              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-primary/0 to-primary/5 opacity-0 transition-all duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
