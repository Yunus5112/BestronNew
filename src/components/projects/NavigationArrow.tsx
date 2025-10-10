import { Colors } from "../lib/theme";

interface NavigationArrowProps {
  direction: "prev" | "next";
  onClick: () => void;
  className?: string;
}

export const NavigationArrow = ({ direction, onClick, className = "" }: NavigationArrowProps) => {
  const isPrev = direction === "prev";
  const label = isPrev ? "Önceki" : "Sonraki";
  const arrowPath = isPrev 
    ? "M15 6l-6 6 6 6" 
    : "M9 6l6 6-6 6";

  return (
    <button
      type="button"
      aria-label={label}
      className={`h-11 w-11 rounded-full bg-white/80 shadow flex items-center justify-center hover:bg-white transition-colors ${className}`}
      onClick={onClick}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path 
          d={arrowPath} 
          stroke={Colors.primary}
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
