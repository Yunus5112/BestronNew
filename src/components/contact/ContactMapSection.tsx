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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Sol taraf - Harita (2/3) */}
          <div className="lg:col-span-2">
            <GoogleMap
              height="h-[400px] lg:h-[500px]"
              loading="lazy"
              onLoad={() => console.log('Map loaded successfully')}
              onError={(error) => console.error('Map loading error:', error)}
            />
          </div>

          {/* Sağ taraf - İletişim Bilgileri (1/3) */}
          <div className="flex flex-col justify-center">
            <ContactInfoCard />
          </div>
        </div>
      </Container>
    </section>
  );
};
