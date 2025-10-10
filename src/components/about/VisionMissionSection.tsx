import { Colors, Typography } from "../lib/theme";

interface VisionMissionItemProps {
  title: string;
  text: string;
  className?: string;
}

const VisionMissionItem = ({ title, text, className = "" }: VisionMissionItemProps) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <h2 
        className={`${Typography.sizes.h2} font-semibold`}
        style={{ 
          fontFamily: Typography.fontFamily,
          color: Colors.primary
        }}
      >
        {title}
      </h2>
      <p 
        className={`${Typography.sizes.body} leading-[1.6]`}
        style={{ 
          fontFamily: Typography.fontFamily,
          color: Colors.primary
        }}
      >
        {text}
      </p>
    </div>
  );
};

interface VisionMissionSectionProps {
  vision: {
    title: string;
    text: string;
  };
  mission: {
    title: string;
    text: string;
  };
  className?: string;
}

export const VisionMissionSection = ({ 
  vision, 
  mission, 
  className = "" 
}: VisionMissionSectionProps) => {
  return (
    <div className={`mx-auto space-y-12 px-4 sm:px-6 lg:px-8 max-w-7xl ${className}`}>
      <VisionMissionItem 
        title={vision.title}
        text={vision.text}
      />
      
      <VisionMissionItem 
        title={mission.title}
        text={mission.text}
      />
    </div>
  );
};
