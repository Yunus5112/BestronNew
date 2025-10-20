import { Colors, Typography } from "../lib/theme";

interface OverviewHeaderProps {
  title: string;
  intro: string;
}

export const OverviewHeader = ({ title, intro }: OverviewHeaderProps) => {
  return (
    <div>
      <h2 
        className="text-[24px] lg:text-[60px] leading-[1.2] font-semibold mb-4"
        style={{ 
          fontFamily: Typography.fontFamily,
          color: Colors.primary
        }}
      >
        {title}
      </h2>
      <p 
        className="text-[14px] lg:text-[18px] leading-[1.5] max-w-xl"
        style={{ 
          fontFamily: Typography.fontFamily,
          color: Colors.textSecondary
        }}
      >
        {intro}
      </p>
    </div>
  );
};
