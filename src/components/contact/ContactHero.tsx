import { Colors, Typography } from "../lib/theme";

interface ContactHeroProps {
  title: string;
  subtitle: string;
  className?: string;
}

export const ContactHero = ({ 
  title, 
  subtitle, 
  className = "" 
}: ContactHeroProps) => {
  return (
    <div className={`flex items-start justify-start py-6 md:py-8 lg:py-12 ${className}`}>
      {/* Title and Description */}
      <div className="space-y-4">
        <h1 
          className="text-[24px] md:text-[36px] lg:text-[60px] font-semibold leading-[1.2]"
          style={{ 
            fontFamily: Typography.fontFamily,
            color: Colors.primary
          }}
        >
          {title}
        </h1>
        <p 
          className="text-[14px] md:text-[16px] lg:text-[20px] leading-[1.5]"
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
