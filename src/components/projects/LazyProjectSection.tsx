import { useT } from "../../i18n/I18nProvider";
import type { ProjectSectionConfig } from "../../data/projectSections";
import { Container } from "../ui/Container";
import { Colors, Typography } from "../lib/theme";

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
      <h2 
        className={`${Typography.sizes.h2} font-semibold`}
        style={{ 
          fontFamily: Typography.fontFamily,
          color: Colors.primary
        }}
      >
        {t(titleKey)}
      </h2>

      {sections.map((section, sectionIndex) => (
        <div key={`section-${sectionIndex}`} className="space-y-4">
          {section.subtitleKey && (
            <h3 
              className={`${Typography.sizes.h3} font-semibold`}
              style={{ 
                fontFamily: Typography.fontFamily,
                color: Colors.primary
              }}
            >
              {t(section.subtitleKey)}
            </h3>
          )}

          {section.contentKeys.map((contentKey, contentIndex) => (
            <p
              key={`content-${contentIndex}`}
              className={`${Typography.sizes.body} leading-[1.5]`}
              style={{ 
                fontFamily: Typography.fontFamily,
                color: Colors.primary
              }}
            >
              {t(contentKey)}
            </p>
          ))}
        </div>
      ))}
    </div>
  );

  const imageBlock = (
    <div className="relative">
      <div 
        className={`w-full ${imageHeight} bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg`}
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {imagePosition === "left" && imageBlock}
          {contentBlock}
          {imagePosition === "right" && imageBlock}
        </div>
      </Container>
    </section>
  );
};

export default LazyProjectSection;

