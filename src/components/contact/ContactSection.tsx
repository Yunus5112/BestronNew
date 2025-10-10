import { ReactNode } from "react";
import { Container } from "../ui/Container";
import { Colors } from "../lib/theme";

interface ContactSectionProps {
  children: ReactNode;
  className?: string;
}

export const ContactSection = ({ 
  children, 
  className = "" 
}: ContactSectionProps) => {
  return (
    <section 
      className={`py-8 lg:py-12 ${className}`}
      style={{ backgroundColor: Colors.background }}
    >
      <Container className="grid grid-cols-1 lg:grid-cols-2">
        {children}
      </Container>
    </section>
  );
};
