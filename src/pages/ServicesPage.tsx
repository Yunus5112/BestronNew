import { useT } from "../i18n/I18nProvider";
import { Footer } from "../components/Footer";
import { useAssetUrl } from "../hooks/useAssetUrl";
import kosgebAndTeydeb from "../assets/images/services/kosgebAndTeydeb";
import { SectorHero } from "../components/sectors/SectorHero";
import { ServiceSection } from "../components/services/ServiceSection";
import { ServiceContentBlock } from "../components/services/ServiceContentBlock";
import { ServiceList } from "../components/services/ServiceList";
import { ServiceNoteSection } from "../components/services/ServiceNoteSection";

export const ServicesPage = () => {
  const t = useT();
  const { servicesImage, aboutImage } = useAssetUrl();

  return (
    <>
      {/* Hero Section */}
      <SectorHero
        title={t("servicesPage.mainTitle")}
        description={t("servicesPage.description")}
        backgroundImage={aboutImage("aboutBg.png")}
        overlayImage={servicesImage("servicesPageImage.png")}
      />

      {/* R&D & Product Development Section */}
      <ServiceSection>
        <ServiceContentBlock
          title={t("servicesPage.rdSection.title")}
          intro={t("servicesPage.rdSection.intro")}
          conclusion={t("servicesPage.rdSection.conclusion")}
          image={servicesImage("servicesPageImage1.png")}
          imagePosition="right"
        >
          <ServiceList items={t<string[]>("servicesPage.rdSection.services")} />
        </ServiceContentBlock>
      </ServiceSection>

      {/* Manufacturing & Process Management Section */}
      <ServiceSection>
        <ServiceContentBlock
          title={t("servicesPage.manufacturingSection.title")}
          intro={t("servicesPage.manufacturingSection.intro")}
          conclusion={t("servicesPage.manufacturingSection.conclusion")}
          image={servicesImage("servicesPageImage2.png")}
          imagePosition="left"
          imageHeight="h-[400px] md:h-[600px] lg:h-[750px]"
        >
          <ServiceList items={t<string[]>("servicesPage.manufacturingSection.services")} />
          <ServiceNoteSection
            title={t("servicesPage.manufacturingSection.note.title")}
            items={t<Array<{title: string, description: string}>>("servicesPage.manufacturingSection.note.items")}
          />
        </ServiceContentBlock>
      </ServiceSection>

      {/* TÜBİTAK & Support Services Section */}
      <ServiceSection>
        <ServiceContentBlock
          title={t("servicesPage.tubitakSection.title")}
          intro={t("servicesPage.tubitakSection.intro")}
          conclusion={t("servicesPage.tubitakSection.conclusion")}
          logoSvg={kosgebAndTeydeb}
          imagePosition="right"
        >
          <ServiceList items={t<string[]>("servicesPage.tubitakSection.services")} />
        </ServiceContentBlock>
      </ServiceSection>

      <Footer />
    </>
  );
};

export default ServicesPage;
