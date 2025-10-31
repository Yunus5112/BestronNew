import { useT } from "../../i18n/I18nProvider";
import type { ProjectSectionConfig } from "../../data/projectSections";
import { Container } from "../ui/Container";
import { Colors } from "../lib/theme";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";

interface LazyProjectSectionProps extends ProjectSectionConfig {
  imageUrl: string;
}

export const LazyProjectSection = ({
  titleKey,
  sections,
  imageUrl,
  imagePosition,
  imageHeight = "h-[400px] md:h-[500px] lg:h-[600px]",
}: LazyProjectSectionProps) => {
  const t = useT();

  const contentBlock = (
    <div className="space-y-6">
      <Heading level="h2">{t(titleKey)}</Heading>

      {sections.map((section, sectionIndex) => (
        <div key={`section-${sectionIndex}`} className="space-y-4">
          {section.subtitleKey && (
            <Heading level="h3">{t(section.subtitleKey)}</Heading>
          )}

          {section.contentKeys.map((contentKey, contentIndex) => (
            <Text key={`content-${contentIndex}`}>
              {t(contentKey)}
            </Text>
          ))}
        </div>
      ))}
    </div>
  );

  const imageBlock = (
    <div className="relative">
      <div 
        className={`w-full ${imageHeight} bg-cover bg-center bg-no-repeat rounded-2xl`}
        style={{ backgroundImage: `url(${imageUrl})` }}
        role="img"
        aria-label="Project illustration"
      />
    </div>
  );

  return (
    <section 
      className="py-8 lg:py-12"
      style={{ backgroundColor: Colors.background }}
    >
      <Container>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {imagePosition === "left" ? (
            <>
              <div className="w-full lg:w-auto order-1 lg:order-1">{imageBlock}</div>
              <div className="w-full lg:w-auto order-2 lg:order-2">{contentBlock}</div>
            </>
          ) : (
            <>
              <div className="w-full lg:w-auto order-1 lg:order-2">{imageBlock}</div>
              <div className="w-full lg:w-auto order-2 lg:order-1">{contentBlock}</div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
};

export default LazyProjectSection;

