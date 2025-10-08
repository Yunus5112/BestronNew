import { Container } from "./ui/Container";
import { useT } from "../i18n/I18nProvider";

const assetUrl = (filename: string) => new URL(`../assets/images/${filename}`, import.meta.url).href;

export const Services = () => {
  const t = useT();
  const desc =
    "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.";

  return (
    <section className="pt-6 sm:pt-8 lg:pt-10 pb-14 sm:pb-20 lg:pb-24">
      <Container>
        <h2 className="text-[60px] sm:text-[60px] lg:text-[60px] font-semibold leading-tight text-primary mb-4">
          {t("services.title") || "Biz ne yapıyoruz"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Big tall card on the left spanning 2 rows */}
          <div className="rounded-2xl border border-slate-200 bg-white/70 shadow-sm p-6 lg:row-span-2">
            <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
              <img src={assetUrl("rdIcon.svg")} className="h-5 w-5" alt="" />
            </div>
            <h3 className="text-[20px] font-semibold text-primary mb-2">
              {t("services.items.r_and_d.title") ?? "Arge Ürün Geliştirme"}
            </h3>
            <p className="text-[14px] text-[#8987A1] leading-relaxed">{desc}</p>
            <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
              <img src={assetUrl("rdImage.svg")} className="w-full h-auto object-cover" alt="" />
            </div>
          </div>

          {/* Three small cards on the first row */}
          <div className="rounded-2xl border border-slate-200 bg-white/70 shadow-sm p-6">
            <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
              <img src={assetUrl("managementIcon.svg")} className="h-5 w-5" alt="" />
            </div>
            <h3 className="text-[20px] font-semibold text-primary mb-2">
              {t("services.items.production_management.title") ?? "Üretim & Süreç Yönetimi"}
            </h3>
            <p className="text-[14px] text-[#8987A1] leading-relaxed">{desc}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/70 shadow-sm p-6">
            <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
              <img src={assetUrl("sunIcon.svg")} className="h-5 w-5" alt="" />
            </div>
            <h3 className="text-[20px] font-semibold text-primary mb-2">
              {t("services.items.web_mobile.title") ?? "Web Tasarım & Mobil Yazılım"}
            </h3>
            <p className="text-[14px] text-[#8987A1] leading-relaxed">{desc}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/70 shadow-sm p-6">
            <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
              <img src={assetUrl("starIcon.svg")} className="h-5 w-5" alt="" />
            </div>
            <h3 className="text-[20px] font-semibold text-primary mb-2">
              {t("services.items.ui_ux.title") ?? "UI/UX Tasarım"}
            </h3>
            <p className="text-[14px] text-[#8987A1] leading-relaxed">{desc}</p>
          </div>

          {/* Second row on the right: one wide card + one small card */}
          <div className="rounded-2xl border border-slate-200 bg-white/70 shadow-sm p-6 lg:col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div>
                <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <img src={assetUrl("tubitakLogo.svg")} className="h-5 w-5" alt="TÜBİTAK" />
                </div>
                <h3 className="text-[20px] font-semibold text-primary mb-2">{t("services.items.public_grants.title") ?? "Kamu Destekleri & Proje Danışmanlığı"}</h3>
                <p className="text-[14px] text-[#8987A1] leading-relaxed">{desc}</p>
              </div>
              <div className="rounded-2xl bg-white/80 flex items-center justify-center p-6">
                <img src={assetUrl("teydepLogo.svg")} className="h-24 w-auto" alt="TEYDEB" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/70 shadow-sm p-6">
            <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
              <img src={assetUrl("codeIcon.svg")} className="h-5 w-5" alt="" />
            </div>
            <h3 className="text-[20px] font-semibold text-primary mb-2">
              {t("services.items.embedded_custom.title") ?? "Özel geliştirme & Gömülü Sistemler"}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;


