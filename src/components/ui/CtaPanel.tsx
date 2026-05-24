import type { PropsWithChildren } from "react";
import { useTheme } from "@/context/useTheme";

type CtaPanelProps = PropsWithChildren<{
  className?: string;
  isMounted?: boolean;
}>;

const CtaPanel = ({
  children,
  className = "",
  isMounted = true,
}: CtaPanelProps) => {
  const { isDark } = useTheme();

  return (
    <div
      className={`rounded-[32px] border p-10 text-center shadow-sm transition-all delay-300 duration-700 ease-out ${
        isDark
          ? "border-white/10 bg-primary/10 shadow-[0_20px_60px_rgba(59,130,246,0.15)]"
          : "border-slate-200/70 bg-white shadow-slate-200/60"
      } ${
        isMounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default CtaPanel;
