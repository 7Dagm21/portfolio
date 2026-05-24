import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { useTheme } from "@/context/useTheme";
import { useTranslation } from "@/i18n/useTranslation";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const { isDark } = useTheme();
  const { t } = useTranslation();

  const contactChannels = useMemo(
    () => [
      {
        title: t("contact.emailTitle"),
        value: "dagti@gmail.com",
        href: "mailto:dagti@gmail.com",
        description: t("contact.emailDesc"),
      },
      {
        title: t("contact.linkedinTitle"),
        value: "linkedin.com/in/dagti",
        href: "https://www.linkedin.com/in/dagti",
        description: t("contact.linkedinDesc"),
      },
      {
        title: t("contact.githubTitle"),
        value: "github.com/dagti",
        href: "https://github.com/dagti",
        description: t("contact.githubDesc"),
      },
    ],
    [t],
  );

  const pageClasses = isDark
    ? "relative overflow-hidden bg-slate-950 py-20 text-slate-100"
    : "relative overflow-hidden bg-slate-50 py-20 text-slate-900";

  const primaryButtonClasses = `btn rounded-full border px-8 py-3 font-medium transition-all duration-300 ${
    isDark
      ? "border-white/20 text-white hover:bg-white/10"
      : "border-slate-300 text-slate-900 hover:bg-slate-100"
  }`;

  const cardClasses = isDark
    ? "group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-primary/30"
    : "group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/30";

  const panelClasses = isDark
    ? "rounded-2xl border border-white/10 bg-white/5 p-6"
    : "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm";

  const titleText = isDark ? "text-white" : "text-slate-900";
  const mutedText = isDark ? "text-white/60" : "text-slate-600";
  const softText = isDark ? "text-white/50" : "text-slate-500";
  const dividerClass = isDark ? "border-white/10" : "border-slate-200";
  const labelClass = isDark ? "text-white/80" : "text-slate-700";
  const inputClasses = isDark
    ? "w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-primary/50"
    : "w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-primary/50 focus:bg-white";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const project = String(formData.get("project") ?? "").trim();
    const details = String(formData.get("details") ?? "").trim();

    const subject = encodeURIComponent(
      t("contact.mailSubject", {
        name: name || t("contact.mailVisitor"),
      }),
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project: ${project}`,
        "",
        t("contact.mailDetails"),
        details,
      ].join("\n"),
    );

    window.location.href = `mailto:dagti@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const clearSubmittedState = () => {
    if (submitted) {
      setSubmitted(false);
    }
  };

  return (
    <section id="contact" className={pageClasses}>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`float absolute left-0 top-1/4 h-96 w-96 rounded-full blur-3xl ${
            isDark ? "bg-primary/10 opacity-50" : "bg-blue-200/40 opacity-60"
          }`}
        />
        <div
          className={`float-slow absolute bottom-1/4 right-0 h-96 w-96 rounded-full blur-3xl ${
            isDark ? "bg-primary/10 opacity-50" : "bg-violet-200/40 opacity-60"
          }`}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="mb-16 text-center">
          <div
            className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 ${isDark ? "border-primary/30 bg-primary/10" : "border-blue-200 bg-blue-50"}`}
          >
            <span
              aria-hidden="true"
              className={`text-sm ${isDark ? "text-primary" : "text-blue-600"}`}
            >
              *
            </span>
            <span
              className={`text-sm font-medium ${isDark ? "text-primary" : "text-blue-700"}`}
            >
              {t("common.getInTouch")}
            </span>
          </div>
          <h1 className={`mb-4 text-4xl font-normal lg:text-5xl ${titleText}`}>
            {t("contact.title")}
          </h1>
          <p className={`mx-auto max-w-2xl text-lg ${mutedText}`}>
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className={`${cardClasses} lg:col-span-3`}>
            <div
              className={`mb-6 flex items-center gap-3 border-b pb-4 ${dividerClass}`}
            >
              <div className="h-8 w-1 rounded-full bg-linear-to-b from-primary/30 to-primary/10" />
              <h2 className={`text-xl font-medium ${titleText}`}>
                {t("contact.formTitle")}
              </h2>
            </div>

            <p id="contact-form-help" className={`mb-5 text-sm ${mutedText}`}>
              {t("contact.formHint")}
            </p>

            <form
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              onSubmit={handleSubmit}
              onChange={clearSubmittedState}
              aria-describedby="contact-form-help"
            >
              <label className="form-control sm:col-span-1">
                <span className={`mb-2 text-sm font-medium ${labelClass}`}>
                  {t("contact.nameLabel")}
                </span>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder={t("contact.namePlaceholder")}
                  className={inputClasses}
                />
              </label>

              <label className="form-control sm:col-span-1">
                <span className={`mb-2 text-sm font-medium ${labelClass}`}>
                  {t("contact.emailLabel")}
                </span>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder={t("contact.emailPlaceholder")}
                  className={inputClasses}
                />
              </label>

              <label className="form-control sm:col-span-2">
                <span className={`mb-2 text-sm font-medium ${labelClass}`}>
                  {t("contact.projectLabel")}
                </span>
                <input
                  id="contact-project"
                  name="project"
                  type="text"
                  required
                  placeholder={t("contact.projectPlaceholder")}
                  className={inputClasses}
                />
              </label>

              <label className="form-control sm:col-span-2">
                <span className={`mb-2 text-sm font-medium ${labelClass}`}>
                  {t("contact.detailsLabel")}
                </span>
                <textarea
                  id="contact-details"
                  name="details"
                  required
                  rows={5}
                  placeholder={t("contact.detailsPlaceholder")}
                  className={inputClasses}
                />
              </label>

              <div className="mt-2 flex flex-wrap items-center gap-3 sm:col-span-2">
                <button
                  type="submit"
                  className={primaryButtonClasses}
                >
                  {submitted ? t("contact.messageSent") : t("contact.sendMessage")}
                </button>
                <span className={`text-sm ${softText}`}>
                  {t("contact.responseTime")}
                </span>
              </div>
            </form>

            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className={`mt-5 rounded-xl border px-4 py-3 text-sm ${isDark ? "border-primary/30 bg-primary/10 text-primary" : "border-blue-200 bg-blue-50 text-blue-700"}`}
              >
                {t("contact.successMessage")}
              </div>
            ) : null}

            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-primary/0 to-primary/5 opacity-0 transition-all duration-300 group-hover:opacity-100" />
          </div>

          <aside className="space-y-8 lg:col-span-2">
            <div className={cardClasses}>
              <div
                className={`mb-6 flex items-center gap-3 border-b pb-4 ${dividerClass}`}
              >
                <div className="h-8 w-1 rounded-full bg-linear-to-b from-primary/30 to-primary/10" />
                <h2 className={`text-xl font-medium ${titleText}`}>
                  {t("contact.channelsTitle")}
                </h2>
              </div>

              <div className="space-y-3">
                {contactChannels.map((channel) => (
                  <a
                    key={channel.href}
                    href={channel.href}
                    target={
                      channel.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      channel.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`block rounded-xl border p-3 transition hover:border-primary/40 ${isDark ? "border-white/10 bg-white/5 hover:bg-white/10" : "border-slate-200 bg-slate-50 hover:bg-slate-100"}`}
                  >
                    <p
                      className={`text-sm font-medium ${isDark ? "text-primary" : "text-blue-700"}`}
                    >
                      {channel.title}
                    </p>
                    <p className={`break-all text-sm ${titleText}`}>
                      {channel.value}
                    </p>
                    <p className={`mt-1 text-xs ${softText}`}>
                      {channel.description}
                      {channel.href.startsWith("http")
                        ? t("common.opensNewTab")
                        : ""}
                    </p>
                  </a>
                ))}
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-primary/0 to-primary/5 opacity-0 transition-all duration-300 group-hover:opacity-100" />
            </div>

            <div className={panelClasses}>
              <h2 className={`mb-3 text-xl font-medium ${titleText}`}>
                {t("contact.availabilityTitle")}
              </h2>
              <p className={`text-sm ${mutedText}`}>
                {t("contact.availabilityBody")}
              </p>
              <div
                className={`mt-4 inline-flex rounded-full border px-3 py-1 text-xs font-medium ${isDark ? "border-primary/40 bg-primary/10 text-primary" : "border-blue-200 bg-blue-50 text-blue-700"}`}
              >
                {t("contact.nextSlot")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
