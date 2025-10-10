import { useT } from "../../i18n/I18nProvider";

interface ProjectSectionProps {
  titleKey: string;
  sections: Array<{
    subtitleKey?: string;
    contentKeys: string[];
  }>;
  imageUrl: string;
  imagePosition: 'left' | 'right';
  imageHeight?: string;
}

export const ProjectSection = ({
  titleKey,
  sections,
  imageUrl,
  imagePosition,
  imageHeight = 'lg:h-[700px]'
}: ProjectSectionProps) => {
  const t = useT();

  const imageElement = (
    <div className="relative">
      <div 
        className={`w-full h-[400px] ${imageHeight} bg-cover bg-center bg-no-repeat rounded-2xl`}
        style={{
          backgroundImage: `url(${imageUrl})`,
          filter: "sepia(0.1) saturate(1.2) hue-rotate(10deg) brightness(1.1)"
        }}
      />
    </div>
  );

  const contentElement = (
    <div className="space-y-8">
      <h2 
        className="text-[32px] font-semibold text-[#0C176C]"
        style={{ fontFamily: "Inter, ui-sans-serif, system-ui" }}
      >
        {t(titleKey)}
      </h2>

      {sections.map((section, index) => (
        <div key={index} className="space-y-4">
          {section.subtitleKey && (
            <h3 
              className="text-[24px] font-semibold text-[#0C176C]"
              style={{ fontFamily: "Inter, ui-sans-serif, system-ui" }}
            >
              {t(section.subtitleKey)}
            </h3>
          )}
          
          {section.contentKeys.map((contentKey, contentIndex) => (
            <p 
              key={contentIndex}
              className="text-[18px] leading-[1.5] text-[#0C176C]"
              style={{ fontFamily: "Inter, ui-sans-serif, system-ui" }}
            >
              {t(contentKey)}
            </p>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-4 lg:py-8" style={{ backgroundColor: '#F6F8FF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {imagePosition === 'left' ? (
            <>
              {imageElement}
              {contentElement}
            </>
          ) : (
            <>
              {contentElement}
              {imageElement}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
