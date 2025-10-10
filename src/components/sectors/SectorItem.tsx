import { Colors, Typography } from "../lib/theme";

interface SectorItemProps {
  title: string;
  description: string;
  className?: string;
}

export const SectorItem = ({ title, description, className = "" }: SectorItemProps) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <h3 
        className={`${Typography.sizes.h3} font-semibold`}
        style={{ 
          fontFamily: Typography.fontFamily,
          color: Colors.primary
        }}
      >
        • {title}
      </h3>
      <p 
        className={`${Typography.sizes.body} leading-[1.5]`}
        style={{ 
          fontFamily: Typography.fontFamily,
          color: Colors.primary
        }}
      >
        {description}
      </p>
    </div>
  );
};

