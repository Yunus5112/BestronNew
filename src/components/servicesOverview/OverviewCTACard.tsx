import { Colors, Typography } from "../lib/theme";
import Button from "../ui/Button";

interface OverviewCTACardProps {
  titleLine1: string;
  titleLine2: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export const OverviewCTACard = ({ 
  titleLine1, 
  titleLine2, 
  buttonText,
  onButtonClick 
}: OverviewCTACardProps) => {
  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      console.log('CTA button clicked');
    }
  };

  return (
    <div className="mt-8 rounded-2xl border border-slate-200 bg-white/70 shadow-sm p-6 max-w-xs">
      <h3 
        className="text-[28px] font-semibold mb-4"
        style={{ 
          fontFamily: Typography.fontFamily,
          color: Colors.primary
        }}
      >
        {titleLine1}<br />{titleLine2}
      </h3>
      <Button onClick={handleClick}>{buttonText}</Button>
    </div>
  );
};
