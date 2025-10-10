import { Colors, Typography } from "../lib/theme";

interface ContactHeroProps {
  title: string;
  subtitle: string;
  backgroundSvg: string;
  className?: string;
}

export const ContactHero = ({ 
  title, 
  subtitle, 
  backgroundSvg,
  className = "" 
}: ContactHeroProps) => {
  return (
    <div className={`relative flex items-start justify-start p-6 md:p-8 lg:p-12 ${className}`}>
      {/* Background SVG */}
      <div 
        className="absolute inset-0 w-full h-full opacity-10"
        dangerouslySetInnerHTML={{ __html: backgroundSvg }}
        role="img"
        aria-label="Contact page background decoration"
      />
      
      {/* Title and Description */}
      <div className="relative z-10 pt-6 md:pt-8 lg:pt-8 space-y-4">
        <h1 
          className="text-[40px] md:text-[50px] lg:text-[60px] font-semibold leading-[1.2]"
          style={{ 
            fontFamily: Typography.fontFamily,
            color: Colors.primary
          }}
        >
          {title}
        </h1>
        <p 
          className="text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5]"
          style={{ 
            fontFamily: Typography.fontFamily,
            color: Colors.primary
          }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};
