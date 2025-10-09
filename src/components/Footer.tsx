import { Container } from "./ui/Container";
import { useT } from "../i18n/I18nProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "../assets/images/logo";
import phoneIcon from "../assets/phoneIcon";
import mailIcon from "../assets/mailIcon";
import locationIcon from "../assets/locationIcon";
import footerBackground from "../assets/images/footerBackground";
import footerImage from "../assets/footerImage";

export const Footer = () => {
  const t = useT();

  const navItems = [
    { key: "nav.home", href: "#" },
    { key: "nav.about", href: "#" },
    { key: "nav.services", href: "#" },
    { key: "nav.projects", href: "#" },
    { key: "nav.sectors", href: "#" },
    { key: "nav.whyUs", href: "#" },
    { key: "nav.contact", href: "#" }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background gradients - full footer background */}
      <div
        className="absolute inset-0 -z-20 w-full h-full opacity-90"
        dangerouslySetInnerHTML={{ __html: footerBackground }}
      />

      {/* Circuit board pattern - footer's bottom right corner */}
      <div
        className="absolute bottom-0 right-0 w-[205px] h-[345px] opacity-90 pointer-events-none -z-10"
        dangerouslySetInnerHTML={{ __html: footerImage }}
      />
      
      <Container className="relative z-10 py-16 lg:py-20">
        {/* Main white container */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sol taraf - Şirket bilgileri */}
            <div className="space-y-6 lg:col-span-1">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div
                  className="h-12 w-auto"
                  dangerouslySetInnerHTML={{ __html: logo }}
                />
              </div>

              {/* Şirket açıklaması */}
              <p 
                className="text-[16px] leading-[1.5] max-w-lg"
                style={{ 
                  fontFamily: "Inter, ui-sans-serif, system-ui",
                  color: '#8987A1'
                }}
              >
                {t("footer.companyDescription")}
              </p>

              {/* Copyright */}
              <p className="text-[14px] leading-[1.5]" style={{ color: '#8987A1' }}>
                {t("footer.copyright")}
              </p>
            </div>

            {/* Sağ taraf - Navigasyon ve iletişim */}
            <div className="space-y-8 lg:col-span-2">
              {/* Navigasyon ve dil seçici */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                {/* Navigasyon linkleri */}
                <nav className="flex flex-wrap gap-6">
                  {navItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className={`text-[16px] font-medium transition-colors ${
                        index === 0 
                          ? "text-primary" 
                          : "hover:text-primary"
                      }`}
                      style={index !== 0 ? { color: '#8987A1' } : undefined}
                    >
                      {t(item.key)}
                    </a>
                  ))}
                </nav>

                {/* Dil seçici */}
                <LanguageSwitcher />
              </div>

              {/* İletişim bilgileri */}
              <div className="space-y-4">
                {/* Telefon */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 flex-shrink-0"
                    dangerouslySetInnerHTML={{ __html: phoneIcon }}
                  />
                  <a 
                    href="tel:+902169990219" 
                    className="text-[16px] hover:text-primary transition-colors"
                    style={{ color: '#8987A1' }}
                  >
                    {t("footer.phone")}
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-6 h-5 flex-shrink-0"
                    dangerouslySetInnerHTML={{ __html: mailIcon }}
                  />
                  <a 
                    href="mailto:info@bestrontechnology.com" 
                    className="text-[16px] hover:text-primary transition-colors underline"
                    style={{ color: '#8987A1' }}
                  >
                    {t("footer.email")}
                  </a>
                </div>

                {/* Adres */}
                <div className="flex items-start gap-3">
                  <div
                    className="w-5 h-6 flex-shrink-0 mt-0.5"
                    dangerouslySetInnerHTML={{ __html: locationIcon }}
                  />
                  <div className="text-[16px] leading-[1.6]" style={{ color: '#8987A1' }}>
                    <p>{t("footer.address.line1")}</p>
                    <p>{t("footer.address.line2")}</p>
                  </div>
                </div>

                {/* Harita linki */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-6 h-6 bg-slate-200 rounded flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#8987A1" strokeWidth="2"/>
                      <circle cx="12" cy="10" r="3" stroke="#8987A1" strokeWidth="2"/>
                    </svg>
                  </div>
                  <a 
                    href="https://maps.app.goo.gl/BvrGQRKtaVH18nvt9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-[16px] hover:underline"
                  >
                    {t("footer.mapLink")}
                  </a>
                  <span className="text-primary text-[14px]">
                    {t("footer.mapUrl")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
