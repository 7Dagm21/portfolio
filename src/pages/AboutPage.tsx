import { useEffect, useMemo, useState } from "react";
import { useTheme } from "@/context/useTheme";
import { useTranslation } from "@/i18n/useTranslation";
import FadeIn from "@/animations/FadeIn";
import heroImage from "@/assets/hero.png";
import GetInTouchButton from "@/components/ui/GetInTouchButton";
import {
  Camera, Code2, PenTool, Music, Gamepad2, Dumbbell, Globe, BookOpen, MapPin, CheckCircle,
} from "lucide-react";
import { ABOUT_TECH_IDS } from "@/data/about";
import { skills } from "@/data/skills";
import type { SkillLevel } from "@/data/skills";

const levelClass: Record<string, string> = {
  Expert: "text-[#8DFF69] bg-[#8DFF69]/20 border-[#8DFF69]/30",
  Advanced: "text-cyan-400 bg-cyan-500/20 border-cyan-500/30",
  Intermediate: "text-emerald-400 bg-emerald-500/20 border-emerald-500/30",
  Beginner: "text-red-400 bg-red-500/20 border-red-500/30",
};

const levelClassLight: Record<string, string> = {
  Expert: "text-emerald-700 bg-emerald-50 border-emerald-200",
  Advanced: "text-cyan-700 bg-cyan-50 border-cyan-200",
  Intermediate: "text-emerald-600 bg-emerald-50 border-emerald-200",
  Beginner: "text-red-600 bg-red-50 border-red-200",
};

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Camera, Code2, PenTool, Music, Gamepad2, Dumbbell, Globe, BookOpen,
};

const AboutPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const { isDark } = useTheme();
  const { t } = useTranslation();

  const bioParagraphs = useMemo(
    () => [t("about.bio1"), t("about.bio2"), t("about.bio3")],
    [t],
  );

  const experience = useMemo(
    () => [
      {
        role: t("about.exp1Role"),
        timeframe: t("about.exp1Time"),
        description: t("about.exp1Desc"),
        highlights: [
          t("about.exp1h1"),
          t("about.exp1h2"),
          t("about.exp1h3"),
          t("about.exp1h4"),
        ],
      },
      {
        role: t("about.exp2Role"),
        timeframe: t("about.exp2Time"),
        description: t("about.exp2Desc"),
        highlights: [t("about.exp2h1"), t("about.exp2h2"), t("about.exp2h3")],
      },
    ],
    [t],
  );

  const education = useMemo(
    () => [
      {
        degree: t("about.eduDegree"),
        school: t("about.eduSchool"),
        description: t("about.eduDesc"),
      },
    ],
    [t],
  );

  const interests = useMemo(
    () => [
      { name: t("about.int1Name"), icon: "Camera", description: t("about.int1Desc") },
      { name: t("about.int2Name"), icon: "Code2", description: t("about.int2Desc") },
      { name: t("about.int3Name"), icon: "PenTool", description: t("about.int3Desc") },
      { name: t("about.int4Name"), icon: "Music", description: t("about.int4Desc") },
      { name: t("about.int5Name"), icon: "Gamepad2", description: t("about.int5Desc") },
      { name: t("about.int6Name"), icon: "Dumbbell", description: t("about.int6Desc") },
      { name: t("about.int7Name"), icon: "Globe", description: t("about.int7Desc") },
      { name: t("about.int8Name"), icon: "BookOpen", description: t("about.int8Desc") },
    ],
    [t],
  );

  const pageClasses = isDark ? "relative overflow-hidden bg-slate-950 py-20 text-slate-100" : "relative overflow-hidden bg-slate-50 py-20 text-slate-900";
  const cardClasses = isDark ? "rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300" : "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300";
  const titleText = isDark ? "text-white" : "text-slate-900";
  const textMuted = isDark ? "text-white/60" : "text-slate-600";

  const techSkills = skills.filter(s => (ABOUT_TECH_IDS as unknown as number[]).includes(s.id));

  const translateLevel = (level: SkillLevel) => t(`levels.${level}`);

  return (
    <section className={pageClasses}>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className={`float absolute left-0 top-1/4 h-96 w-96 rounded-full blur-3xl ${isDark ? "bg-primary/10 opacity-50" : "bg-blue-200/40 opacity-60"}`} />
        <div className={`float-slow absolute bottom-1/4 right-0 h-96 w-96 rounded-full blur-3xl ${isDark ? "bg-primary/10 opacity-50" : "bg-violet-200/40 opacity-60"}`} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-400 px-4 sm:px-6 lg:px-10">
        <div className={`mb-24 text-center transition-all duration-700 ease-out ${isMounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
          <div className={`shimmer mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 ${isDark ? "border-primary/30 bg-gradient-to-r from-primary/10 via-primary/15 to-primary/10" : "border-blue-200 bg-gradient-to-r from-blue-50 via-white to-blue-50"}`}>
            <span className={`flex h-4 w-4 items-center justify-center text-sm ${isDark ? "text-primary" : "text-blue-600"}`}>
              ✦
            </span>
            <span className={`text-sm font-medium ${isDark ? "text-primary" : "text-blue-700"}`}>
              {t("about.badge")}
            </span>
          </div>
          <h1 className={`text-4xl lg:text-5xl font-normal ${titleText}`}>
            {t("about.title")}
          </h1>
          <p className={`mx-auto mt-4 max-w-2xl text-lg ${textMuted}`}>
            {t("about.subtitle")}
          </p>
        </div>

        <FadeIn delay={100}>
          <div className="mx-auto w-full max-w-400 px-4 sm:px-6 lg:px-10 mb-24">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <h2 className={`text-2xl font-semibold ${titleText} mb-6`}>{t("about.whoIAm")}</h2>
                {bioParagraphs.map((paragraph, i) => (
                  <p key={i} className={`text-base leading-7 ${textMuted} mb-4`}>{paragraph}</p>
                ))}
              </div>

              <div className="lg:col-span-2">
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div className={`absolute -top-10 -left-10 h-40 w-40 rounded-full blur-3xl ${isDark ? "bg-primary/20" : "bg-blue-200/50"}`} />
                  <div className={`absolute -bottom-10 -right-10 h-40 w-40 rounded-full blur-3xl ${isDark ? "bg-cyan-500/20" : "bg-violet-200/50"}`} />
                </div>
                <div className={`relative rounded-3xl border p-2 shadow-xl ${
                  isDark ? "border-white/10 bg-white/5" : "border-slate-200/70 bg-white"
                }`}>
                  <img src={heroImage} alt={t("home.name")} className="h-auto w-full rounded-2xl object-cover" />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mx-auto w-full max-w-400 px-4 sm:px-6 lg:px-10 mb-24">
            <h2 className={`text-2xl font-semibold ${titleText} mb-4`}>{t("about.techTitle")}</h2>
            <p className={`mb-8 text-base ${textMuted}`}>{t("about.techSubtitle")}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {techSkills.map(skill => (
                <span
                  key={skill.id}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isDark
                      ? levelClass[skill.level] ?? "text-white/70 bg-white/5 border-white/10"
                      : levelClassLight[skill.level] ?? "text-slate-600 bg-slate-50 border-slate-200"
                  }`}
                >
                  {skill.name}
                  <span className="ml-2 text-xs opacity-60">{translateLevel(skill.level)}</span>
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="mx-auto w-full max-w-400 px-4 sm:px-6 lg:px-10 mb-24">
            <h2 className={`text-2xl font-semibold ${titleText} mb-4`}>{t("about.experienceTitle")}</h2>
            <p className={`mb-8 text-base ${textMuted}`}>{t("about.experienceSubtitle")}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experience.map((exp, i) => (
                <div key={i} className={cardClasses}>
                  <div className="flex items-start gap-4 mb-3">
                    <MapPin className={`mt-1 h-5 w-5 shrink-0 ${isDark ? "text-emerald-400" : "text-emerald-600"}`} />
                    <div className="flex-1 flex flex-wrap items-start justify-between gap-2">
                      <h3 className={`text-xl font-semibold ${titleText}`}>{exp.role}</h3>
                      <span className={`rounded-full border px-3 py-0.5 text-xs font-medium whitespace-nowrap ${isDark ? "border-primary/30 bg-primary/10 text-primary" : "border-blue-200 bg-blue-50 text-blue-700"}`}>{exp.timeframe}</span>
                    </div>
                  </div>
                  <p className={`text-sm leading-6 mb-4 ${textMuted}`}>{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((hint, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        <CheckCircle className={`mt-0.5 h-4 w-4 shrink-0 ${isDark ? "text-emerald-400" : "text-emerald-600"}`} />
                        <span className={textMuted}>{hint}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="mx-auto w-full max-w-400 px-4 sm:px-6 lg:px-10 mb-24">
            <h2 className={`text-2xl font-semibold ${titleText} mb-4`}>{t("about.educationTitle")}</h2>
            <p className={`mb-8 text-base ${textMuted}`}>{t("about.educationSubtitle")}</p>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i} className={cardClasses}>
                  <h3 className={`text-xl font-semibold ${titleText}`}>{edu.degree}</h3>
                  <p className={`text-sm font-medium mt-1 ${isDark ? "text-primary" : "text-blue-600"}`}>{edu.school}</p>
                  {edu.description && <p className={`text-sm leading-6 mt-3 ${textMuted}`}>{edu.description}</p>}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={500}>
          <div className="mx-auto w-full max-w-400 px-4 sm:px-6 lg:px-10 mb-24">
            <h2 className={`text-2xl font-semibold ${titleText} mb-4`}>{t("about.interestsTitle")}</h2>
            <p className={`mb-8 text-base ${textMuted}`}>{t("about.interestsSubtitle")}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {interests.map((interest, i) => {
                const Icon = iconMap[interest.icon];
                return (
                  <div key={i} className={`${cardClasses} text-center p-4`}>
                    <div className="flex justify-center mb-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${isDark ? "bg-white/10" : "bg-slate-100"}`}>
                        {Icon && <Icon className={`h-5 w-5 ${isDark ? "text-primary" : "text-blue-600"}`} />}
                      </div>
                    </div>
                    <h4 className={`text-sm font-semibold mb-1 ${titleText}`}>{interest.name}</h4>
                    <p className={`text-xs leading-5 ${textMuted}`}>{interest.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        <div
          className={`rounded-[32px] border p-10 text-center shadow-sm transition-all delay-300 duration-700 ease-out ${
            isDark
              ? "border-white/10 bg-primary/10 shadow-[0_20px_60px_rgba(59,130,246,0.15)]"
              : "border-slate-200 bg-blue-50 shadow-[0_20px_60px_rgba(59,130,246,0.12)]"
          } ${isMounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
          <h2 className={`text-3xl font-semibold sm:text-4xl ${titleText}`}>
            {t("about.ctaTitle")}
          </h2>
          <p className={`mx-auto mt-4 max-w-2xl text-base leading-7 sm:text-lg ${textMuted}`}>
            {t("about.ctaBody")}
          </p>
          <GetInTouchButton className="mt-8" />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
