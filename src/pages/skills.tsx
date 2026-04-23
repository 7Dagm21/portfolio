import { skills, type SkillItem, type SkillLevel } from "../data/skills";

type SkillMap = Record<string, SkillItem[]>;

const levelWidth: Record<SkillLevel, number> = {
  Expert: 95,
  Advanced: 80,
  Intermediate: 65,
  Beginner: 40,
};

const levelClass: Record<SkillLevel, string> = {
  Expert: "text-[#8DFF69] bg-[#8DFF69]/20 border-[#8DFF69]/30",
  Advanced: "text-cyan-400 bg-cyan-500/20 border-cyan-500/30",
  Intermediate: "text-emerald-400 bg-emerald-500/20 border-emerald-500/30",
  Beginner: "text-red-400 bg-red-500/20 border-red-500/30",
};

const skillCategories: SkillMap = {
  Frontend: skills.filter((skill: SkillItem) =>
    ["React", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS"].includes(
      skill.name,
    ),
  ),
  Backend: skills.filter((skill: SkillItem) =>
    ["Node.js", "Express.js", "MongoDB"].includes(skill.name),
  ),
  Tools: skills.filter((skill: SkillItem) =>
    ["Git & GitHub", "Docker", "Postman", "Figma"].includes(skill.name),
  ),
};

const iconLabel: Record<string, string> = {
  FileCode: "{}",
  Code2: "</>",
  FileType: "TS",
  Zap: "JS",
  Palette: "CSS",
  Server: "API",
  GitBranch: "Git",
  Database: "DB",
  Package: "DK",
  Send: "API",
  PenTool: "UX",
};

const getIconLabel = (iconName: string) => {
  return iconLabel[iconName] ?? "<>";
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-black py-20 text-white"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <span className="flex h-4 w-4 items-center justify-center text-sm text-primary">
              ✦
            </span>
            <span className="text-sm font-medium text-primary">
              My Expertise
            </span>
          </div>

          <h2 className="mb-4 text-4xl font-normal text-white lg:text-5xl">
            Skills & Technologies
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            A comprehensive overview of my technical skills and proficiency
            level.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {Object.entries(skillCategories).map(([category, categorySkills]) => (
            <div
              key={category}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-primary/30"
            >
              <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="h-8 w-1 rounded-full bg-linear-to-b from-primary/30 to-primary/10" />
                <h3 className="text-xl font-medium text-white">{category}</h3>
              </div>

              <div className="space-y-5">
                {categorySkills.map((skill) => {
                  const icon = getIconLabel(skill.icon);
                  const proficiency = levelWidth[skill.level];

                  return (
                    <div key={skill.id} className="space-y-2">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="rounded-lg bg-white/5 p-2">
                            <span className="flex h-4 w-4 items-center justify-center text-[10px] font-semibold text-primary">
                              {icon}
                            </span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">
                              {skill.name}
                            </div>
                            <div className="text-xs text-white/50">
                              {skill.experience}
                            </div>
                          </div>
                        </div>

                        <span
                          className={`rounded-full border px-2 py-1 text-xs ${levelClass[skill.level]}`}
                        >
                          {skill.level}
                        </span>
                      </div>

                      <div className="relative h-1.5 overflow-hidden rounded-full bg-white/5">
                        <div
                          className="absolute left-0 top-0 h-full rounded-full bg-linear-to-r from-primary/10 to-primary/80 transition-all duration-1000 ease-out"
                          style={{ width: `${proficiency}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-primary/0 to-primary/5 opacity-0 transition-all duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
