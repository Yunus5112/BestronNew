import { Container } from "./ui/Container";
import { useT } from "../i18n/I18nProvider";

const assetUrl = (filename: string) => new URL(`../assets/images/about/${filename}`, import.meta.url).href;

export const About = () => {
  const t = useT();

  return (
    <>
      {/* İlk bölüm - Arka plan görseli ile */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Arka plan görseli - aboutBg.png */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url(${assetUrl("aboutBg.png")})`,
            filter: "sepia(0.3) saturate(1.5) hue-rotate(200deg) brightness(0.8)"
          }}
        />
        
        {/* Mavi overlay */}
        <div className="absolute inset-0 bg-blue-900/20 z-10" />

        {/* Sol tarafta yarı saydam beyaz overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent z-20" />

        {/* Sağ taraf - aboutPageImage.png (2/3) - Full Height with gradient mask */}
        <div 
          className="absolute top-0 right-0 w-2/3 h-full bg-cover bg-center bg-no-repeat z-5"
          style={{
            backgroundImage: `url(${assetUrl("aboutPageImage.png")})`,
            filter: "sepia(0.3) saturate(1.5) hue-rotate(200deg) brightness(0.8)",
            maskImage: "linear-gradient(to left, black 70%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to left, black 70%, transparent 100%)"
          }}
        />

        {/* Metin içeriği - Sol tarafta */}
        <div className="relative z-30 py-12 lg:py-20 min-h-screen flex items-center">
          <div className="max-w-4xl px-8 lg:px-16">
            {/* Ana başlık */}
            <h1 
              className="text-[40px] font-semibold leading-[1.2] mb-8 text-[#0C176C]"
              style={{ 
                fontFamily: "Inter, ui-sans-serif, system-ui"
              }}
            >
              {t("about.mainTitle")}
            </h1>

            {/* İlk paragraf */}
            <p 
              className="text-[24px] leading-[1.5] text-[#0C176C]"
              style={{ 
                fontFamily: "Inter, ui-sans-serif, system-ui"
              }}
            >
              {t("about.description1")}
            </p>
          </div>
        </div>
      </section>

      {/* İkinci bölüm - Ek text */}
      <section className="py-4 lg:py-8" style={{ backgroundColor: '#F6F8FF' }}>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="space-y-6">
              {/* Paragraf 1 */}
              <p 
                className="text-[18px] leading-[1.6] text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("about.description2")}
              </p>

              {/* Paragraf 2 */}
              <p 
                className="text-[18px] leading-[1.6] text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("about.description3")}
              </p>
            </div>
          </div>
      </section>

      {/* Üçüncü bölüm - İki sütunlu layout */}
      <section className="py-4 lg:py-8" style={{ backgroundColor: '#F6F8FF' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Sol taraf - Metin içeriği (1/2) */}
            <div className="space-y-6">
              {/* Ana başlık */}
              <p 
                className="text-[18px] leading-[1.5] text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("about.section2Title")}
              </p>

              {/* İlk paragraf */}
              <p 
                className="text-[18px] leading-[1.5] text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("about.section2Desc1")}
              </p>

              {/* Prensip başlığı */}
              <p 
                className="text-[18px] leading-[1.5] text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("about.section2Intro")}
              </p>

              {/* Prensip listesi */}
              <ul className="space-y-3">
                {t<string[]>("about.principles").map((principle: string, index: number) => (
                  <li 
                    key={index}
                    className="text-[18px] leading-[1.5] text-[#0C176C] flex items-start"
                    style={{ 
                      fontFamily: "Inter, ui-sans-serif, system-ui"
                    }}
                  >
                    <span className="w-2 h-2 bg-[#0C176C] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span>{principle}</span>
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
                {t("about.section2Desc2")}
              </p>
            </div>

            {/* Sağ taraf - Görsel alanı (1/2) */}
            <div className="relative">
              <div 
                className="w-full h-[500px] lg:h-[600px] bg-cover bg-center bg-no-repeat rounded-2xl"
                style={{
                  backgroundImage: `url(${assetUrl("aboutPageImage2.png")})`
                }}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Dördüncü bölüm - Vizyon ve Misyon */}
      <section className="py-4 lg:py-8" style={{ backgroundColor: '#F6F8FF' }}>
        <div className="mx-auto space-y-12 px-4 sm:px-6 lg:px-8 max-w-7xl">
            {/* Vizyon */}
            <div className="space-y-4">
              <h2 
                className="text-[32px] font-semibold text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("about.vision.title")}
              </h2>
              <p 
                className="text-[18px] leading-[1.6] text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("about.vision.text")}
              </p>
            </div>

            {/* Misyon */}
            <div className="space-y-4">
              <h2 
                className="text-[32px] font-semibold text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("about.mission.title")}
              </h2>
              <p 
                className="text-[18px] leading-[1.6] text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("about.mission.text")}
              </p>
            </div>
          </div>
      </section>

      {/* Beşinci bölüm - Takım */}
      <section className="pt-4 lg:pt-8" style={{ backgroundColor: '#F6F8FF' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Sol taraf - Görsel alanı (1/2) */}
            <div className="relative">
              <div 
                className="w-full h-[200px] lg:h-[300px] bg-cover bg-center bg-no-repeat rounded-2xl"
                style={{
                  backgroundImage: `url(${assetUrl("aboutPageImage3.png")})`
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
                {t("about.team.title")}
              </h2>

              {/* İlk paragraf */}
              <p 
                className="text-[18px] leading-[1.5] text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("about.team.text1")}
              </p>

              {/* İkinci paragraf */}
              <p 
                className="text-[18px] leading-[1.5] text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("about.team.text2")}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
