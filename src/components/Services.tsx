import { useT } from "../i18n/I18nProvider";
import codeIcon from "../assets/images/codeIcon";
import starIcon from "../assets/images/starIcon";
import sunIcon from "../assets/images/sunIcon";
import managementIcon from "../assets/images/managementIcon";
import rdIcon from "../assets/images/rdIcon";
import tubitakLogo from "../assets/images/tubitakLogo";
import teydepLogo from "../assets/images/teydepLogo";
import { ServicesSection } from "./services/ServicesSection";
import { ServicesGrid } from "./services/ServicesGrid";
import { ServiceCard } from "./services/ServiceCard";
import { SpecialServiceCard } from "./services/SpecialServiceCard";

export const Services = () => {
  const t = useT();
  const desc = t("services.desc");
  
  // For the R&D image, we'll use the direct URL
  const rdImageUrl = new URL("../assets/images/rdImage.svg", import.meta.url).href;

  return (
    <ServicesSection title={t("services.title") || "Biz ne yapıyoruz"}>
      <ServicesGrid>
        {/* Big tall card on the left spanning 2 rows */}
        <ServiceCard
          iconSvg={rdIcon}
          title={t("services.items.r_and_d.title") ?? "Arge Ürün Geliştirme"}
          description={desc}
          imageUrl={rdImageUrl}
          imageAlt="R&D Illustration"
          className="lg:row-span-2"
        />

        {/* Three small cards on the first row */}
        <ServiceCard
          iconSvg={managementIcon}
          title={t("services.items.production_management.title") ?? "Üretim & Süreç Yönetimi"}
          description={desc}
        />
        
        <ServiceCard
          iconSvg={sunIcon}
          title={t("services.items.web_mobile.title") ?? "Web Tasarım & Mobil Yazılım"}
          description={desc}
        />
        
        <ServiceCard
          iconSvg={starIcon}
          title={t("services.items.ui_ux.title") ?? "UI/UX Tasarım"}
          description={desc}
        />

        {/* Special wide card with logo */}
        <SpecialServiceCard
          iconSvg={tubitakLogo}
          title={t("services.items.public_grants.title") ?? "Kamu Destekleri & Proje Danışmanlığı"}
          description={desc}
          logoSvg={teydepLogo}
        />

        <ServiceCard
          iconSvg={codeIcon}
          title={t("services.items.embedded_custom.title") ?? "Özel geliştirme & Gömülü Sistemler"}
          description={desc}
        />
      </ServicesGrid>
    </ServicesSection>
  );
};

export default Services;


