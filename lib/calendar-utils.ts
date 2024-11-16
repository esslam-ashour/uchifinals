interface CalendarEvent {
  title: string;
  description: string;
  location: string;
  start: Date;
  end: Date;
}

export const formatDate = (dateStr: string) => {
  const [year, month, day] = dateStr.split('T')[0].split('-').map(Number);
  const date = new Date(year, month - 1, day);
  
  return date.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  });
};

export const formatTime = (timeStr: string) => {
  const [hours, minutes] = timeStr.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12; // Convert 0 to 12 for 12 AM
  return `${displayHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${period}`;
};

export const createCalendarEvent = (exam: {
  date: string;
  startTime: string;
  endTime: string;
  course: string;
  section: string;
  sectionTitle: string;
  instructor: string;
  room: string;
}): CalendarEvent => {
  const [year, month, day] = exam.date.split('T')[0].split('-').map(Number);
  const [startHours, startMinutes] = exam.startTime.split(':').map(Number);
  const [endHours, endMinutes] = exam.endTime.split(':').map(Number);

  const startDate = new Date(year, month - 1, day, startHours, startMinutes);
  const endDate = new Date(year, month - 1, day, endHours, endMinutes);

  return {
    title: `${exam.course}/${exam.section} Final Exam`,
    description: `${exam.sectionTitle}\nInstructor: ${exam.instructor}`,
    location: exam.room,
    start: startDate,
    end: endDate,
  };
};

const formatToCalendarDate = (date: Date): string => {
  return date.getFullYear().toString() +
    (date.getMonth() + 1).toString().padStart(2, '0') +
    date.getDate().toString().padStart(2, '0') + 'T' +
    date.getHours().toString().padStart(2, '0') +
    date.getMinutes().toString().padStart(2, '0') +
    '00';
};

export const generateGoogleCalendarUrl = (event: CalendarEvent): string => {
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    event.title
  )}&details=${encodeURIComponent(
    event.description
  )}&location=${encodeURIComponent(
    event.location
  )}&dates=${formatToCalendarDate(event.start)}/${formatToCalendarDate(event.end)}`;
};

export const generateOutlookCalendarUrl = (event: CalendarEvent): string => {
  return `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(
    event.title
  )}&body=${encodeURIComponent(
    event.description
  )}&location=${encodeURIComponent(
    event.location
  )}&startdt=${formatToCalendarDate(event.start)}&enddt=${formatToCalendarDate(event.end)}`;
};

export const generateICSContent = (event: CalendarEvent): string => {
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    `DTSTART:${formatToCalendarDate(event.start)}`,
    `DTEND:${formatToCalendarDate(event.end)}`,
    `SUMMARY:${event.title.replace(/,/g, '\\,')}`,
    `DESCRIPTION:${event.description.replace(/\n/g, '\\n').replace(/,/g, '\\,')}`,
    `LOCATION:${event.location.replace(/,/g, '\\,')}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');
};

export const downloadICSFile = (event: CalendarEvent) => {
  const icsContent = generateICSContent(event);
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', `${event.title.replace(/[/\\?%*:|"<>]/g, '-')}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}; 