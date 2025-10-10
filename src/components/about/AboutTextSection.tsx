import { Colors, Typography } from "../lib/theme";

interface AboutTextSectionProps {
  paragraphs: string[];
  className?: string;
}

export const AboutTextSection = ({ 
  paragraphs, 
  className = "" 
}: AboutTextSectionProps) => {
  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl ${className}`}>
      <div className="space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p 
            key={index}
            className={`${Typography.sizes.body} leading-[1.6]`}
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
