import { useT } from "../i18n/I18nProvider";
import { Container } from "../components/ui/Container";
import { Footer } from "../components/Footer";

const assetUrl = (filename: string) => new URL(`../assets/images/projects/${filename}`, import.meta.url).href;
const aboutAssetUrl = (filename: string) => new URL(`../assets/images/about/${filename}`, import.meta.url).href;

export const ProjectsPage = () => {
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

        {/* Sağ taraf resmi - projectsPageImage.png (sağ 2/3) */}
        <div 
          className="absolute top-0 right-0 w-2/3 h-full bg-cover bg-center bg-no-repeat z-5"
          style={{
            backgroundImage: `url(${assetUrl("projectsPageImage.png")})`,
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
              {t("projectsPage.mainTitle")}
            </h1>

            {/* İlk paragraf */}
            <p 
              className="text-[24px] leading-[1.5] text-[#0C176C]"
              style={{ 
                fontFamily: "Inter, ui-sans-serif, system-ui"
              }}
            >
              {t("projectsPage.description")}
            </p>
          </div>
        </div>
      </section>

      {/* İkinci bölüm - Elektronik ve Gömülü Sistemler */}
      <section className="py-4 lg:py-8" style={{ backgroundColor: '#F6F8FF' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Sol taraf - Metin içeriği (1/2) */}
            <div className="space-y-8">
              {/* Ana başlık */}
              <h2 
                className="text-[32px] font-semibold text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("projectsPage.electronicsSection.title")}
              </h2>

              {/* Telemetri Cihazları */}
              <div className="space-y-4">
                <h3 
                  className="text-[24px] font-semibold text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.telemetry.title")}
                </h3>
                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.telemetry.description")}
                </p>
              </div>

              {/* Araç Takip Sistemleri */}
              <div className="space-y-4">
                <h3 
                  className="text-[24px] font-semibold text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.vehicleTracking.title")}
                </h3>
                
                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.vehicleTracking.description")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.vehicleTracking.details")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.vehicleTracking.benefits")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.vehicleTracking.features")}
                </p>
              </div>
            </div>

            {/* Sağ taraf - Görsel alanı (1/2) */}
            <div className="relative">
              <div 
                className="w-full h-[400px] lg:h-[700px] bg-cover bg-center bg-no-repeat rounded-2xl"
                style={{
                  backgroundImage: `url(${assetUrl("projectsPageImage1.png")})`,
                  filter: "sepia(0.1) saturate(1.2) hue-rotate(10deg) brightness(1.1)"
                }}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Üçüncü bölüm - Motosiklet Takip Cihazı */}
      <section className="py-4 lg:py-8" style={{ backgroundColor: '#F6F8FF' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Sol taraf - Görsel alanı (1/2) */}
            <div className="relative">
              <div 
                className="w-full h-[400px] lg:h-[500px] bg-cover bg-center bg-no-repeat rounded-2xl"
                style={{
                  backgroundImage: `url(${assetUrl("projectsPageImage2.png")})`,
                  filter: "sepia(0.1) saturate(1.2) hue-rotate(10deg) brightness(1.1)"
                }}
              />
            </div>

            {/* Sağ taraf - Metin içeriği (1/2) */}
            <div className="space-y-8">
              {/* Ana başlık */}
              <h2 
                className="text-[32px] font-semibold text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("projectsPage.electronicsSection.motorcycleTracking.title")}
              </h2>

              {/* Açıklama */}
              <p 
                className="text-[18px] leading-[1.5] text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("projectsPage.electronicsSection.motorcycleTracking.description")}
              </p>

              {/* Uygulama alanları */}
              <p 
                className="text-[18px] leading-[1.5] text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("projectsPage.electronicsSection.motorcycleTracking.applications")}
              </p>

              {/* Özellikler */}
              <p 
                className="text-[18px] leading-[1.5] text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("projectsPage.electronicsSection.motorcycleTracking.features")}
              </p>

              {/* Gelişmiş özellikler */}
              <p 
                className="text-[18px] leading-[1.5] text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("projectsPage.electronicsSection.motorcycleTracking.advancedFeatures")}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Dördüncü bölüm - Isı Zinciri Takip ve Takograf/Taksimetre Sistemleri */}
      <section className="py-4 lg:py-8" style={{ backgroundColor: '#F6F8FF' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Sol taraf - Metin içeriği (1/2) */}
            <div className="space-y-8">
              {/* Isı Zinciri Takip Sistemleri */}
              <div className="space-y-4">
                <h2 
                  className="text-[32px] font-semibold text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.coldChainTracking.title")}
                </h2>
                
                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.coldChainTracking.description")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.coldChainTracking.details")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.coldChainTracking.benefits")}
                </p>
              </div>

              {/* Takograf ve Taksimetre Sistemleri */}
              <div className="space-y-4">
                <h2 
                  className="text-[32px] font-semibold text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.tachographTaximeter.title")}
                </h2>
                
                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.tachographTaximeter.description")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.tachographTaximeter.tachographDetails")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.tachographTaximeter.taximeterDetails")}
                </p>
              </div>
            </div>

            {/* Sağ taraf - Görsel alanı (1/2) */}
            <div className="relative">
              <div 
                className="w-full h-[400px] lg:h-[700px] bg-cover bg-center bg-no-repeat rounded-2xl"
                style={{
                  backgroundImage: `url(${assetUrl("projectsPageImage3.png")})`,
                  filter: "sepia(0.1) saturate(1.2) hue-rotate(10deg) brightness(1.1)"
                }}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Beşinci bölüm - Agresif Sürüş Analiz ve MPPT Şarj Kontrol Sistemleri */}
      <section className="py-4 lg:py-8" style={{ backgroundColor: '#F6F8FF' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Sol taraf - Görsel alanı (1/2) */}
            <div className="relative">
              <div 
                className="w-full h-[400px] lg:h-[750px] bg-cover bg-center bg-no-repeat rounded-2xl"
                style={{
                  backgroundImage: `url(${assetUrl("projectsPageImage4.png")})`,
                  filter: "sepia(0.1) saturate(1.2) hue-rotate(10deg) brightness(1.1)"
                }}
              />
            </div>

            {/* Sağ taraf - Metin içeriği (1/2) */}
            <div className="space-y-8">
              {/* Agresif Sürüş Analiz Sistemleri */}
              <div className="space-y-4">
                <h2 
                  className="text-[32px] font-semibold text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.aggressiveDrivingAnalysis.title")}
                </h2>
                
                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.aggressiveDrivingAnalysis.description")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.aggressiveDrivingAnalysis.technology")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.aggressiveDrivingAnalysis.benefits")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.aggressiveDrivingAnalysis.reporting")}
                </p>
              </div>

              {/* MPPT Şarj Kontrol Sistemleri */}
              <div className="space-y-4">
                <h2 
                  className="text-[32px] font-semibold text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.mpptChargeControl.title")}
                </h2>
                
                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.mpptChargeControl.description")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.mpptChargeControl.technology")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.mpptChargeControl.operation")}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Altıncı bölüm - CGM Sensör Entegrasyonu ve Otocam Bombe Ölçüm Sistemi */}
      <section className="py-4 lg:py-8" style={{ backgroundColor: '#F6F8FF' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Sol taraf - Metin içeriği (1/2) */}
            <div className="space-y-8">
              {/* CGM Sensör Entegrasyonu */}
              <div className="space-y-4">
                <h2 
                  className="text-[32px] font-semibold text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.cgmSensorIntegration.title")}
                </h2>
                
                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.cgmSensorIntegration.description")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.cgmSensorIntegration.applications")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.cgmSensorIntegration.technology")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.cgmSensorIntegration.benefits")}
                </p>
              </div>

              {/* Otocam Bombe Ölçüm Sistemi */}
              <div className="space-y-4">
                <h2 
                  className="text-[32px] font-semibold text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.autoGlassMeasurement.title")}
                </h2>
                
                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.autoGlassMeasurement.description")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.autoGlassMeasurement.technology")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.autoGlassMeasurement.dataAnalysis")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.autoGlassMeasurement.benefits")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.autoGlassMeasurement.implementation")}
                </p>
              </div>
            </div>

            {/* Sağ taraf - Görsel alanı (1/2) */}
            <div className="relative">
              <div 
                className="w-full h-[400px] lg:h-[1000px] bg-cover bg-center bg-no-repeat rounded-2xl"
                style={{
                  backgroundImage: `url(${assetUrl("projectsPageImage5.png")})`,
                  filter: "sepia(0.1) saturate(1.2) hue-rotate(10deg) brightness(1.1)"
                }}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Yedinci bölüm - Araç Güvenliği */}
      <section className="py-4 lg:py-8" style={{ backgroundColor: '#F6F8FF' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Sol taraf - Görsel alanı (1/2) */}
            <div className="relative">
              <div 
                className="w-full h-[400px] lg:h-[500px] bg-cover bg-center bg-no-repeat rounded-2xl"
                style={{
                  backgroundImage: `url(${assetUrl("projectsPageImage6.png")})`,
                  filter: "sepia(0.1) saturate(1.2) hue-rotate(10deg) brightness(1.1)"
                }}
              />
            </div>

            {/* Sağ taraf - Metin içeriği (1/2) */}
            <div className="space-y-6">
              <h2 
                className="text-[32px] font-semibold text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("projectsPage.electronicsSection.vehicleSecurity.title")}
              </h2>
              
              <p 
                className="text-[18px] leading-[1.5] text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("projectsPage.electronicsSection.vehicleSecurity.description")}
              </p>

              <p 
                className="text-[18px] leading-[1.5] text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("projectsPage.electronicsSection.vehicleSecurity.technology")}
              </p>

              <p 
                className="text-[18px] leading-[1.5] text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("projectsPage.electronicsSection.vehicleSecurity.security")}
              </p>

              <p 
                className="text-[18px] leading-[1.5] text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("projectsPage.electronicsSection.vehicleSecurity.benefits")}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Sekizinci bölüm - RF ve Haberleşme Sistemleri */}
      <section className="py-4 lg:py-8" style={{ backgroundColor: '#F6F8FF' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Sol taraf - Metin içeriği (1/2) */}
            <div className="space-y-6">
              <h2 
                className="text-[32px] font-semibold text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("projectsPage.electronicsSection.rfCommunicationSystems.title")}
              </h2>
              
              {/* RF Down Converter / IF Sinyal Dönüştürücü */}
              <div className="space-y-4">
                <h3 
                  className="text-[24px] font-semibold text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.rfCommunicationSystems.rfConverter.title")}
                </h3>
                
                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.rfCommunicationSystems.rfConverter.description")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.rfCommunicationSystems.rfConverter.technology")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.rfCommunicationSystems.rfConverter.applications")}
                </p>
              </div>

              {/* Uzaktan Kontrol Sistemleri */}
              <div className="space-y-4">
                <h3 
                  className="text-[24px] font-semibold text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.rfCommunicationSystems.remoteControl.title")}
                </h3>
                
                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.rfCommunicationSystems.remoteControl.description")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.rfCommunicationSystems.remoteControl.technology")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.rfCommunicationSystems.remoteControl.applications")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.rfCommunicationSystems.remoteControl.benefits")}
                </p>
              </div>
            </div>

            {/* Sağ taraf - Görsel alanı (1/2) */}
            <div className="relative">
              <div 
                className="w-full h-[400px] lg:h-[750px] bg-cover bg-center bg-no-repeat rounded-2xl"
                style={{
                  backgroundImage: `url(${assetUrl("projectsPageImage7.png")})`,
                  filter: "sepia(0.1) saturate(1.2) hue-rotate(10deg) brightness(1.1)"
                }}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Dokuzuncu bölüm - Optik ve Güvenlik Sistemleri */}
      <section className="py-4 lg:py-8" style={{ backgroundColor: '#F6F8FF' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Sol taraf - Metin içeriği (1/2) */}
            <div className="space-y-6">
              <h2 
                className="text-[32px] font-semibold text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("projectsPage.electronicsSection.opticalSecuritySystems.title")}
              </h2>
              
              {/* Lazer Sistemleri */}
              <div className="space-y-4">
                <h3 
                  className="text-[24px] font-semibold text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.opticalSecuritySystems.laserSystems.title")}
                </h3>
                
                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.opticalSecuritySystems.laserSystems.description")}
                </p>
              </div>

              {/* Kamera Güvenlik Sistemleri */}
              <div className="space-y-4">
                <h3 
                  className="text-[24px] font-semibold text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.opticalSecuritySystems.cameraSecuritySystems.title")}
                </h3>
                
                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.opticalSecuritySystems.cameraSecuritySystems.description")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.opticalSecuritySystems.cameraSecuritySystems.technology")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.opticalSecuritySystems.cameraSecuritySystems.security")}
                </p>
              </div>
            </div>

            {/* Sağ taraf - Görsel alanı (1/2) */}
            <div className="relative">
              <div 
                className="w-full h-[400px] lg:h-[750px] bg-cover bg-center bg-no-repeat rounded-2xl"
                style={{
                  backgroundImage: `url(${assetUrl("projectsPageImage8.png")})`,
                  filter: "sepia(0.1) saturate(1.2) hue-rotate(10deg) brightness(1.1)"
                }}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Onuncu bölüm - İş Sağlığı ve Güvenliği (İSG) Kamera Sistemleri */}
      <section className="py-4 lg:py-8" style={{ backgroundColor: '#F6F8FF' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Sol taraf - Görsel alanı (1/2) */}
            <div className="relative">
              <div 
                className="w-full h-[400px] lg:h-[700px] bg-cover bg-center bg-no-repeat rounded-2xl"
                style={{
                  backgroundImage: `url(${assetUrl("projectsPageImage9.png")})`,
                  filter: "sepia(0.1) saturate(1.2) hue-rotate(10deg) brightness(1.1)"
                }}
              />
            </div>

            {/* Sağ taraf - Metin içeriği (1/2) */}
            <div className="space-y-6">
              <h2 
                className="text-[32px] font-semibold text-[#0C176C]"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui"
                }}
              >
                {t("projectsPage.electronicsSection.occupationalHealthSafetySystems.title")}
              </h2>
              
              {/* İSG Kamera Sistemleri */}
              <div className="space-y-4">
                <h3 
                  className="text-[24px] font-semibold text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.occupationalHealthSafetySystems.cameraSystems.title")}
                </h3>
                
                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.occupationalHealthSafetySystems.cameraSystems.description")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.occupationalHealthSafetySystems.cameraSystems.features")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.occupationalHealthSafetySystems.cameraSystems.benefits")}
                </p>
              </div>

              {/* Pencere Güvenlik Bariyerleri */}
              <div className="space-y-4">
                <h3 
                  className="text-[24px] font-semibold text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.occupationalHealthSafetySystems.windowSecurityBarriers.title")}
                </h3>
                
                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.occupationalHealthSafetySystems.windowSecurityBarriers.description")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.occupationalHealthSafetySystems.windowSecurityBarriers.detection")}
                </p>

                <p 
                  className="text-[18px] leading-[1.5] text-[#0C176C]"
                  style={{ 
                    fontFamily: "Inter, ui-sans-serif, system-ui"
                  }}
                >
                  {t("projectsPage.electronicsSection.occupationalHealthSafetySystems.windowSecurityBarriers.securityLevel")}
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

export default ProjectsPage;
