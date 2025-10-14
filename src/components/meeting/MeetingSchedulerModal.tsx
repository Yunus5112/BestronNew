import { useState } from 'react';
import { DatePickerStep } from './DatePickerStep';
import { UserInfoStep } from './UserInfoStep';
import { ConfirmationStep } from './ConfirmationStep';
import { Colors, Typography } from '../lib/theme';
import { sendMeetingRequestEmail } from '../../services/emailService';

interface MeetingSchedulerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'date' | 'form' | 'confirmation';

export const MeetingSchedulerModal = ({ isOpen, onClose }: MeetingSchedulerModalProps) => {
  const [step, setStep] = useState<Step>('date');
  const [selectedDateTime, setSelectedDateTime] = useState<{ date: Date; time: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleDateSelect = (date: Date, time: string) => {
    setSelectedDateTime({ date, time });
    setStep('form');
  };
  
  const handleFormSubmit = async (userInfo: { name: string; email: string; message: string }) => {
    if (!selectedDateTime) return; // Should not happen

    setIsSubmitting(true);
    setSubmitError(null);

    const result = await sendMeetingRequestEmail({
      ...userInfo,
      date: selectedDateTime.date,
      time: selectedDateTime.time,
    });
    
    setIsSubmitting(false);

    if (result.success) {
      setStep('confirmation');
    } else {
      setSubmitError(result.error || 'Bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  const handleBack = () => {
    if (step === 'form') {
      setStep('date');
    }
  };

  const resetAndClose = () => {
    setStep('date');
    setSelectedDateTime(null);
    onClose();
  };

  if (!isOpen) return null;

  const renderStep = () => {
    switch (step) {
      case 'date':
        return <DatePickerStep onDateSelect={handleDateSelect} />;
      case 'form':
        return (
          <UserInfoStep 
            onSubmit={handleFormSubmit} 
            onBack={handleBack}
            isSubmitting={isSubmitting}
            error={submitError}
          />
        );
      case 'confirmation':
        if (!selectedDateTime) return null; // Should not happen
        return <ConfirmationStep dateTime={selectedDateTime} onDone={resetAndClose} />;
      default:
        return null;
    }
  };
  
  const getTitle = () => {
    switch (step) {
      case 'date':
        return 'Tarih ve Saat Seçin';
      case 'form':
        return 'Bilgilerinizi Girin';
      case 'confirmation':
        return 'Toplantı Talebiniz Alındı';
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      onClick={resetAndClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl m-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8 border-b" style={{ backgroundColor: Colors.background }}>
          <h2 
            className={`${Typography.sizes.h3} font-semibold`}
            style={{ fontFamily: Typography.fontFamily, color: Colors.primary }}
          >
            {getTitle()}
          </h2>
          <button
            onClick={resetAndClose}
            className="absolute top-4 right-4 text-3xl font-light leading-none"
            style={{ color: Colors.textSecondary }}
            aria-label="Close scheduler"
          >
            &times;
          </button>
        </div>
        
        <div className="p-6 sm:p-8 h-[70vh] overflow-y-auto">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};
