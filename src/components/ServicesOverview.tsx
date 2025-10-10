import { useT } from "../i18n/I18nProvider";
import { OverviewSection } from "./servicesOverview/OverviewSection";
import { OverviewHeader } from "./servicesOverview/OverviewHeader";
import { OverviewCTACard } from "./servicesOverview/OverviewCTACard";
import { OverviewItemsList } from "./servicesOverview/OverviewItemsList";

export const ServicesOverview = () => {
  const t = useT();
  const items = t("servicesOverview.items") as Array<{ title: string; desc: string }>;

  const handleCtaClick = () => {
    // CTA button click handler
    console.log('Services overview CTA clicked');
  };

  return (
    <OverviewSection>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <OverviewHeader
            title={t("servicesOverview.title")}
            intro={t("servicesOverview.intro")}
          />
          
          <OverviewCTACard
            titleLine1={t("servicesOverview.ctaTitleLine1")}
            titleLine2={t("servicesOverview.ctaTitleLine2")}
            buttonText={t("servicesOverview.ctaButton")}
            onButtonClick={handleCtaClick}
          />
        </div>

        <OverviewItemsList items={items} />
      </div>
    </OverviewSection>
  );
};

export default ServicesOverview;


