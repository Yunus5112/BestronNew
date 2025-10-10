import { ReactNode } from "react";
import { Container } from "../ui/Container";
import { Colors, Typography } from "../lib/theme";

interface ServicesSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const ServicesSection = ({ 
  title, 
  children, 
  className = "" 
}: ServicesSectionProps) => {
  return (
    <section 
      className={`pt-2 sm:pt-4 lg:pt-6 pb-14 sm:pb-20 lg:pb-24 ${className}`}
      style={{ backgroundColor: Colors.background }}
    >
      <Container>
        <h2 
          className="text-[60px] sm:text-[60px] lg:text-[60px] font-semibold leading-tight mb-4"
          style={{ 
            fontFamily: Typography.fontFamily,
            color: Colors.primary
          }}
        >
          {title}
        </h2>
        
        {children}
      </Container>
    </section>
  );
};
