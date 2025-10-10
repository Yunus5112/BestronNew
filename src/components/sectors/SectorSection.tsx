import { ReactNode } from "react";
import { Container } from "../ui/Container";
import { Colors } from "../lib/theme";

interface SectorSectionProps {
  children: ReactNode;
  className?: string;
}

export const SectorSection = ({ children, className = "" }: SectorSectionProps) => {
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

