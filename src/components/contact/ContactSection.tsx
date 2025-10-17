import type { ReactNode } from "react";
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
      className={`relative py-8 lg:py-12 overflow-hidden ${className}`}
      style={{ backgroundColor: Colors.background }}
    >
      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        {children}
      </Container>
    </section>
  );
};
