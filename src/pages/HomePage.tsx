import { Link } from "react-router";
import { useTheme } from "@/context/useTheme";
import FadeIn from "@/animations/FadeIn";
import heroImage from "@/assets/hero.png";

const STATS = [
  { value: "3+", label: "Years Experience" },
  { value: "15+", label: "Projects Completed" },
  { value: "10+", label: "Happy Clients" },
];

const HomePage = () => {
  const { isDark } = useTheme();

  return (
    <section className="flex min-h-[calc(100vh-9rem)] w-full items-center px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
        {/* Left Column — Content */}
        <FadeIn delay={100} duration={600}>
          <div className="max-w-xl space-y-6">
            {/* Greeting */}
            <p
              className={`text-sm font-semibold uppercase tracking-[0.3em] ${
                isDark ? "text-blue-300" : "text-blue-600"
              }`}
            >
              Hello, I'm
            </p>

            {/* Name */}
            <h1
              className={`text-4xl font-bold sm:text-5xl lg:text-6xl ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Dagim Tesfaye
            </h1>

            {/* Title */}
            <p
              className={`text-xl sm:text-2xl ${
                isDark ? "text-white/80" : "text-slate-700"
              }`}
            >
              Full-Stack Developer &amp; UI Engineer
            </p>

            {/* Description */}
            <p
              className={`max-w-2xl text-base leading-7 sm:text-lg ${
                isDark ? "text-white/60" : "text-slate-600"
              }`}
            >
              I build clean, performant, and accessible web applications with
              modern technologies. Passionate about turning complex problems
              into simple, elegant solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="btn btn-primary rounded-full px-6"
              >
                Get Started
              </Link>
              <Link
                to="/contact"
                className={`btn rounded-full border px-6 ${
                  isDark
                    ? "border-white/20 text-white hover:bg-white/10"
                    : "border-slate-300 text-slate-900 hover:bg-slate-100"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              {STATS.map((stat) => (
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

        {/* Right Column — Image */}
        <FadeIn delay={300} duration={600}>
          <div className="relative flex items-center justify-center lg:justify-start">

            {/* Image */}
            <div
              className="relative z-10 rounded-3xl border border-base-300 bg-base-100 p-2 shadow-xl"
            >
              <img
                src={heroImage}
                alt="Profile photo"
                className="h-auto w-full max-w-xs rounded-2xl object-cover lg:max-w-sm xl:max-w-md"
              />
              {/* Floating badge */}
              <div
                className={`float absolute -top-2 -right-2 z-20 rounded-xl px-4 py-2 text-sm font-medium shadow-lg ${
                  isDark
                    ? "border border-blue-500/30 bg-blue-500/20 text-blue-300"
                    : "border border-blue-200 bg-blue-50 text-blue-700"
                }`}
              >
                Open to Work
              </div>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HomePage;
