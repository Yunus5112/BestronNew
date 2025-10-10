import { useT } from "../i18n/I18nProvider";
import { Container } from "../components/ui/Container";
import { Footer } from "../components/Footer";

const assetUrl = (filename: string) => new URL(`../assets/images/whyUs/${filename}`, import.meta.url).href;
const aboutAssetUrl = (filename: string) => new URL(`../assets/images/about/${filename}`, import.meta.url).href;

export const WhyUsPage = () => {
  const t = useT();

  return (
    <>
      {/* İlk bölüm - Arka plan görseli ile */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Ana arka plan görseli - aboutBg.png (sol 2/3) */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url(${aboutAssetUrl("aboutBg.png")})`
          }}
        />
        
        {/* Mavi overlay */}
        <div className="absolute inset-0 bg-blue-900/20 z-10" />

        {/* Sol tarafta yarı saydam beyaz overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent z-20" />

        {/* Sağ taraf resmi - whyUsPageImage.png (sağ 2/3) */}
        <div 
          className="absolute top-0 right-0 w-2/3 h-full bg-cover bg-center bg-no-repeat z-5"
          style={{
            backgroundImage: `url(${assetUrl("whyUsPageImage.png")})`,
            filter: "sepia(0.3) saturate(1.5) hue-rotate(200deg) brightness(0.8)",
            maskImage: "linear-gradient(to left, black 70%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to left, black 70%, transparent 100%)"
          }}
        />

        {/* Metin içeriği */}
        <div className="relative z-30 py-16 lg:py-20 min-h-screen flex items-center">
          <div className="max-w-4xl px-8 lg:px-16">
            {/* Ana başlık */}
            <h1 
              className="text-[40px] font-semibold leading-[1.2] mb-8 text-[#0C176C]"
              style={{ 
                fontFamily: "Inter, ui-sans-serif, system-ui"
              }}
            >
              {t("whyUsPage.mainTitle")}
            </h1>

            {/* İlk paragraf */}
            <p 
              className="text-[24px] leading-[1.5] text-[#0C176C]"
              style={{ 
                fontFamily: "Inter, ui-sans-serif, system-ui"
              }}
            >
              {t("whyUsPage.description")}
            </p>
          </div>
        </div>
      </section>

      {/* İkinci bölüm - Neden Biz Detay */}
      <section className="py-4 lg:py-8" style={{ backgroundColor: '#F6F8FF' }}>
        <div className="mx-auto space-y-12 px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Ana başlık */}
          <h2 
            className="text-[32px] font-semibold text-[#0C176C]"
            style={{ 
              fontFamily: "Inter, ui-sans-serif, system-ui"
            }}
          >
            {t("whyUsSection.title")}
          </h2>

          {/* İçerik paragrafları */}
          <div className="space-y-6">
            {/* İlk paragraf */}
            <p 
              className="text-[18px] leading-[1.5] text-[#0C176C]"
              style={{ 
                fontFamily: "Inter, ui-sans-serif, system-ui"
              }}
            >
              {t("whyUsSection.paragraph1")}
            </p>

            {/* İkinci paragraf */}
            <p 
              className="text-[18px] leading-[1.5] text-[#0C176C]"
              style={{ 
                fontFamily: "Inter, ui-sans-serif, system-ui"
              }}
            >
              {t("whyUsSection.paragraph2")}
            </p>

            {/* Üçüncü paragraf */}
            <p 
              className="text-[18px] leading-[1.5] text-[#0C176C]"
              style={{ 
                fontFamily: "Inter, ui-sans-serif, system-ui"
              }}
            >
              {t("whyUsSection.paragraph3")}
            </p>
          </div>
        </div>
      </section>

      {/* Üçüncü bölüm - Temel Yetkinliklerimiz ve Avantajlarımız */}
      <section className="py-4 lg:py-8" style={{ backgroundColor: '#F6F8FF' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Sol taraf - İki resim */}
            <div className="space-y-6">
              {/* İlk resim */}
              <div 
                className="w-full h-[300px] lg:h-[450px] bg-cover bg-center bg-no-repeat rounded-2xl"
                style={{
                  backgroundImage: `url(${assetUrl("whyUsPageImage1.png")})`,
                }}
              />
              
              {/* İkinci resim */}
              <div 
                className="w-full h-[300px] lg:h-[550px] bg-cover bg-center bg-no-repeat rounded-2xl"
                style={{
                  backgroundImage: `url(${assetUrl("whyUsPageImage2.png")})`,
                }}
              />
            </div>

            {/* Sağ taraf - Metin içeriği */}
            <div className="space-y-8">
              {/* Ana başlık */}
              <h2 
                className="text-[32px] font-semibold text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("competenciesSection.title")}
              </h2>

              {/* Disiplinler Arası Uzman Kadro */}
              <div className="space-y-4">
                <h3 
                  className="text-[24px] font-semibold text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  • {t("competenciesSection.interdisciplinaryTeam.title")}
                </h3>
                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("competenciesSection.interdisciplinaryTeam.description")}
                </p>
              </div>

              {/* Faydalar */}
              <div className="space-y-4">
                <h3 
                  className="text-[24px] font-semibold text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  • {t("competenciesSection.benefits.title")}
                </h3>
                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("competenciesSection.benefits.description")}
                </p>
              </div>

              {/* Yetkinlikler */}
              <div className="space-y-4">
                <h3 
                  className="text-[24px] font-semibold text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  • {t("competenciesSection.competencies.title")}
                </h3>
                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("competenciesSection.competencies.description")}
                </p>
              </div>

              {/* Teknik Yığın */}
              <div className="space-y-4">
                <h3 
                  className="text-[24px] font-semibold text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  • {t("competenciesSection.technologyStack.title")}
                </h3>
                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("competenciesSection.technologyStack.description")}
                </p>
              </div>

              {/* Ek Avantajlar */}
              <div className="space-y-4">
                <h3 
                  className="text-[24px] font-semibold text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  • {t("competenciesSection.additionalAdvantages.title")}
                </h3>
                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("competenciesSection.additionalAdvantages.description")}
                </p>
              </div>

              {/* Teknoloji Ortağınız */}
              <div className="space-y-4">
                <h3 
                  className="text-[24px] font-semibold text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("competenciesSection.technologyPartner.title")}
                </h3>
                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("competenciesSection.technologyPartner.description")}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default WhyUsPage;
