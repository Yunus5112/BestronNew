import { ReactNode } from "react";
import { Container } from "../ui/Container";
import { Colors } from "../lib/theme";

interface ProjectSectionProps {
  children: ReactNode;
  backgroundSvg?: string;
  className?: string;
}

export const ProjectSection = ({ 
  children, 
  backgroundSvg,
  className = "" 
}: ProjectSectionProps) => {
  return (
    <section 
      className={`relative overflow-hidden py-8 sm:py-10 lg:py-12 ${className}`}
      style={{ backgroundColor: Colors.background }}
    >
      {backgroundSvg && (
        <div 
          className="absolute left-1/2 -translate-x-1/2 top-4 -z-10 w-[680px] sm:w-[840px] lg:w-[980px] h-auto opacity-90 pointer-events-none"
          dangerouslySetInnerHTML={{ __html: backgroundSvg }}
          role="img"
          aria-label="Projects background decoration"
        />
      )}
      <Container>
        {children}
      </Container>
    </section>
  );
};