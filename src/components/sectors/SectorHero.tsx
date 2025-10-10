import { ReactNode } from "react";
import { Colors, Typography } from "../lib/theme";

interface SectorHeroProps {
  title: string;
  description: string;
  backgroundImage: string;
  overlayImage: string;
}

export const SectorHero = ({ 
  title, 
  description, 
  backgroundImage, 
  overlayImage 
}: SectorHeroProps) => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        role="img"
        aria-label="Sectors background"
      />
      
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-blue-900/20 z-10" />

      {/* Left semi-transparent white overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent z-20" />

      {/* Right side image */}
      <div 
        className="absolute top-0 right-0 w-full md:w-2/3 h-full bg-cover bg-center bg-no-repeat z-5"
        style={{
          backgroundImage: `url(${overlayImage})`,
          filter: "sepia(0.3) saturate(1.5) hue-rotate(200deg) brightness(0.8)",
          maskImage: "linear-gradient(to left, black 70%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, black 70%, transparent 100%)"
        }}
        role="img"
        aria-label="Sectors overview"
      />

      {/* Content */}
      <div className="relative z-30 py-16 lg:py-20 min-h-screen flex items-center">
        <div className="max-w-4xl px-6 md:px-8 lg:px-16">
          <h1 
            className={`${Typography.sizes.h1} font-semibold leading-[1.2] mb-6 md:mb-8`}
            style={{ 
              fontFamily: Typography.fontFamily,
              color: Colors.primary
            }}
          >
            {title}
          </h1>

          <p 
            className={`${Typography.sizes.bodyLarge} leading-[1.5]`}
            style={{ 
              fontFamily: Typography.fontFamily,
              color: Colors.primary
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

