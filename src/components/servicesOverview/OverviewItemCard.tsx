import { Colors, Typography } from "../lib/theme";

interface OverviewItemCardProps {
  title: string;
  description: string;
}

export const OverviewItemCard = ({ title, description }: OverviewItemCardProps) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 shadow-sm p-6">
      <h3 
        className="text-[30px] font-semibold mb-2"
        style={{ 
          fontFamily: Typography.fontFamily,
          color: Colors.primary
        }}
      >
        {title}
      </h3>
      <p 
        className="text-[14px] leading-[1.5]"
        style={{ 
          fontFamily: Typography.fontFamily,
          color: Colors.textSecondary
        }}
      >
        {description}
      </p>
    </div>
  );
};
