import { Container } from "./ui/Container";
import Button from "./ui/Button";
import { useT } from "../i18n/I18nProvider";

export const ServicesOverview = () => {
  const t = useT();
  const items = t("servicesOverview.items") as Array<{ title: string; desc: string }>;

  return (
    <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#F6F8FF' }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-[60px] leading-[1.2] font-semibold text-primary mb-4">{t("servicesOverview.title")}</h2>
            <p className="text-[#8987A1] text-[18px] leading-[1.5] max-w-xl">{t("servicesOverview.intro")}</p>
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white/70 shadow-sm p-6 max-w-xs">
              <h3 className="text-[28px] font-semibold text-primary mb-4">
                {t("servicesOverview.ctaTitleLine1")}<br />{t("servicesOverview.ctaTitleLine2")}
              </h3>
              <Button>{t("servicesOverview.ctaButton")}</Button>
            </div>
          </div>
          <div className="space-y-6">
            {items?.map((it, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white/70 shadow-sm p-6">
                <h3 className="text-[30px] font-semibold text-primary mb-2">{it.title}</h3>
                <p className="text-[#8987A1] text-[14px] leading-[1.5]">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesOverview;


