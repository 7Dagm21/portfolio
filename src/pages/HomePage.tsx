import { useMemo, useState } from "react";
import { Link } from "react-router";
import { ChevronLeft, ChevronRight, Quote, Star, Briefcase, ArrowRight } from "lucide-react";
import { useTheme } from "@/context/useTheme";
import { useTranslation } from "@/i18n/useTranslation";
import { translateProject } from "@/i18n/projectTranslations";
import { translateTestimonial } from "@/i18n/testimonialTranslations";
import FadeIn from "@/animations/FadeIn";
import heroImage from "@/assets/hero.png";
import { testimonials } from "@/data/testimonials";
import ProjectCard from "@/components/ui/ProjectCard";
import { FEATURED_PROJECTS } from "@/data/project";
import CalloutCard from "@/components/ui/CalloutCard";
import GetInTouchButton from "@/components/ui/GetInTouchButton";

const HomePage = () => {
  const { isDark } = useTheme();
  const { t } = useTranslation();
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const stats = useMemo(
    () => [
      { value: "3+", label: t("home.statYears") },
      { value: "15+", label: t("home.statProjects") },
      { value: "10+", label: t("home.statClients") },
    ],
    [t],
  );

  const localizedTestimonials = useMemo(
    () => testimonials.map((item) => translateTestimonial(item, t)),
    [t],
  );

  const localizedProjects = useMemo(
    () => FEATURED_PROJECTS.map((project) => translateProject(project, t)),
    [t],
  );

  const prevTestimonial = () =>
    setTestimonialIndex(
      (prev) => (prev - 1 + localizedTestimonials.length) % localizedTestimonials.length,
    );

  const nextTestimonial = () =>
    setTestimonialIndex((prev) => (prev + 1) % localizedTestimonials.length);

  const current = localizedTestimonials[testimonialIndex];

  return (
    <>
      <section className="flex min-h-[calc(100vh-9rem)] w-full items-center px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <FadeIn delay={100} duration={600}>
            <div className="max-w-xl space-y-6">
              <p
                className={`text-sm font-semibold uppercase tracking-[0.3em] ${
                  isDark ? "text-blue-300" : "text-blue-600"
                }`}
              >
                {t("home.greeting")}
              </p>

              <h1
                className={`text-4xl font-bold sm:text-5xl lg:text-6xl ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {t("home.name")}
              </h1>

              <p
                className={`text-xl sm:text-2xl ${
                  isDark ? "text-white/80" : "text-slate-700"
                }`}
              >
                {t("home.title")}
              </p>

              <p
                className={`max-w-2xl text-base leading-7 sm:text-lg ${
                  isDark ? "text-white/60" : "text-slate-600"
                }`}
              >
                {t("home.description")}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/projects"
                  className={`btn rounded-full border px-8 py-3 ${
                    isDark
                      ? "border-white/20 text-white hover:bg-white/10"
                      : "border-slate-300 text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {t("common.projects")}
                </Link>
                <GetInTouchButton variant="outline" />
              </div>

              <div className="flex flex-wrap gap-8 pt-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p
                      className={`text-2xl font-bold sm:text-3xl ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {stat.value}
                    </p>
                    <p
                      className={`mt-1 text-sm ${
                        isDark ? "text-white/50" : "text-slate-500"
                      }`}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={300} duration={600}>
            <div className="relative flex items-center justify-center lg:justify-start">
              <div className="relative z-10 rounded-3xl bg-base-100 p-2 shadow-xl">
                <img
                  src={heroImage}
                  alt={t("common.profileAlt")}
                  className="h-auto w-full max-w-xs rounded-2xl object-cover lg:max-w-sm xl:max-w-md"
                />
                <div
                  className={`float absolute -top-2 -right-2 z-20 rounded-xl px-4 py-2 text-sm font-medium shadow-lg ${
                    isDark
                      ? "border border-blue-500/30 bg-blue-500/20 text-blue-300"
                      : "border border-blue-200 bg-blue-50 text-blue-700"
                  }`}
                >
                  {t("common.openToWork")}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section
        className={`relative overflow-hidden py-20 ${
          isDark ? "bg-slate-950" : "bg-slate-100"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className={`absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${
              isDark ? "bg-primary/10" : "bg-blue-200/40"
            }`}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0}>
            <div className="mb-16 text-center">
              <div
                className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 ${
                  isDark
                    ? "border-primary/30 bg-primary/10"
                    : "border-blue-200 bg-blue-50"
                }`}
              >
                <Quote className="h-4 w-4 text-primary" />
                <span
                  className={`text-sm font-medium tracking-wider uppercase ${
                    isDark ? "text-primary" : "text-blue-700"
                  }`}
                >
                  {t("common.testimonials")}
                </span>
              </div>
              <h2
                className={`mx-auto mb-4 max-w-xl text-4xl font-normal lg:text-5xl ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {t("common.testimonialsTitle")}
              </h2>
              <p
                className={`mx-auto max-w-xl text-lg ${
                  isDark ? "text-white/60" : "text-slate-600"
                }`}
              >
                {t("common.testimonialsSubtitle")}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
              <button
                type="button"
                onClick={prevTestimonial}
                className={`flex h-10 w-10 shrink-0 items-center justify-center self-center rounded-full border backdrop-blur-sm transition-all duration-300 sm:h-11 sm:w-11 lg:h-12 lg:w-12 ${
                  isDark
                    ? "border-white/20 bg-white/10 hover:bg-white/20"
                    : "border-slate-300 bg-white/80 hover:bg-white"
                }`}
                aria-label={t("common.prevTestimonial")}
              >
                <ChevronLeft
                  className={`h-5 w-5 sm:h-6 sm:w-6 ${
                    isDark ? "text-white" : "text-slate-700"
                  }`}
                />
              </button>

              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-6 md:flex-row md:items-stretch">
                  <div className="relative w-full md:w-1/3">
                    <div className="relative h-72 overflow-hidden rounded-2xl">
                      <img
                        src={current.image}
                        alt={current.name}
                        className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-center py-4 md:w-2/3">
                    <Quote
                      className={`mb-4 h-7 w-7 opacity-50 ${
                        isDark ? "text-primary" : "text-blue-600"
                      }`}
                    />
                    <p
                      className={`text-lg leading-relaxed md:text-xl ${
                        isDark ? "text-white" : "text-slate-800"
                      }`}
                    >
                      {current.quote}
                    </p>
                    <div className="mt-6 flex items-center justify-between">
                      <div>
                        <p
                          className={`font-medium ${
                            isDark ? "text-white" : "text-slate-900"
                          }`}
                        >
                          {current.name}
                        </p>
                        <p
                          className={`text-sm ${
                            isDark ? "text-white/60" : "text-slate-500"
                          }`}
                        >
                          {current.role}, {current.company}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: current.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-primary text-primary"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex items-center justify-center gap-2">
                  {localizedTestimonials.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setTestimonialIndex(index)}
                      className={`rounded-full transition-all duration-300 ${
                        index === testimonialIndex
                          ? "w-6 bg-primary"
                          : `h-2 w-2 ${isDark ? "bg-white/30 hover:bg-white/50" : "bg-slate-400 hover:bg-slate-600"}`
                      }`}
                      style={{ height: index === testimonialIndex ? "0.5rem" : "0.5rem" }}
                      aria-label={t("common.goToTestimonial", { index: index + 1 })}
                    />
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={nextTestimonial}
                className={`flex h-10 w-10 shrink-0 items-center justify-center self-center rounded-full border backdrop-blur-sm transition-all duration-300 sm:h-11 sm:w-11 lg:h-12 lg:w-12 ${
                  isDark
                    ? "border-white/20 bg-white/10 hover:bg-white/20"
                    : "border-slate-300 bg-white/80 hover:bg-white"
                }`}
                aria-label={t("common.nextTestimonial")}
              >
                <ChevronRight
                  className={`h-5 w-5 sm:h-6 sm:w-6 ${
                    isDark ? "text-white" : "text-slate-700"
                  }`}
                />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section
        className={`relative overflow-hidden py-20 ${
          isDark ? "bg-slate-950" : "bg-slate-50"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0}>
            <div className="mb-12 text-center">
              <div
                className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 ${
                  isDark
                    ? "border-primary/30 bg-primary/10"
                    : "border-blue-200 bg-blue-50"
                }`}
              >
                <Briefcase className="h-4 w-4 text-primary" />
                <span
                  className={`text-sm font-medium tracking-wider uppercase ${
                    isDark ? "text-primary" : "text-blue-700"
                  }`}
                >
                  {t("common.myWork")}
                </span>
              </div>
              <h2
                className={`mx-auto mb-4 max-w-xl text-4xl font-normal lg:text-5xl ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {t("common.featuredProjects")}
              </h2>
              <p
                className={`mx-auto max-w-xl text-lg ${
                  isDark ? "text-white/60" : "text-slate-600"
                }`}
              >
                {t("common.featuredProjectsSubtitle")}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {localizedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} isDark={isDark} />
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="mt-12 flex justify-center">
              <Link
                to="/projects"
                className={`btn inline-flex items-center gap-2 rounded-full border px-10 py-4 text-base font-medium transition-all duration-300 sm:text-lg sm:px-12 ${
                  isDark
                    ? "border-white/20 text-white hover:bg-white/10"
                    : "border-slate-300 text-slate-900 hover:bg-slate-100"
                }`}
              >
                {t("common.viewAllProjects")}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <CalloutCard />
    </>
  );
};

export default HomePage;
