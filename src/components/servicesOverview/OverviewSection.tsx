import { ReactNode } from "react";
import { Container } from "../ui/Container";
import { Colors } from "../lib/theme";

interface OverviewSectionProps {
  children: ReactNode;
  className?: string;
}

export const OverviewSection = ({ children, className = "" }: OverviewSectionProps) => {
  return (
    <section 
      className={`py-12 sm:py-16 lg:py-20 ${className}`}
      style={{ backgroundColor: Colors.background }}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
};
