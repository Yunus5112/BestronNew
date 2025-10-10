import { useT } from "../i18n/I18nProvider";
import contactPageSvg from "../assets/images/contactPageSvg";
import { ContactSection } from "./contact/ContactSection";
import { ContactHero } from "./contact/ContactHero";
import { ContactForm } from "./contact/ContactForm";

export const Contact = () => {
  const t = useT();

  const handleFormSubmit = (formData: FormData) => {
    // Form submission logic here
    console.log('Form submitted:', {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    });
  };

  return (
    <ContactSection>
      <ContactHero
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
        backgroundSvg={contactPageSvg}
      />

      <ContactForm onSubmit={handleFormSubmit} />
    </ContactSection>
  );
};

export default Contact;
