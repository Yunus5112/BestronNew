import { Colors, Typography } from "../lib/theme";

interface WhyUsTextSectionProps {
  title: string;
  paragraphs: string[];
  className?: string;
}

export const WhyUsTextSection = ({ 
  title, 
  paragraphs, 
  className = "" 
}: WhyUsTextSectionProps) => {
  return (
    <div className={`mx-auto space-y-8 md:space-y-12 px-4 sm:px-6 lg:px-8 max-w-7xl ${className}`}>
      <h2 
        className={`${Typography.sizes.h2} font-semibold`}
        style={{ 
          fontFamily: Typography.fontFamily,
          color: Colors.primary
        }}
      >
        {title}
      </h2>

      <div className="space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p 
            key={index}
            className={`${Typography.sizes.body} leading-[1.5]`}
            style={{ 
              fontFamily: Typography.fontFamily,
              color: Colors.primary
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};
