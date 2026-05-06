import { useEffect, useMemo, useState } from "react";
import { useTheme } from "@/context/useTheme";
import { skills, type SkillItem, type SkillLevel } from "../data/skills";

type SkillMap = Record<string, SkillItem[]>;
type ActiveCategory = "All" | keyof typeof skillCategories;

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

const categoryBadgeClass: Record<string, string> = {
  Frontend: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  Backend: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  Tools: "bg-violet-500/15 text-violet-300 border-violet-500/30",
};

const getIconLabel = (iconName: string) => iconLabel[iconName] ?? "<>";

const Skills = () => {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>("All");
  const [selectedSkillId, setSelectedSkillId] = useState<number>(
    skills[0]?.id ?? 1,
  );
  const [isMounted, setIsMounted] = useState(false);

  const showSelectedPanel = activeCategory !== "All";

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const visibleCategoryEntries = useMemo<Array<[string, SkillItem[]]>>(() => {
    if (activeCategory === "All") {
      return Object.entries(skillCategories);
    }

    return [[activeCategory, skillCategories[activeCategory]]];
  }, [activeCategory]);

  const visibleSkills = useMemo(() => {
    if (activeCategory === "All") {
      return skills;
    }

    return skillCategories[activeCategory];
  }, [activeCategory]);

  const effectiveSelectedId = useMemo(() => {
    if (visibleSkills.some((skill) => skill.id === selectedSkillId)) {
      return selectedSkillId;
    }
    return visibleSkills[0]?.id ?? skills[0]?.id ?? 1;
  }, [selectedSkillId, visibleSkills]);

  const selectedSkill =
    skills.find((skill) => skill.id === effectiveSelectedId) ?? skills[0];
  const selectedSkillCategory =
    Object.entries(skillCategories).find(([, categorySkills]) =>
      categorySkills.some((skill) => skill.id === selectedSkill?.id),
    )?.[0] ?? "Frontend";

  const tabs: ActiveCategory[] = ["All", "Frontend", "Backend", "Tools"];

  const pageClasses = isDark
    ? "relative overflow-hidden bg-slate-950 py-20 text-slate-100"
    : "relative overflow-hidden bg-slate-50 py-20 text-slate-900";

  const cardClasses = isDark
    ? "group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.07]"
    : "group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-slate-50";

  const panelClasses = isDark
    ? "rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20"
    : "rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40";

  const textMuted = isDark ? "text-white/60" : "text-slate-600";
  const titleText = isDark ? "text-white" : "text-slate-900";
  const dividerClass = isDark ? "border-white/10" : "border-slate-200";

  return (
    <section id="skills" className={pageClasses}>
      <div className="skills-grid-overlay pointer-events-none absolute inset-0 overflow-hidden opacity-40" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`skills-float absolute left-0 top-1/4 h-96 w-96 rounded-full blur-3xl ${isDark ? "bg-primary/10 opacity-50" : "bg-blue-200/40 opacity-60"}`}
        />
        <div
          className={`skills-float-slow absolute bottom-1/4 right-0 h-96 w-96 rounded-full blur-3xl ${isDark ? "bg-primary/10 opacity-50" : "bg-violet-200/40 opacity-60"}`}
        />
        <div
          className={`skills-glow absolute left-1/4 top-10 h-28 w-28 rounded-full blur-2xl ${isDark ? "bg-cyan-400/20" : "bg-blue-300/30"}`}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-400 px-4 sm:px-6 lg:px-10">
        <div
          className={`mb-16 text-center transition-all duration-700 ease-out ${
            isMounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div
            className={`skills-shimmer mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 ${isDark ? "border-primary/30 bg-gradient-to-r from-primary/10 via-primary/15 to-primary/10" : "border-blue-200 bg-gradient-to-r from-blue-50 via-white to-blue-50"}`}
          >
            <span
              className={`flex h-4 w-4 items-center justify-center text-sm ${isDark ? "text-primary" : "text-blue-600"}`}
            >
              ✦
            </span>
            <span
              className={`text-sm font-medium ${isDark ? "text-primary" : "text-blue-700"}`}
            >
              My Expertise
            </span>
          </div>

          <h2 className={`mb-4 text-4xl font-normal lg:text-5xl ${titleText}`}>
            Skills & Technologies
          </h2>
          <p className={`mx-auto max-w-2xl text-lg ${textMuted}`}>
            A comprehensive overview of my technical skills and proficiency
            level.
          </p>
        </div>

        <div
          className={`mb-10 flex flex-wrap items-center justify-center gap-3 transition-all delay-100 duration-700 ease-out ${
            isMounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {tabs.map((category) => {
            const count =
              category === "All"
                ? skills.length
                : skillCategories[category].length;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`skills-card-hover rounded-full border px-4 py-2 text-sm font-medium hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 ${
                  activeCategory === category
                    ? isDark
                      ? "border-primary/60 bg-primary/15 text-primary shadow-lg shadow-primary/10"
                      : "border-blue-300 bg-blue-100 text-blue-700 shadow-lg shadow-blue-100"
                    : isDark
                      ? "border-white/10 bg-white/5 text-white/70"
                      : "border-slate-200 bg-white text-slate-600"
                }`}
              >
                {category}
                <span
                  className={`ml-2 text-xs ${isDark ? "text-white/40" : "text-slate-400"}`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div
          className={`grid grid-cols-1 gap-8 ${showSelectedPanel ? "lg:grid-cols-[1.5fr_0.9fr]" : "lg:grid-cols-1"}`}
        >
          <div
            className={`grid grid-cols-1 gap-8 ${showSelectedPanel ? "md:grid-cols-2" : "md:grid-cols-3"}`}
          >
            {visibleCategoryEntries.map(
              ([category, categorySkills], categoryIndex) => (
                <div
                  key={category}
                  className={`${cardClasses} skills-card-hover`}
                  style={{
                    transitionDelay: `${categoryIndex * 80}ms`,
                    animationDelay: `${categoryIndex * 120}ms`,
                  }}
                >
                  <div
                    className={`mb-6 flex items-center gap-3 border-b pb-4 ${dividerClass}`}
                  >
                    <div className="h-8 w-1 rounded-full bg-linear-to-b from-primary/30 to-primary/10" />
                    <h3 className={`text-xl font-medium ${titleText}`}>
                      {category}
                    </h3>
                    <span
                      className={`ml-auto rounded-full border px-3 py-1 text-xs font-medium ${categoryBadgeClass[category] ?? (isDark ? "border-white/10 bg-white/5 text-white/60" : "border-slate-200 bg-slate-100 text-slate-500")}`}
                    >
                      {categorySkills.length} skills
                    </span>
                  </div>

                  <div className="space-y-5">
                    {categorySkills.map((skill, skillIndex) => {
                      const icon = getIconLabel(skill.icon);
                      const proficiency = levelWidth[skill.level];
                      const isSelected = effectiveSelectedId === skill.id;

                      return (
                        <div key={skill.id} className="space-y-2">
                          <button
                            type="button"
                            onClick={() => setSelectedSkillId(skill.id)}
                            className={`skills-card-hover flex w-full items-center justify-between gap-4 rounded-xl border p-3 text-left hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white/5 ${
                              isSelected
                                ? isDark
                                  ? "border-primary/40 bg-primary/10 shadow-lg shadow-primary/10"
                                  : "border-blue-300 bg-blue-50 shadow-lg shadow-blue-100"
                                : isDark
                                  ? "border-transparent bg-transparent"
                                  : "border-transparent bg-transparent"
                            }`}
                            style={{ transitionDelay: `${skillIndex * 60}ms` }}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`rounded-lg p-2 ${isDark ? "bg-white/5" : "bg-slate-100"}`}
                              >
                                <span
                                  className={`flex h-4 w-4 items-center justify-center text-[10px] font-semibold ${isDark ? "text-primary" : "text-blue-600"}`}
                                >
                                  {icon}
                                </span>
                              </div>
                              <div>
                                <div
                                  className={`text-sm font-medium ${titleText}`}
                                >
                                  {skill.name}
                                </div>
                                <div className={`text-xs ${textMuted}`}>
                                  {skill.experience}
                                </div>
                              </div>
                            </div>

                            <span
                              className={`rounded-full border px-2 py-1 text-xs ${levelClass[skill.level]}`}
                            >
                              {skill.level}
                            </span>
                          </button>

                          <div
                            className={`relative h-1.5 overflow-hidden rounded-full ${isDark ? "bg-white/5" : "bg-slate-100"}`}
                          >
                            <div
                              className="absolute left-0 top-0 h-full rounded-full bg-linear-to-r from-primary/10 via-primary/50 to-primary/80 transition-all duration-1000 ease-out skills-shimmer"
                              style={{
                                width: `${isMounted ? proficiency : 0}%`,
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-primary/0 to-primary/5 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                </div>
              ),
            )}
          </div>

          {showSelectedPanel ? (
            <aside
              className={`sticky top-24 h-fit transition-all duration-700 ease-out ${
                isMounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              } ${panelClasses} skills-card-hover`}
            >
              <div
                className={`mb-6 flex items-center gap-3 border-b pb-4 ${dividerClass}`}
              >
                <div className="h-8 w-1 rounded-full bg-linear-to-b from-primary/30 to-primary/10" />
                <h3 className={`text-xl font-medium ${titleText}`}>
                  Selected Skill
                </h3>
              </div>

              {selectedSkill ? (
                <>
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <p
                        className={`text-sm ${isDark ? "text-white/50" : "text-slate-500"}`}
                      >
                        Active skill
                      </p>
                      <h4
                        className={`mt-1 text-2xl font-semibold ${titleText}`}
                      >
                        {selectedSkill.name}
                      </h4>
                    </div>
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${levelClass[selectedSkill.level]}`}
                    >
                      {selectedSkill.level}
                    </span>
                  </div>

                  <div className="mb-5 flex flex-wrap gap-2">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs ${isDark ? "border-white/10 bg-white/5 text-white/70" : "border-slate-200 bg-slate-50 text-slate-600"}`}
                    >
                      {selectedSkillCategory}
                    </span>
                    <span
                      className={`rounded-full border px-3 py-1 text-xs ${isDark ? "border-white/10 bg-white/5 text-white/70" : "border-slate-200 bg-slate-50 text-slate-600"}`}
                    >
                      {selectedSkill.experience}
                    </span>
                    <span
                      className={`rounded-full border px-3 py-1 text-xs ${isDark ? "border-white/10 bg-white/5 text-white/70" : "border-slate-200 bg-slate-50 text-slate-600"}`}
                    >
                      {getIconLabel(selectedSkill.icon)} badge
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div
                        className={`mb-2 flex items-center justify-between text-sm ${isDark ? "text-white/60" : "text-slate-500"}`}
                      >
                        <span>Proficiency</span>
                        <span>{levelWidth[selectedSkill.level]}%</span>
                      </div>
                      <div
                        className={`h-2 overflow-hidden rounded-full ${isDark ? "bg-white/5" : "bg-slate-100"}`}
                      >
                        <div
                          className="h-full rounded-full bg-linear-to-r from-primary/10 via-primary/50 to-primary/80 transition-all duration-1000 ease-out skills-shimmer"
                          style={{
                            width: `${isMounted ? levelWidth[selectedSkill.level] : 0}%`,
                          }}
                        />
                      </div>
                    </div>

                    <p className={`text-sm leading-6 ${textMuted}`}>
                      Click any skill card to update this preview. The active
                      state highlights the selected skill and animates the
                      progress bar.
                    </p>
                  </div>
                </>
              ) : null}
            </aside>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Skills;
