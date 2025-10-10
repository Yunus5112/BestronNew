import { Colors, Typography } from "../lib/theme";

interface CompetencyItemProps {
  title: string;
  description: string;
  showBullet?: boolean;
  className?: string;
}

export const CompetencyItem = ({ 
  title, 
  description, 
  showBullet = true,
  className = "" 
}: CompetencyItemProps) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <h3 
        className={`${Typography.sizes.h3} font-semibold`}
        style={{ 
          fontFamily: Typography.fontFamily,
          color: Colors.primary
        }}
      >
        {showBullet ? "• " : ""}{title}
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
