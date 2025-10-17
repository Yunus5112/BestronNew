import { useState } from "react";
import { useT } from "../i18n/I18nProvider";
import { OverviewSection } from "./servicesOverview/OverviewSection";
import { OverviewHeader } from "./servicesOverview/OverviewHeader";
import { OverviewCTACard } from "./servicesOverview/OverviewCTACard";
import { OverviewItemsList } from "./servicesOverview/OverviewItemsList";
import { MeetingSchedulerModal } from "./meeting/MeetingSchedulerModal";

export const ServicesOverview = () => {
  const t = useT();
  const items = t("servicesOverview.items") as Array<{ title: string; desc: string }>;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <OverviewSection>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <OverviewHeader
              title={t("servicesOverview.title")}
              intro={t("servicesOverview.intro")}
            />
            
            <OverviewCTACard
              titleLine1={t("servicesOverview.ctaTitleLine1")}
              titleLine2={t("servicesOverview.ctaTitleLine2")}
              buttonText={t("servicesOverview.ctaButton")}
              onButtonClick={() => setIsModalOpen(true)}
            />
          </div>

          <div className="lg:col-span-3">
            <OverviewItemsList items={items} />
          </div>
        </div>
      </OverviewSection>

      <MeetingSchedulerModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ServicesOverview;


