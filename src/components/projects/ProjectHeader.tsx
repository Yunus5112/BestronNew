import type { ReactNode } from "react";
import { Colors, Typography } from "../lib/theme";

interface ProjectHeaderProps {
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
}

export const ProjectHeader = ({ 
  title, 
  description, 
  children,
  className = "" 
}: ProjectHeaderProps) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  const [prevArrow, nextArrow] = childrenArray;

  return (
    <>
      <div className={`mb-6 sm:mb-8 flex items-center justify-between ${className}`}>
        <div className="flex-1 flex justify-start">
          {prevArrow}
        </div>
        
        <h2 
          className={`${Typography.sizes.h1} leading-[1.2] font-semibold text-center flex-1`}
          style={{ 
            fontFamily: Typography.fontFamily,
            color: Colors.primary
          }}
        >
          {title}
        </h2>
        
        <div className="flex-1 flex justify-end">
          {nextArrow}
        </div>
      </div>

      <p 
        className="text-center max-w-4xl mx-auto"
        style={{ 
          fontFamily: Typography.fontFamily,
          color: Colors.textSecondary,
          fontSize: Typography.sizes.body
        }}
      >
        {description}
      </p>
    </>
  );
};
