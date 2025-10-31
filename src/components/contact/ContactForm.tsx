import { useRef, useEffect } from "react";
import { useT } from "../../i18n/I18nProvider";
import { FormField } from "./FormField";
import Button from "../ui/Button";
import { Typography } from "../lib/theme";

interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
  isSubmitting?: boolean;
  submitStatus?: 'idle' | 'success' | 'error';
  className?: string;
}

export const ContactForm = ({ 
  onSubmit, 
  isSubmitting = false,
  submitStatus = 'idle',
  className = "" 
}: ContactFormProps) => {
  const t = useT();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit?.(formData);
  };

  // Reset form on successful submission
  useEffect(() => {
    if (submitStatus === 'success' && formRef.current) {
      formRef.current.reset();
    }
  }, [submitStatus]);

  return (
    <div className={`flex items-start justify-start pt-8 md:pt-12 lg:pt-16 ${className}`}>
      <div className="w-full">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot field for spam prevention */}
          <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

          <FormField
            id="name"
            label={t("contact.form.name")}
            type="text"
            placeholder={t("contact.form.placeholders.name")}
            required
            disabled={isSubmitting}
          />

          <FormField
            id="email"
            label={t("contact.form.email")}
            type="email"
            placeholder={t("contact.form.placeholders.email")}
            required
            disabled={isSubmitting}
          />

          <FormField
            id="message"
            label={t("contact.form.message")}
            type="textarea"
            placeholder={t("contact.form.placeholders.message")}
            rows={5}
            required
            disabled={isSubmitting}
          />

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div 
              className="p-4 rounded-lg text-center"
              style={{ 
                backgroundColor: '#d4edda',
                color: '#155724',
                fontFamily: Typography.fontFamily
              }}
            >
              ✅ {t("contact.form.successMessage")}
            </div>
          )}

          {submitStatus === 'error' && (
            <div 
              className="p-4 rounded-lg text-center"
              style={{ 
                backgroundColor: '#f8d7da',
                color: '#721c24',
                fontFamily: Typography.fontFamily
              }}
            >
              ❌ {t("contact.form.errorMessage")}
            </div>
          )}

          <Button 
            fullWidth 
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? t("contact.form.submitting") : t("contact.form.submit")}
          </Button>
        </form>
      </div>
    </div>
  );
};
