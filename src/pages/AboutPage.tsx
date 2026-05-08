import { useTheme } from "@/context/useTheme";

export default function AboutPage() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen ${isDark ? "bg-[#070525]" : "bg-slate-50"} ${isDark ? "text-white" : "text-slate-900"} px-6 lg:px-20 py-10`}
    >
      {/* Top Badge */}
      <div className="mb-8">
        <div
          className={`shimmer inline-flex items-center gap-2 rounded-full border px-4 py-2 ${isDark ? "border-primary/30 bg-gradient-to-r from-primary/10 via-primary/15 to-primary/10" : "border-blue-200 bg-gradient-to-r from-blue-50 via-white to-blue-50"}`}
        >
          <span
            className={`flex h-4 w-4 items-center justify-center text-sm ${isDark ? "text-primary" : "text-blue-600"}`}
          >
            ✨
          </span>
          <span
            className={`text-sm font-medium ${isDark ? "text-primary" : "text-blue-700"}`}
          >
            Full-Stack Developer
          </span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* LEFT SIDE */}
        <div>
          <h1
            className={`text-4xl font-normal lg:text-5xl leading-tight mb-8 ${isDark ? "text-white" : "text-slate-900"}`}
          >
            Crafting Digital
            <br />
            Experiences That Matter
          </h1>

          <div
            className={`space-y-6 text-lg leading-relaxed ${isDark ? "text-white/60" : "text-slate-600"}`}
          >
            <p>
              I'm a passionate React developer with over 3 years of experience
              building scalable and performant web applications.
            </p>

            <p>
              I specialize in creating intuitive user interfaces using React,
              Next.js, TypeScript, Tailwind CSS, and DaisyUI.
            </p>

            <p>
              I focus on writing clean, maintainable code and creating smooth
              user experiences with modern web technologies.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-14">
            <div
              className={`border-l-4 pl-4 ${isDark ? "border-white" : "border-slate-900"}`}
            >
              <h2
                className={`text-4xl font-normal lg:text-5xl ${isDark ? "text-white" : "text-slate-900"}`}
              >
                45+
              </h2>

              <p
                className={`mt-2 ${isDark ? "text-white/60" : "text-slate-600"}`}
              >
                Happy Clients
              </p>
            </div>

            <div
              className={`border-l-4 pl-4 ${isDark ? "border-white" : "border-slate-900"}`}
            >
              <h2
                className={`text-4xl font-normal lg:text-5xl ${isDark ? "text-white" : "text-slate-900"}`}
              >
                2.5K+
              </h2>

              <p
                className={`mt-2 ${isDark ? "text-white/60" : "text-slate-600"}`}
              >
                Code Commits
              </p>
            </div>

            <div
              className={`border-l-4 pl-4 ${isDark ? "border-white" : "border-slate-900"}`}
            >
              <h2
                className={`text-4xl font-normal lg:text-5xl ${isDark ? "text-white" : "text-slate-900"}`}
              >
                500+
              </h2>

              <p
                className={`mt-2 ${isDark ? "text-white/60" : "text-slate-600"}`}
              >
                GitHub Stars
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {/* Big Card */}
          <div
            className={`group relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 ${isDark ? "border-white/10 bg-white/5 hover:bg-white/[0.07]" : "border-slate-200 bg-white shadow-sm hover:bg-slate-50"}`}
          >
            <h2
              className={`card-title text-2xl ${isDark ? "text-white" : "text-slate-900"}`}
            >
              Expertise
            </h2>

            <p className={`${isDark ? "text-white/60" : "text-slate-600"}`}>
              Specialized in building scalable web applications with modern
              frontend technologies and best practices.
            </p>
          </div>

          {/* Small Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div
              className={`group relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 ${isDark ? "border-white/10 bg-white/5 hover:bg-white/[0.07]" : "border-slate-200 bg-white shadow-sm hover:bg-slate-50"}`}
            >
              <h2
                className={`card-title ${isDark ? "text-white" : "text-slate-900"}`}
              >
                Clean Code
              </h2>

              <p className={`${isDark ? "text-white/60" : "text-slate-600"}`}>
                Writing maintainable and scalable applications.
              </p>
            </div>

            <div
              className={`group relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 ${isDark ? "border-white/10 bg-white/5 hover:bg-white/[0.07]" : "border-slate-200 bg-white shadow-sm hover:bg-slate-50"}`}
            >
              <h2
                className={`card-title ${isDark ? "text-white" : "text-slate-900"}`}
              >
                Performance
              </h2>

              <p className={`${isDark ? "text-white/60" : "text-slate-600"}`}>
                Optimizing applications for speed and efficiency.
              </p>
            </div>
          </div>

          {/* Bottom Stats Card */}
          <div
            className={`group relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 ${isDark ? "border-white/10 bg-white/5 hover:bg-white/[0.07]" : "border-slate-200 bg-white shadow-sm hover:bg-slate-50"}`}
          >
            <div className="grid grid-cols-3 text-center">
              <div>
                <h2
                  className={`text-4xl font-normal lg:text-5xl ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  100%
                </h2>

                <p
                  className={`${isDark ? "text-white/60" : "text-slate-600"}`}
                >
                  Client Satisfaction
                </p>
              </div>

              <div>
                <h2
                  className={`text-4xl font-normal lg:text-5xl ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  24/7
                </h2>

                <p
                  className={`${isDark ? "text-white/60" : "text-slate-600"}`}
                >
                  Support
                </p>
              </div>

              <div>
                <h2
                  className={`text-4xl font-normal lg:text-5xl ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  Fast
                </h2>

                <p
                  className={`${isDark ? "text-white/60" : "text-slate-600"}`}
                >
                  Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
