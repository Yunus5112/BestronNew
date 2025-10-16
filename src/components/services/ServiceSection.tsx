import type { ReactNode } from "react";
import { Container } from "../ui/Container";
import { Colors } from "../lib/theme";

interface ServiceSectionProps {
  children: ReactNode;
  className?: string;
}

export const ServiceSection = ({ children, className = "" }: ServiceSectionProps) => {
  return (
    <section 
      className={`py-8 lg:py-12 ${className}`}
      style={{ backgroundColor: Colors.background }}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
};

