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
  
  // For the R&D image, we'll use the direct URL
  const rdImageUrl = new URL("../assets/images/rdImage.svg", import.meta.url).href;

  return (
    <ServicesSection title={t("services.title") || "Biz ne yapıyoruz"}>
      <ServicesGrid>
        {/* Big tall card on the left spanning 2 rows */}
        <ServiceCard
          iconSvg={rdIcon}
          title={t("services.items.r_and_d.title") ?? "Arge Ürün Geliştirme"}
          description={t("services.items.r_and_d.desc") ?? "Bestron Technology, fikirden prototipe, prototipten seri üretime kadar tüm süreçlerde yenilikçi çözümler sunar."}
          imageUrl={rdImageUrl}
          imageAlt="R&D Illustration"
          className="lg:row-span-2"
        />

        {/* Three small cards on the first row */}
        <ServiceCard
          iconSvg={managementIcon}
          title={t("services.items.production_management.title") ?? "Üretim & Süreç Yönetimi"}
          description={t("services.items.production_management.desc") ?? "Tasarımdan seri üretime kadar tüm süreçleri yönetir ve kalite, maliyet ile zamanı dengede tutarak verimli çözümler sunar."}
        />
        
        <ServiceCard
          iconSvg={sunIcon}
          title={t("services.items.web_mobile.title") ?? "Web Tasarım & Mobil Yazılım"}
          description={t("services.items.web_mobile.desc") ?? "Kullanıcı odaklı web ve mobil uygulamalar geliştirir, modern teknolojilerle güvenli, hızlı ve ölçeklenebilir çözümler sunar."}
        />
        
        <ServiceCard
          iconSvg={starIcon}
          title={t("services.items.ui_ux.title") ?? "UI/UX Tasarım"}
          description={t("services.items.ui_ux.desc") ?? "Kullanıcı deneyimini önceliklendiren tasarımlar ile etkileşimi artırır, sezgisel ve estetik arayüzler oluşturur."}
        />

        {/* Special wide card with logo */}
        <SpecialServiceCard
          iconSvg={tubitakLogo}
          title={t("services.items.public_grants.title") ?? "Kamu Destekleri & Proje Danışmanlığı"}
          description={t("services.items.public_grants.desc") ?? "TÜBİTAK, KOSGEB ve diğer kamu destekli projelerde danışmanlık sağlar; proje yazımı, bütçe hazırlığı süreçlerinde müşterilerimizin yanında yer alır."}
          logoSvg={teydepLogo}
        />

        <ServiceCard
          iconSvg={codeIcon}
          title={t("services.items.embedded_custom.title") ?? "Özel geliştirme & Gömülü Sistemler"}
          description={t("services.items.embedded_custom.desc") ?? "Gömülü sistemler ve özel geliştirmelerle, ürünlerinizi yüksek performans ve verimlilikle hayata geçiriyoruz."}
        />
      </ServicesGrid>
    </ServicesSection>
  );
};

export default Services;


