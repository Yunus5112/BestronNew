import { useT } from "../i18n/I18nProvider";
import { Container } from "../components/ui/Container";
import kosgebAndTeydeb from "../assets/images/services/kosgebAndTeydeb";

const assetUrl = (filename: string) => new URL(`../assets/images/services/${filename}`, import.meta.url).href;

export const ServicesPage = () => {
  const t = useT();

  return (
    <>
      {/* İlk bölüm - Arka plan görseli ile */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Arka plan görseli - aboutBg.png */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url(${assetUrl("../about/aboutBg.png")})`,
            filter: "sepia(0.3) saturate(1.5) hue-rotate(200deg) brightness(0.8)"
          }}
        />
        
        {/* Mavi overlay */}
        <div className="absolute inset-0 bg-blue-900/20 z-10" />

        {/* Sol tarafta yarı saydam beyaz overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent z-20" />

        {/* Sağ taraf - servicesPageImage.png (2/3) - Full Height with gradient mask */}
        <div 
          className="absolute top-0 right-0 w-2/3 h-full bg-cover bg-center bg-no-repeat z-5"
          style={{
            backgroundImage: `url(${assetUrl("servicesPageImage.png")})`,
            filter: "sepia(0.3) saturate(1.5) hue-rotate(200deg) brightness(0.8)",
            maskImage: "linear-gradient(to left, black 70%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to left, black 70%, transparent 100%)"
          }}
        />

        {/* Metin içeriği - Sol tarafta */}
        <div className="relative z-30 py-16 lg:py-20 min-h-screen flex items-center">
          <div className="max-w-4xl px-8 lg:px-16">
            {/* Ana başlık */}
            <h1 
              className="text-[40px] font-semibold leading-[1.2] mb-8 text-[#0C176C]"
              style={{ 
                fontFamily: "Inter, ui-sans-serif, system-ui"
              }}
            >
              {t("servicesPage.mainTitle")}
            </h1>

            {/* İlk paragraf */}
            <p 
              className="text-[24px] leading-[1.5] text-[#0C176C]"
              style={{ 
                fontFamily: "Inter, ui-sans-serif, system-ui"
              }}
            >
              {t("servicesPage.description")}
            </p>
          </div>
        </div>
      </section>

      {/* İkinci bölüm - R&D & Ürün Geliştirme */}
      <section className="py-4 lg:py-8" style={{ backgroundColor: '#F6F8FF' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Sol taraf - Metin içeriği (1/2) */}
            <div className="space-y-6">
              {/* Ana başlık */}
              <h2 
                className="text-[32px] font-semibold text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("servicesPage.rdSection.title")}
              </h2>

              {/* İlk paragraf */}
              <p 
                className="text-[18px] leading-[1.5] text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("servicesPage.rdSection.intro")}
              </p>

              {/* Hizmet listesi */}
              <ul className="space-y-3">
                {t<string[]>("servicesPage.rdSection.services").map((service: string, index: number) => (
                  <li 
                    key={index}
                    className="text-[18px] leading-[1.5] text-[#0C176C] flex items-start"
                    style={{ 
                      fontFamily: "Inter, ui-sans-serif, system-ui"
                    }}
                  >
                    <span className="w-2 h-2 bg-[#0C176C] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              {/* Son paragraf */}
              <p 
                className="text-[18px] leading-[1.5] text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("servicesPage.rdSection.conclusion")}
              </p>
            </div>

            {/* Sağ taraf - Görsel alanı (1/2) */}
            <div className="relative">
              <div 
                className="w-full h-[400px] lg:h-[500px] bg-cover bg-center bg-no-repeat rounded-2xl"
                style={{
                  backgroundImage: `url(${assetUrl("servicesPageImage1.png")})`,
                }}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Üçüncü bölüm - Üretim & Süreç Yönetimi */}
      <section className="py-4 lg:py-8" style={{ backgroundColor: '#F6F8FF' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Sol taraf - Görsel alanı (1/2) */}
            <div className="relative">
              <div 
                className="w-full h-[400px] lg:h-[750px] bg-cover bg-center bg-no-repeat rounded-2xl"
                style={{
                  backgroundImage: `url(${assetUrl("servicesPageImage2.png")})`
                }}
              />
            </div>

            {/* Sağ taraf - Metin içeriği (1/2) */}
            <div className="space-y-6">
              {/* Ana başlık */}
              <h2 
                className="text-[32px] font-semibold text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("servicesPage.manufacturingSection.title")}
              </h2>

              {/* İlk paragraf */}
              <p 
                className="text-[18px] leading-[1.5] text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("servicesPage.manufacturingSection.intro")}
              </p>

              {/* Hizmet listesi */}
              <ul className="space-y-3">
                {t<string[]>("servicesPage.manufacturingSection.services").map((service: string, index: number) => (
                  <li 
                    key={index}
                    className="text-[18px] leading-[1.5] text-[#0C176C] flex items-start"
                    style={{ 
                      fontFamily: "Inter, ui-sans-serif, system-ui"
                    }}
                  >
                    <span className="w-2 h-2 bg-[#0C176C] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              {/* Son paragraf */}
              <p 
                className="text-[18px] leading-[1.5] text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("servicesPage.manufacturingSection.conclusion")}
              </p>

              {/* Not bölümü */}
              <div className="space-y-4">
                <h3 
                  className="text-[18px] font-semibold text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("servicesPage.manufacturingSection.note.title")}
                </h3>
                
                <div className="space-y-4">
                  {t<Array<{title: string, description: string}>>("servicesPage.manufacturingSection.note.items").map((item, index) => (
                    <div key={index} className="space-y-2">
                      <h4 
                        className="text-[18px] font-semibold text-[#0C176C]"
                        style={{ 
                          fontFamily: "Inter, ui-sans-serif, system-ui"
                        }}
                      >
                        {item.title}
                      </h4>
                      <p 
                        className="text-[18px] leading-[1.5] text-[#0C176C]"
                        style={{ 
                          fontFamily: "Inter, ui-sans-serif, system-ui"
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Dördüncü bölüm - TÜBİTAK & Destek Hizmetleri */}
      <section className="py-4 lg:py-8" style={{ backgroundColor: '#F6F8FF' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Sol taraf - Metin içeriği (2/3) */}
            <div className="space-y-6">
              {/* Ana başlık */}
              <h2 
                className="text-[32px] font-semibold text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("servicesPage.tubitakSection.title")}
              </h2>

              {/* İlk paragraf */}
              <p 
                className="text-[18px] leading-[1.5] text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("servicesPage.tubitakSection.intro")}
              </p>

              {/* Hizmet listesi */}
              <ul className="space-y-3">
                {t<string[]>("servicesPage.tubitakSection.services").map((service: string, index: number) => (
                  <li 
                    key={index}
                    className="text-[18px] leading-[1.5] text-[#0C176C] flex items-start"
                    style={{ 
                      fontFamily: "Inter, ui-sans-serif, system-ui"
                    }}
                  >
                    <span className="w-2 h-2 bg-[#0C176C] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              {/* Son paragraf */}
              <p 
                className="text-[18px] leading-[1.5] text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("servicesPage.tubitakSection.conclusion")}
              </p>
            </div>

            {/* Sağ taraf - Logolar (1/3) */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div 
                  className="w-full h-auto flex items-center justify-center"
                  dangerouslySetInnerHTML={{ __html: kosgebAndTeydeb }}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ServicesPage;
