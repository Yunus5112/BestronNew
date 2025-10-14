import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format, isPast, isWeekend } from 'date-fns';
import { tr } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';
import { generateTimeSlots } from '../../utils/timeSlots';
import Button from '../ui/Button';
import { Colors, Typography } from '../lib/theme';

interface DatePickerStepProps {
  onDateSelect: (date: Date, time: string) => void;
}

export const DatePickerStep = ({ onDateSelect }: DatePickerStepProps) => {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  const timeSlots = selectedDay ? generateTimeSlots(selectedDay) : [];

  const handleDayClick = (day: Date) => {
    // Prevent selecting past dates or weekends again
    if (isPast(day) && !isSameDay(day, new Date())) return;
    if (isWeekend(day)) return;

    setSelectedDay(day);
    setSelectedTime(null); // Reset time when a new day is selected
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleNext = () => {
    if (selectedDay && selectedTime) {
      onDateSelect(selectedDay, selectedTime);
    }
  };

  // Helper to check if two dates are the same day
  const isSameDay = (d1: Date, d2: Date) => {
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
  };
  
  const today = new Date();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      {/* Calendar */}
      <div className="flex justify-center items-center">
        <style>{`.rdp-day_selected { background-color: ${Colors.primary} !important; }`}</style>
        <DayPicker
          mode="single"
          selected={selectedDay}
          onSelect={setSelectedDay}
          onDayClick={handleDayClick}
          locale={tr}
          fromDate={today}
          disabled={[
            isWeekend,
            (date) => isPast(date) && !isSameDay(date, today)
          ]}
          modifiersClassNames={{
            selected: 'my-selected-day',
          }}
        />
      </div>

      {/* Time Slots */}
      <div className="flex flex-col">
        {selectedDay && (
          <div className="flex-grow overflow-y-auto pr-2">
            <h3 
              className={`${Typography.sizes.h3} font-semibold mb-4`}
              style={{ fontFamily: Typography.fontFamily, color: Colors.primary }}
            >
              {format(selectedDay, 'd MMMM yyyy, EEEE', { locale: tr })}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeSelect(time)}
                  className={`p-3 text-center rounded-lg border transition-colors duration-200 ${
                    selectedTime === time
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white hover:bg-slate-100 border-slate-300'
                  }`}
                  style={{ fontFamily: Typography.fontFamily }}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Action Button */}
        <div className="mt-6 pt-4 border-t">
          <Button 
            onClick={handleNext} 
            disabled={!selectedDay || !selectedTime}
            fullWidth
          >
            İleri
          </Button>
        </div>
      </div>
    </div>
  );
};
