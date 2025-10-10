import type { ReactNode } from "react";
import { useT } from "../../i18n/I18nProvider";
import { Container } from "../ui/Container";
import { Colors, Typography } from "../lib/theme";
import type { ProjectSectionConfig } from "../../data/projectSections";

interface ProjectSectionProps extends Partial<ProjectSectionConfig> {
  children?: ReactNode;
  imageUrl?: string;
  backgroundSvg?: string;
  className?: string;
}

export const ProjectSection = ({ 
  children,
  titleKey,
  sections,
  imageUrl,
  imagePosition = "right",
  imageHeight = "lg:h-[600px]",
  backgroundSvg,
  className = "" 
}: ProjectSectionProps) => {
  const t = useT();

  return (
    <section 
      className={`relative overflow-hidden py-8 sm:py-10 lg:py-12 ${className}`}
      style={{ backgroundColor: Colors.background }}
    >
      {backgroundSvg && (
        <div 
          className="absolute left-1/2 -translate-x-1/2 top-4 -z-10 w-[680px] sm:w-[840px] lg:w-[980px] h-auto opacity-90 pointer-events-none"
          dangerouslySetInnerHTML={{ __html: backgroundSvg }}
          role="img"
          aria-label="Projects background decoration"
        />
      )}
      <Container>
        {children ? (
          // HomePage için - children render et
          children
        ) : (
          // ProjectsPage için - content render et
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image */}
            {imageUrl && (
              <div className={`${imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className={`overflow-hidden rounded-2xl border border-slate-200 ${imageHeight}`}>
                  <img 
                    src={imageUrl} 
                    alt={titleKey ? t(titleKey) : "Project image"}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            {/* Content */}
            <div className={`${imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="space-y-8">
                {/* Main Title */}
                {titleKey && (
                  <h2 
                    className={`${Typography.sizes.h2} font-semibold`}
                    style={{ 
                      fontFamily: Typography.fontFamily,
                      color: Colors.primary
                    }}
                  >
                    {t(titleKey)}
                  </h2>
                )}

                {/* Sections */}
                {sections?.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="space-y-6">
                    {/* Subtitle */}
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

                    {/* Content */}
                    {section.contentKeys.map((contentKey, contentIndex) => (
                      <p 
                        key={contentIndex}
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
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};