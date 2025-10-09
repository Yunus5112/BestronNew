import { Container } from "./ui/Container";
import Button from "./ui/Button";
import { useT } from "../i18n/I18nProvider";
import contactPageSvg from "../assets/images/contactPageSvg";

export const Contact = () => {
  const t = useT();

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Container className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Sol taraf - Arka plan ve başlık */}
        <div className="relative flex items-start justify-start p-8 lg:p-12">
          {/* Arka plan SVG */}
          <div 
            className="absolute inset-0 w-full h-full opacity-10"
            dangerouslySetInnerHTML={{ __html: contactPageSvg }}
          />
          
          {/* Başlık - Sol üst köşeye yakın */}
          <div className="relative z-10 pt-8 lg:pt-12">
            <h1 className="text-[48px] sm:text-[56px] lg:text-[64px] font-bold text-primary leading-tight">
              {t("contact.titleLine1")}<br />{t("contact.titleLine2")}
            </h1>
          </div>
        </div>

        {/* Sağ taraf - İletişim formu */}
        <div className="flex items-center justify-center p-8 lg:p-12">
          <div className="w-full max-w-md">
            <form className="space-y-6">
              {/* Ad Soyad */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t("contact.form.placeholders.name")}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t("contact.form.placeholders.email")}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Mesaj */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder={t("contact.form.placeholders.message")}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                />
              </div>

              {/* Gönder butonu */}
              <Button fullWidth type="submit">
                {t("contact.form.submit")}
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
