import { useTheme } from "@/context/useTheme";
import { useTranslation } from "@/i18n/useTranslation";
import FadeIn from "@/animations/FadeIn";
import GetInTouchButton from "@/components/ui/GetInTouchButton";

const CalloutCard = () => {
  const { isDark } = useTheme();
  const { t } = useTranslation();

  return (
    <section
      className={`relative overflow-hidden py-24 ${
        isDark ? "bg-slate-950" : "bg-slate-50"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${
            isDark ? "bg-primary/10" : "bg-blue-200/40"
          }`}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn delay={100} duration={600}>
          <div
            className={`relative grid gap-8 rounded-3xl border p-8 shadow-2xl transition-all duration-500 hover:shadow-3xl sm:p-12 lg:grid-cols-2 lg:gap-12 lg:p-16 ${
              isDark
                ? "border-white/10 bg-white/5 shadow-black/30 hover:border-primary/30 hover:shadow-primary/5"
                : "border-slate-200/70 bg-white shadow-slate-200/60 hover:border-primary/30 hover:shadow-primary/10"
            }`}
          >
            <div className="flex flex-col justify-center gap-4 text-center lg:text-left">
              <div
                className={`mx-auto h-2 w-2 rounded-full lg:mx-0 ${
                  isDark ? "bg-blue-400" : "bg-blue-500"
                }`}
              />
              <h2
                className={`text-3xl font-semibold sm:text-4xl ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {t("home.calloutTitle")}
              </h2>
              <p
                className={`max-w-xl text-base leading-7 sm:text-lg ${
                  isDark ? "text-white/60" : "text-slate-600"
                }`}
              >
                {t("home.calloutBody")}
              </p>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <GetInTouchButton
                variant="primary"
                className="px-10 py-4 text-base"
              />
            </div>

            <div
              className={`pointer-events-none absolute -top-px left-12 h-px w-32 bg-linear-to-r from-transparent ${
                isDark ? "via-blue-400/50 to-transparent" : "via-blue-500/40 to-transparent"
              }`}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CalloutCard;
