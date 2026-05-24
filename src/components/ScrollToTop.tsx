import { useEffect } from "react";
import { useLocation } from "react-router";

/** Jump to top on route change (instant — avoids smooth-scroll from prior position). */
export function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    scrollToTop();
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
