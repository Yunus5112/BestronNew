import { Colors, Typography } from "../lib/theme";

interface AboutHeroProps {
  title: string;
  description: string;
  backgroundImage: string;
  overlayImage: string;
}

export const AboutHero = ({ 
  title, 
  description, 
  backgroundImage, 
  overlayImage 
}: AboutHeroProps) => {
  return (
    <section className="relative min-h-[60vh] lg:min-h-screen overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: `url(${backgroundImage})`
        }}
        role="img"
        aria-label="About background"
      />
 
      {/* Right side image */}
      <div 
        className="absolute top-0 right-0 w-2/3 lg:w-2/3 h-full bg-cover bg-center bg-no-repeat z-5"
        style={{
          backgroundImage: `url(${overlayImage})`,
          maskImage: "linear-gradient(to left, black 70%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, black 70%, transparent 100%)"
        }}
        role="img"
        aria-label="About overview"
      />

      {/* Content */}
      <div className="relative z-30 py-8 lg:py-20 min-h-[60vh] lg:min-h-screen flex items-center">
        <div className="w-full max-w-[90%] sm:max-w-[70%] lg:max-w-[50%] px-4 sm:px-6 lg:px-16">
          <h1 
            className="text-[20px] sm:text-[28px] md:text-[36px] lg:text-[56px] font-semibold leading-[1.2] mb-4 md:mb-8"
            style={{ 
              fontFamily: Typography.fontFamily,
              color: Colors.primary
            }}
          >
            {title}
          </h1>

          <p 
            className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] leading-[1.5]"
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
