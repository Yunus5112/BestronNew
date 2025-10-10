import { useT } from "../i18n/I18nProvider";
import { Container } from "../components/ui/Container";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";
import phoneIcon from "../assets/phoneIcon";
import mailIcon from "../assets/mailIcon";
import locationIcon from "../assets/locationIcon";

export const ContactPage = () => {
  const t = useT();

  return (
    <>
      {/* Contact Component */}
      <Contact />

      {/* Harita ve İletişim Bilgileri */}
      <section className="py-8 lg:py-12" style={{ backgroundColor: '#F6F8FF' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Sol taraf - Harita (2/3) */}
            <div className="lg:col-span-2">
              <div className="w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.1234567890123!2d29.2345678!3d40.8765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSTAR%20PORT%20RESIDENCE!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bestron Technology Location"
                />
              </div>
            </div>

            {/* Sağ taraf - İletişim Bilgileri (1/3) */}
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
        </Container>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ContactPage;
