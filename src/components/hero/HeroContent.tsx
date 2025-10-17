import type { ReactNode } from "react";
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
    <div className={`order-2 lg:order-1 w-full ${className}`}>
      <h1
        className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] leading-[1.24] font-semibold tracking-normal"
        style={{ 
          fontFamily: Typography.fontFamily,
          color: Colors.primary
        }}
      >
        {titleLead}{" "}
        <span className="font-bold">{titleEmphasis}</span>
      </h1>
      
      {children}
      
      <div className="mt-6 sm:mt-8 lg:mt-10">
        <Button onClick={onCtaClick}>
          {ctaText}
        </Button>
      </div>
    </div>
  );
};
