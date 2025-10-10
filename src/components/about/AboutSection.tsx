import { ReactNode } from "react";
import { Container } from "../ui/Container";
import { Colors } from "../lib/theme";

interface AboutSectionProps {
  children: ReactNode;
  className?: string;
  useContainer?: boolean;
  paddingTop?: string;
}

export const AboutSection = ({ 
  children, 
  className = "", 
  useContainer = true,
  paddingTop = "py-8 lg:py-12"
}: AboutSectionProps) => {
  const content = useContainer ? (
    <Container>
      {children}
    </Container>
  ) : children;

  return (
    <section 
      className={`${paddingTop} ${className}`}
      style={{ backgroundColor: Colors.background }}
    >
      {content}
    </section>
  );
};
