import { useT } from "../../i18n/I18nProvider";
import { Colors, Typography } from "../lib/theme";

interface ProjectHeroProps {
  titleKey: string;
  descriptionKey: string;
  backgroundImageUrl: string;
  overlayImageUrl: string;
}

export const ProjectHero = ({
  titleKey,
  descriptionKey,
  backgroundImageUrl,
  overlayImageUrl,
}: ProjectHeroProps) => {
  const t = useT();

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        role="img"
        aria-label="Projects background"
      />
      
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-blue-900/20 z-10" />

      {/* Left semi-transparent white overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent z-20" />

      {/* Right side image */}
      <div 
        className="absolute top-0 right-0 w-full md:w-2/3 h-full bg-cover bg-center bg-no-repeat z-5"
        style={{
          backgroundImage: `url(${overlayImageUrl})`,
          filter: "sepia(0.3) saturate(1.5) hue-rotate(200deg) brightness(0.8)",
          maskImage: "linear-gradient(to left, black 70%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, black 70%, transparent 100%)"
        }}
        role="img"
        aria-label="Projects overview"
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
            {t(titleKey)}
          </h1>

          <p 
            className={`${Typography.sizes.bodyLarge} leading-[1.5]`}
            style={{ 
              fontFamily: Typography.fontFamily,
              color: Colors.primary
            }}
          >
            {t(descriptionKey)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;

