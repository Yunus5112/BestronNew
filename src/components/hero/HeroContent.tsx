import { ReactNode } from "react";
import { Colors, Typography } from "../lib/theme";
import Button from "../ui/Button";

interface HeroContentProps {
  titleLead: string;
  titleEmphasis: string;
  ctaText: string;
  onCtaClick?: () => void;
  children?: ReactNode;
  className?: string;
}

export const HeroContent = ({ 
  titleLead, 
  titleEmphasis, 
  ctaText,
  onCtaClick,
  children,
  className = "" 
}: HeroContentProps) => {
  return (
    <div className={`order-2 lg:order-1 ${className}`}>
      <h1
        className="text-[40px] sm:text-[48px] lg:text-[60px] leading-[1.24] font-semibold tracking-normal"
        style={{ 
          fontFamily: Typography.fontFamily,
          color: Colors.primary
        }}
      >
        {titleLead}{" "}
        <span className="font-bold">{titleEmphasis}</span>
      </h1>
      
      {children}
      
      <div className="mt-10">
        <Button onClick={onCtaClick}>
          {ctaText}
        </Button>
      </div>
    </div>
  );
};
