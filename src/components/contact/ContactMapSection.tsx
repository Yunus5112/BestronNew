import { Container } from "../ui/Container";
import { GoogleMap } from "./GoogleMap";
import { ContactInfoCard } from "./ContactInfoCard";
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Sol taraf - Harita (1/2) */}
          <div className="overflow-hidden rounded-[15px]">
            <GoogleMap
              height="h-[250px] lg:h-[280px]"
              loading="lazy"
              onLoad={() => console.log('Map loaded successfully')}
              onError={(error) => console.error('Map loading error:', error)}
            />
          </div>

          {/* Sağ taraf - İletişim Bilgileri (1/2) */}
          <div className="flex flex-col justify-center">
            <ContactInfoCard />
          </div>
        </div>
      </Container>
    </section>
  );
};
