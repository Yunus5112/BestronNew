import type { ReactNode } from "react";
import { Container } from "../ui/Container";

interface HeroSectionProps {
  children: ReactNode;
  backgroundSvg?: string;
  className?: string;
}

export const HeroSection = ({ 
  children, 
  backgroundSvg,
  className = "" 
}: HeroSectionProps) => {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      {backgroundSvg && (
        <div 
          className="absolute inset-0 -z-10 w-full h-full object-cover"
          dangerouslySetInnerHTML={{ __html: backgroundSvg }}
          role="img"
          aria-label="Hero background"
        />
      )}
      
      {/* Top fade to blend with header */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-10 sm:h-12 bg-gradient-to-b from-white/60 to-transparent" />
      
      <Container className="relative grid grid-cols-2 gap-4 sm:gap-6 lg:gap-10 items-center pt-6 sm:pt-8 lg:pt-10 pb-2 sm:pb-4 lg:pb-6">
        {children}
      </Container>
      
      {/* Bottom fade to blend into services */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
};
