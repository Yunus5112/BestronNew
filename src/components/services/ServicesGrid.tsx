import type { ReactNode } from "react";

interface ServicesGridProps {
  children: ReactNode;
  className?: string;
}

export const ServicesGrid = ({ children, className = "" }: ServicesGridProps) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {children}
    </div>
  );
};
