import { useState } from "react";
import { useT } from "../i18n/I18nProvider";
import contactPageSvg from "../assets/images/contactPageSvg";
import { ContactSection } from "./contact/ContactSection";
import { ContactHero } from "./contact/ContactHero";
import { ContactForm } from "./contact/ContactForm";
import { sendContactEmail } from "../services/emailService";

export const Contact = () => {
  const t = useT();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleFormSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await sendContactEmail({
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string,
      });

      if (result.success) {
        setSubmitStatus('success');
        // Reset form after 3 seconds
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
        console.error('Email send failed:', result.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Email send error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ContactSection>
        {/* Background SVG - positioned absolutely from left edge */}
        <div 
          className="absolute top-0 w-full h-full opacity-10 pointer-events-none"
          style={{
            left: 'calc(-1 * (100vw - 100%) / 2)',
            width: '100vw'
          }}
          dangerouslySetInnerHTML={{ __html: contactPageSvg }}
          role="img"
          aria-label="Contact page background decoration"
        />
        
        <div className="lg:col-span-2">
          <ContactHero
            title={t("contact.title")}
            subtitle={t("contact.subtitle")}
          />
        </div>

        <div className="lg:col-span-3">
          <ContactForm 
            onSubmit={handleFormSubmit}
            isSubmitting={isSubmitting}
            submitStatus={submitStatus}
          />
        </div>
      </ContactSection>
    </>
  );
};

export default Contact;
