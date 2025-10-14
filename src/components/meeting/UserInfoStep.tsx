import { useState } from 'react';
import { FormField } from '../contact/FormField';
import Button from '../ui/Button';

interface UserInfoStepProps {
  onSubmit: (userInfo: { name: string; email: string; message: string }) => void;
  onBack: () => void;
  isSubmitting: boolean;
  error: string | null;
}

export const UserInfoStep = ({ onSubmit, onBack, isSubmitting, error }: UserInfoStepProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && email) { // Simple validation
      onSubmit({ name, email, message });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
      <FormField
        id="name"
        label="Ad Soyad"
        type="text"
        placeholder="Adınızı ve soyadınızı girin"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <FormField
        id="email"
        label="E-posta"
        type="email"
        placeholder="E-posta adresinizi girin"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <FormField
        id="message"
        label="Ek Bilgi (Opsiyonel)"
        type="textarea"
        placeholder="Toplantı konusu veya eklemek istediğiniz notlar"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
      />
      
      {error && (
        <div className="text-red-600 bg-red-100 p-3 rounded-lg text-center">
          {error}
        </div>
      )}

      <div className="flex justify-between items-center pt-4 border-t mt-6">
        <Button onClick={onBack} variant="secondary" disabled={isSubmitting}>
          Geri
        </Button>
        <Button type="submit" disabled={!name || !email || isSubmitting}>
          {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
        </Button>
      </div>
    </form>
  );
};
