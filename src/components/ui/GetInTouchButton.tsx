import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/context/useTheme";
import { useTranslation } from "@/i18n/useTranslation";

type GetInTouchButtonProps = {
  variant?: "primary" | "outline";
  showArrow?: boolean;
  className?: string;
};

const GetInTouchButton = ({
  variant = "primary",
  showArrow = true,
  className = "",
}: GetInTouchButtonProps) => {
  const { isDark } = useTheme();
  const { t } = useTranslation();

  const variantClasses =
    variant === "primary"
      ? "btn btn-primary rounded-full px-8"
      : `btn rounded-full border px-8 py-3 ${
          isDark
            ? "border-white/20 text-white hover:bg-white/10"
            : "border-slate-300 text-slate-900 hover:bg-slate-100"
        }`;

  return (
    <Link
      to="/contact"
      className={`inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ${variantClasses} ${className}`}
    >
      {t("common.getInTouch")}
      {showArrow ? <ArrowRight className="h-4 w-4 shrink-0" /> : null}
    </Link>
  );
};

export default GetInTouchButton;
