import { Container } from "../ui/Container";
import { GoogleMap } from "./GoogleMap";
import { Colors } from "../lib/theme";

interface ContactMapSectionProps {
  className?: string;
}

export const ContactMapSection = ({ className = "" }: ContactMapSectionProps) => {
  return (
    <section 
      className={`py-8 lg:py-12 ${className}`} 
      style={{ backgroundColor: Colors.background }}
    >
      <Container>
        <div className="overflow-hidden rounded-[15px]">
          <GoogleMap
            height="h-[250px] lg:h-[280px]"
            loading="lazy"
            onLoad={() => console.log('Map loaded successfully')}
            onError={(error) => console.error('Map loading error:', error)}
          />
        </div>
      </Container>
    </section>
  );
};
