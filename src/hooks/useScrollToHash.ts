// src/hooks/useScrollToHash.ts
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToHash = (): void => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
};

export default useScrollToHash;
