import { useT } from "../i18n/I18nProvider";
import { Footer } from "../components/Footer";
import { useAssetUrl } from "../hooks/useAssetUrl";
import kosgebAndTeydeb from "../assets/images/services/kosgebAndTeydeb";
import { SectorHero } from "../components/sectors/SectorHero";
import { ServiceSection } from "../components/services/ServiceSection";
import { ServiceContentBlock } from "../components/services/ServiceContentBlock";
import { ServiceList } from "../components/services/ServiceList";
import { ServiceNoteSection } from "../components/services/ServiceNoteSection";
import aboutBg from "../assets/images/about/aboutBg";

export const ServicesPage = () => {
  const t = useT();
  const { servicesImage } = useAssetUrl();

  return (
    <>
      {/* Hero Section */}
      <SectorHero
        title={t("servicesPage.mainTitle")}
        description={t("servicesPage.description")}
        backgroundImage={`data:image/svg+xml;utf8,${encodeURIComponent(aboutBg)}`}
        overlayImage={servicesImage("servicesPageImage.jpg")}
      />

      {/* R&D & Product Development Section */}
      <ServiceSection>
        <ServiceContentBlock
          title={t("servicesPage.rdSection.title")}
          intro={t("servicesPage.rdSection.intro")}
          conclusion={t("servicesPage.rdSection.conclusion")}
          image={servicesImage("servicesPageImage1.jpg")}
          imagePosition="right"
          imageHeight="h-[300px] md:h-[450px] lg:h-[400px]"
        >
          <ServiceList items={t<string[]>("servicesPage.rdSection.services")} />
        </ServiceContentBlock>
      </ServiceSection>

      {/* Manufacturing & Process Management Section */}
      <ServiceSection>
        <ServiceContentBlock
          title={t("servicesPage.manufacturingSection.title")}
          intro={t("servicesPage.manufacturingSection.intro")}
          image={servicesImage("servicesPageImage2.jpg")}
          imagePosition="left"
          imageHeight="h-[400px] md:h-[600px] lg:h-[750px]"
        >
          <ServiceList items={t<string[]>("servicesPage.manufacturingSection.services")} />
          <p 
            className="text-[16px] sm:text-[18px] leading-[1.5] mt-6"
            style={{ 
              fontFamily: "Inter, ui-sans-serif, system-ui",
              color: "#0C176C"
            }}
          >
            {t("servicesPage.manufacturingSection.conclusion")}
          </p>
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
          logoSvg={kosgebAndTeydeb}
          imagePosition="right"
        >
          <ServiceList items={t<string[]>("servicesPage.tubitakSection.services")} />
          <p 
            className="text-[16px] sm:text-[18px] leading-[1.5] mt-6"
            style={{ 
              fontFamily: "Inter, ui-sans-serif, system-ui",
              color: "#0C176C"
            }}
          >
            {t("servicesPage.tubitakSection.conclusion")}
          </p>
        </ServiceContentBlock>
      </ServiceSection>

      <Footer />
    </>
  );
};

export default ServicesPage;
