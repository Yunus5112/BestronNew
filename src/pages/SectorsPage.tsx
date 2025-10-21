import { useT } from "../i18n/I18nProvider";
import { Footer } from "../components/Footer";
import { useAssetUrl } from "../hooks/useAssetUrl";
import { SectorHero } from "../components/sectors/SectorHero";
import { SectorSection } from "../components/sectors/SectorSection";
import { SectorContentBlock } from "../components/sectors/SectorContentBlock";
import { SectorItem } from "../components/sectors/SectorItem";
import { SectorImageGrid } from "../components/sectors/SectorImageGrid";
import aboutBg from "../assets/images/about/aboutBg";

export const SectorsPage = () => {
  const t = useT();
  const { sectorsImage } = useAssetUrl();

  return (
    <>
      {/* Hero Section */}
      <SectorHero
        title={t("sectorsPage.mainTitle")}
        description={t("sectorsPage.description")}
        backgroundImage={`data:image/svg+xml;utf8,${encodeURIComponent(aboutBg)}`}
        overlayImage={sectorsImage("sectorsPageImage.jpg")}
      />

      {/* Automotive & Medical Sectors Section */}
      <SectorSection>
        <SectorContentBlock
          title={t("sectorsSection.title")}
          subtitle={t("sectorsSection.subtitle")}
          image={sectorsImage("sectorsPageImage1.jpg")}
          imagePosition="right"
        >
          <SectorItem
            title={t("sectorsSection.automotive.title")}
            description={t("sectorsSection.automotive.description")}
          />
          <SectorItem
            title={t("sectorsSection.medical.title")}
            description={t("sectorsSection.medical.description")}
          />
        </SectorContentBlock>
      </SectorSection>

      {/* Logistics, Energy & Other Sectors Section */}
      <SectorSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          <SectorImageGrid 
            images={[
              sectorsImage("sectorsPageImage2.jpg"),
              sectorsImage("sectorsPageImage3.jpg")
            ]}
            imageHeight="h-[180px] md:h-[220px] lg:h-[250px]"
          />
          <div className="space-y-6 md:space-y-8">
            <SectorItem
              title={t("sectorsSection.logistics.title")}
              description={t("sectorsSection.logistics.description")}
            />
            <SectorItem
              title={t("sectorsSection.energy.title")}
              description={t("sectorsSection.energy.description")}
            />
            <SectorItem
              title={t("sectorsSection.otherSectors.title")}
              description={t("sectorsSection.otherSectors.description")}
            />
          </div>
        </div>
      </SectorSection>

      <Footer />
    </>
  );
};

export default SectorsPage;
