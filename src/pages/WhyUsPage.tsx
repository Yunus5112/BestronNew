import { useT } from "../i18n/I18nProvider";
import { Footer } from "../components/Footer";
import { useAssetUrl } from "../hooks/useAssetUrl";
import { WhyUsHero } from "../components/whyUs/WhyUsHero";
import { WhyUsSection } from "../components/whyUs/WhyUsSection";
import { WhyUsTextSection } from "../components/whyUs/WhyUsTextSection";
import { WhyUsImageGrid } from "../components/whyUs/WhyUsImageGrid";
import { CompetencyItem } from "../components/whyUs/CompetencyItem";
import aboutBg from "../assets/images/about/aboutBg";

export const WhyUsPage = () => {
  const t = useT();
  const { whyUsImage } = useAssetUrl();

  return (
    <>
      {/* Hero Section */}
      <WhyUsHero
        title={t("whyUsPage.mainTitle")}
        description={t("whyUsPage.description")}
        backgroundImage={`data:image/svg+xml;utf8,${encodeURIComponent(aboutBg)}`}
        overlayImage={whyUsImage("whyUsPageImage.jpg")}
      />

      {/* Why Us Details Section */}
      <WhyUsSection useContainer={false}>
        <WhyUsTextSection
          title={t("whyUsSection.title")}
          paragraphs={[
            t("whyUsSection.paragraph1"),
            t("whyUsSection.paragraph2"),
            t("whyUsSection.paragraph3")
          ]}
        />
      </WhyUsSection>

      {/* Competencies Section */}
      <WhyUsSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          <WhyUsImageGrid 
            images={[
              {
                src: whyUsImage("whyUsPageImage1.jpg"),
                height: "h-[300px] md:h-[400px] lg:h-[450px]",
                alt: "Why us image 1"
              },
              {
                src: whyUsImage("whyUsPageImage2.jpg"),
                height: "h-[300px] md:h-[500px] lg:h-[550px]",
                alt: "Why us image 2"
              }
            ]} 
          />
          
          <div className="space-y-6 md:space-y-8">
            <h2 
              className="text-[32px] font-semibold"
              style={{ 
                fontFamily: "Inter, ui-sans-serif, system-ui",
                color: "#0C176C"
              }}
            >
              {t("competenciesSection.title")}
            </h2>

            <CompetencyItem
              title={t("competenciesSection.interdisciplinaryTeam.title")}
              description={t("competenciesSection.interdisciplinaryTeam.description")}
            />

            <CompetencyItem
              title={t("competenciesSection.benefits.title")}
              description={t("competenciesSection.benefits.description")}
            />

            <CompetencyItem
              title={t("competenciesSection.competencies.title")}
              description={t("competenciesSection.competencies.description")}
            />

            <CompetencyItem
              title={t("competenciesSection.technologyStack.title")}
              description={t("competenciesSection.technologyStack.description")}
            />

            <CompetencyItem
              title={t("competenciesSection.additionalAdvantages.title")}
              description={t("competenciesSection.additionalAdvantages.description")}
            />

            <CompetencyItem
              title={t("competenciesSection.technologyPartner.title")}
              description={t("competenciesSection.technologyPartner.description")}
              showBullet={false}
            />
          </div>
        </div>
      </WhyUsSection>

      <Footer />
    </>
  );
};

export default WhyUsPage;
