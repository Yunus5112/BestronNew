import { useCallback, useMemo, useState } from "react";

interface ProjectCarouselProps {
  images: string[];
  onNavigation?: (direction: "prev" | "next") => void;
  className?: string;
}

export const ProjectCarousel = ({ images, onNavigation, className = "" }: ProjectCarouselProps) => {
  const [idx, setIdx] = useState(0);
  const len = images.length;
  
  const at = useCallback((i: number) => images[((i % len) + len) % len], [images, len]);
  const prev = useMemo(() => at(idx - 1), [idx, at]);
  const current = useMemo(() => at(idx), [idx, at]);
  const next = useMemo(() => at(idx + 1), [idx, at]);

  const handleNavigation = useCallback((direction: "prev" | "next") => {
    if (direction === "prev") {
      setIdx((v) => v - 1);
    } else {
      setIdx((v) => v + 1);
    }
    onNavigation?.(direction);
  }, [onNavigation]);

  // Expose navigation functions for external control
  (window as any).projectCarouselNavigation = {
    prev: () => handleNavigation("prev"),
    next: () => handleNavigation("next")
  };

  return (
    <div className={`mt-10 sm:mt-12 lg:mt-14 ${className}`}>
      <div className="mx-auto max-w-6xl grid grid-cols-[.5fr_1fr_.5fr] items-center gap-6">
        <div className="rounded-2xl border border-slate-200 shadow bg-white overflow-hidden">
          <img 
            src={prev} 
            alt="Önceki proje" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="rounded-2xl border border-slate-200 shadow-lg bg-white overflow-hidden">
          <img 
            src={current} 
            alt="Güncel proje" 
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="rounded-2xl border border-slate-200 shadow bg-white overflow-hidden">
          <img 
            src={next} 
            alt="Sonraki proje" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
