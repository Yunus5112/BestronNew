import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import Button from '../ui/Button';
import { Colors, Typography } from '../lib/theme';

interface ConfirmationStepProps {
  dateTime: { date: Date; time: string };
  onDone: () => void;
}

export const ConfirmationStep = ({ dateTime, onDone }: ConfirmationStepProps) => {
  const formattedDate = format(dateTime.date, 'EEEE, d MMMM yyyy', { locale: tr });
  const formattedTime = dateTime.time;

  return (
    <div className="text-center max-w-lg mx-auto flex flex-col items-center justify-center h-full">
      <div 
        className="w-20 h-20 mb-6 rounded-full flex items-center justify-center"
        style={{ backgroundColor: '#d4edda' }}
      >
        <svg 
          className="w-12 h-12" 
          style={{ color: '#155724' }} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>

      <h3 
        className={`${Typography.sizes.h3} font-semibold mb-2`}
        style={{ fontFamily: Typography.fontFamily, color: Colors.primary }}
      >
        Toplantı Talebiniz Alınmıştır!
      </h3>
      
      <p 
        className={`${Typography.sizes.body} mb-6`}
        style={{ fontFamily: Typography.fontFamily, color: Colors.textSecondary }}
      >
        En kısa sürede e-posta ile tarafınıza onay bilgisi gönderilecektir.
      </p>

      <div 
        className="p-6 rounded-xl border border-slate-200 w-full mb-8"
        style={{ backgroundColor: Colors.background }}
      >
        <div 
          className={`${Typography.sizes.bodyLarge} font-semibold`}
          style={{ fontFamily: Typography.fontFamily, color: Colors.primary }}
        >
          {formattedDate}
        </div>
        <div 
          className={`${Typography.sizes.h2} font-bold`}
          style={{ fontFamily: Typography.fontFamily, color: Colors.primary }}
        >
          {formattedTime}
        </div>
      </div>

      <Button onClick={onDone} fullWidth>
        Tamam
      </Button>
    </div>
  );
};
