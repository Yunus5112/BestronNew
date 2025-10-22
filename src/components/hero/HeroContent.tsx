import type { ReactNode } from "react";
import { Colors, Typography } from "../lib/theme";

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
  children,
  className = "" 
}: HeroContentProps) => {
  return (
    <div className={`order-1 w-full ${className}`}>
      <h1
        className="text-[20px] sm:text-[28px] md:text-[36px] lg:text-[56px] leading-[1.24] font-semibold tracking-normal"
        style={{ 
          fontFamily: Typography.fontFamily,
          color: Colors.primary
        }}
      >
        {titleLead}{" "}
        <span className="font-bold">{titleEmphasis}</span>
      </h1>
      
      {children}
      
      {/* <div className="mt-4 sm:mt-6 lg:mt-10">
        <Button onClick={onCtaClick}>
          {ctaText}
        </Button>
      </div> */}
    </div>
  );
};
