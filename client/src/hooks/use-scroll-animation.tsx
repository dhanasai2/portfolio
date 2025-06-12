import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "0px 0px -100px 0px",
    amount: threshold 
  });

  return { ref, isInView };
}

export function useActiveSection(sections: string[]) {
  const [activeSection, setActiveSection] = useState(sections[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: "-20% 0px -20% 0px"
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  return activeSection;
}
