import { ReactNode } from "react";
import { Container } from "../ui/Container";
import footerBackground from "../../assets/images/footerBackground";
import footerImage from "../../assets/footerImage";

interface FooterSectionProps {
  children: ReactNode;
}

export const FooterSection = ({ children }: FooterSectionProps) => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background gradients - full footer background */}
      <div
        className="absolute inset-0 -z-20 w-full h-full opacity-90"
        dangerouslySetInnerHTML={{ __html: footerBackground }}
        aria-hidden="true"
      />

      {/* Circuit board pattern - footer's bottom right corner */}
      <div
        className="absolute bottom-0 right-0 w-[205px] h-[345px] opacity-90 pointer-events-none -z-10"
        dangerouslySetInnerHTML={{ __html: footerImage }}
        aria-hidden="true"
      />
      
      <Container className="relative z-10 py-16 lg:py-20">
        {/* Main white container */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          {children}
        </div>
      </Container>
    </footer>
  );
};
