import { FormField } from "./FormField";
import Button from "../ui/Button";

interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
  className?: string;
}

export const ContactForm = ({ onSubmit, className = "" }: ContactFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit?.(formData);
  };

  return (
    <div className={`flex items-start justify-center pt-8 md:pt-12 lg:pt-16 ${className}`}>
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField
            id="name"
            label="Ad Soyad"
            type="text"
            placeholder="Adınızı ve soyadınızı girin"
            required
          />

          <FormField
            id="email"
            label="E-posta"
            type="email"
            placeholder="E-posta adresinizi girin"
            required
          />

          <FormField
            id="message"
            label="Mesaj"
            type="textarea"
            placeholder="Mesajınızı yazın"
            rows={5}
            required
          />

          <Button fullWidth type="submit">
            Gönder
          </Button>
        </form>
      </div>
    </div>
  );
};
