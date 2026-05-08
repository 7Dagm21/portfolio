import { useEffect, useState } from "react";
import { useTheme } from "@/context/useTheme";

const services = [
  {
    title: "UI / UX Design",
    description: "Clean, responsive layouts that feel polished on desktop and mobile.",
    details: ["Wireframes & visual systems", "Mobile-first responsive design", "Micro interactions"],
    icon: "🎨",
  },
  {
    title: "Frontend Development",
    description: "Build modern web experiences using React, TypeScript, and modern tooling.",
    details: ["React + TypeScript", "Component architecture", "Performance optimized"],
    icon: "⚛️",
  },
  {
    title: "Performance Optimization",
    description: "Improve load speed, accessibility, and user experience.",
    details: ["Load speed improvements", "SEO optimization", "Accessibility compliance"],
    icon: "⚡",
  },
  {
    title: "Landing Page Creation",
    description: "Create high-converting landing pages with clear messaging.",
    details: ["Conversion-focused design", "Brand alignment", "Fast deployment"],
    icon: "🚀",
  },
];

const ServicesPage = () => {
  const { isDark } = useTheme();
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const pageClasses = isDark
    ? "relative overflow-hidden bg-slate-950 py-20 text-slate-100"
    : "relative overflow-hidden bg-slate-50 py-20 text-slate-900";

  const textMuted = isDark ? "text-white/60" : "text-slate-600";
  const titleText = isDark ? "text-white" : "text-slate-900";

  return (
    <section id="services" className={pageClasses}>
      <div className="services-grid-overlay pointer-events-none absolute inset-0 overflow-hidden opacity-40" />
       <div className="pointer-events-none absolute inset-0 overflow-hidden">
         <div
           className={`float absolute left-0 top-1/4 h-96 w-96 rounded-full blur-3xl ${isDark ? "bg-primary/10 opacity-50" : "bg-blue-200/40 opacity-60"}`}
         />
         <div
           className={`float-slow absolute bottom-1/4 right-0 h-96 w-96 rounded-full blur-3xl ${isDark ? "bg-primary/10 opacity-50" : "bg-violet-200/40 opacity-60"}`}
         />
       </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10">
        <div
          className={`mb-16 text-center transition-all duration-700 ease-out ${
            isMounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
           <div
             className={`shimmer mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 ${isDark ? "border-primary/30 bg-gradient-to-r from-primary/10 via-primary/15 to-primary/10" : "border-blue-200 bg-gradient-to-r from-blue-50 via-white to-blue-50"}`}
           >
            <span
              className={`flex h-4 w-4 items-center justify-center text-sm ${isDark ? "text-primary" : "text-blue-600"}`}
            >
              ✦
            </span>
            <span
              className={`text-sm font-medium ${isDark ? "text-primary" : "text-blue-700"}`}
            >
              Services
            </span>
          </div>

          <h2 className={`mb-4 text-4xl font-normal lg:text-5xl ${titleText}`}>
            What I can do for your next project
          </h2>
          <p className={`mx-auto max-w-2xl text-lg ${textMuted}`}>
            From polished interface design to fast frontend implementation, I deliver user-focused solutions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <button
              key={service.title}
              onClick={() => setSelectedService(selectedService === index ? null : index)}
              className={`services-card-hover group relative rounded-2xl border p-6 text-left transition-all duration-300 ${
                selectedService === index
                  ? isDark
                    ? "border-primary/60 bg-primary/10 shadow-lg shadow-primary/10"
                    : "border-blue-300 bg-blue-50 shadow-lg shadow-blue-100"
                  : isDark
                    ? "border-white/10 bg-white/5 hover:border-primary/30 hover:bg-white/[0.07] hover:-translate-y-1"
                    : "border-slate-200 bg-white hover:border-primary/30 hover:bg-slate-50 hover:-translate-y-1 hover:shadow-lg"
              }`}
              style={{
                transitionDelay: `${index * 80}ms`,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl text-xl transition-all duration-300 ${
                    selectedService === index
                      ? isDark
                        ? "bg-primary/20 scale-110"
                        : "bg-primary/10 scale-110"
                      : isDark
                        ? "bg-white/10"
                        : "bg-slate-100"
                  }`}
                >
                  {service.icon}
                </div>
                <div
                  className={`h-6 w-1 rounded-full transition-all duration-300 ${
                    selectedService === index
                      ? "bg-primary scale-110"
                      : "bg-primary/30"
                  }`}
                />
              </div>

              <h3 className={`text-lg font-semibold mb-2 ${titleText}`}>
                {service.title}
              </h3>
              <p className={`text-sm leading-6 ${textMuted}`}>
                {service.description}
              </p>

              <div
                className={`mt-4 overflow-hidden transition-all duration-300 ${
                  selectedService === index ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 pt-2 border-t border-white/10">
                  {service.details.map((detail, detailIndex) => (
                    <li
                      key={detail}
                      className="flex items-center gap-2 text-sm"
                      style={{
                        transitionDelay: `${detailIndex * 50}ms`,
                      }}
                    >
                      <span
                        className={`inline-flex h-4 w-4 items-center justify-center rounded-full text-xs font-semibold ${
                          isDark ? "bg-primary/20 text-primary" : "bg-primary/10 text-primary"
                        }`}
                      >
                        ✓
                      </span>
                      <span className={textMuted}>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </button>
          ))}
        </div>

        <div
          className={`mt-16 rounded-[32px] border p-10 text-center shadow-sm transition-all delay-300 duration-700 ease-out ${
            isDark
              ? "border-white/10 bg-primary/10 shadow-[0_20px_60px_rgba(59,130,246,0.15)]"
              : "border-slate-200 bg-blue-50 shadow-[0_20px_60px_rgba(59,130,246,0.12)]"
          } ${isMounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <h2 className={`text-3xl font-semibold sm:text-4xl ${titleText}`}>
            Ready to start your project?
          </h2>
          <p className={`mx-auto mt-4 max-w-2xl text-base leading-7 sm:text-lg ${textMuted}`}>
            Let's discuss how we can bring your ideas to life with quality and speed.
          </p>
          <p className={`mt-6 text-sm font-medium uppercase tracking-[0.35em] ${isDark ? "text-primary" : "text-blue-700"}`}>
            Get in touch
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;