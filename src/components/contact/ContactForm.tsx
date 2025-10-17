import { useRef, useEffect } from "react";
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
            label="Ad Soyad"
            type="text"
            placeholder="Adınızı ve soyadınızı girin"
            required
            disabled={isSubmitting}
          />

          <FormField
            id="email"
            label="E-posta"
            type="email"
            placeholder="E-posta adresinizi girin"
            required
            disabled={isSubmitting}
          />

          <FormField
            id="message"
            label="Mesaj"
            type="textarea"
            placeholder="Mesajınızı yazın"
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
              ✅ Mesajınız başarıyla gönderildi!
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
              ❌ Mesaj gönderilemedi. Lütfen tekrar deneyin.
            </div>
          )}

          <Button 
            fullWidth 
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
          </Button>
        </form>
      </div>
    </div>
  );
};
