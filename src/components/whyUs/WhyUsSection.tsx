import type { ReactNode } from "react";
import { Container } from "../ui/Container";
import { Colors } from "../lib/theme";

interface WhyUsSectionProps {
  children: ReactNode;
  className?: string;
  useContainer?: boolean;
}

export const WhyUsSection = ({ 
  children, 
  className = "", 
  useContainer = true 
}: WhyUsSectionProps) => {
  const content = useContainer ? (
    <Container>
      {children}
    </Container>
  ) : children;

  return (
    <section 
      className={`py-8 lg:py-12 ${className}`}
      style={{ backgroundColor: Colors.background }}
    >
      {content}
    </section>
  );
};
