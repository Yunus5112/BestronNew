import { add, format, set } from 'date-fns';

interface TimeSlotOptions {
  startTime: { hour: number; minute: number };
  endTime: { hour: number; minute: number };
  slotDuration: number; // in minutes
  breakTime?: { start: { hour: number; minute: number }; end: { hour: number; minute: number } };
}

const DEFAULT_OPTIONS: TimeSlotOptions = {
  startTime: { hour: 9, minute: 0 },
  endTime: { hour: 17, minute: 0 },
  slotDuration: 30,
  breakTime: { start: { hour: 12, minute: 0 }, end: { hour: 13, minute: 0 } },
};

/**
 * Generates an array of time slots for a given day based on specified rules.
 * @param date - The date for which to generate time slots.
 * @param options - Configuration for time slot generation.
 * @returns An array of strings representing available time slots (e.g., "09:00").
 */
export const generateTimeSlots = (
  date: Date,
  options: Partial<TimeSlotOptions> = {}
): string[] => {
  const config = { ...DEFAULT_OPTIONS, ...options };
  const slots: string[] = [];

  // Set the start and end times for the day
  let currentTime = set(date, { 
    hours: config.startTime.hour, 
    minutes: config.startTime.minute, 
    seconds: 0, 
    milliseconds: 0 
  });
  
  const endTime = set(date, { 
    hours: config.endTime.hour, 
    minutes: config.endTime.minute, 
    seconds: 0, 
    milliseconds: 0 
  });
  
  const breakStart = config.breakTime ? set(date, {
    hours: config.breakTime.start.hour,
    minutes: config.breakTime.start.minute,
    seconds: 0,
    milliseconds: 0,
  }) : null;

  const breakEnd = config.breakTime ? set(date, {
    hours: config.breakTime.end.hour,
    minutes: config.breakTime.end.minute,
    seconds: 0,
    milliseconds: 0,
  }) : null;

  while (currentTime < endTime) {
    const isBreakTime = breakStart && breakEnd && currentTime >= breakStart && currentTime < breakEnd;

    if (!isBreakTime) {
      slots.push(format(currentTime, 'HH:mm'));
    }
    
    currentTime = add(currentTime, { minutes: config.slotDuration });
  }

  return slots;
};
