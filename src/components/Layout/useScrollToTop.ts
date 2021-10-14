import { useEffect } from "react";

const isBrowser =
  typeof window !== "undefined" && !navigator.userAgent.includes("jsdom");

const useScrollToTop = () => {
  useEffect(() => {
    if (isBrowser) {
      window.scrollTo({ top: 0 });
    }
  }, []);
};

export default useScrollToTop;
