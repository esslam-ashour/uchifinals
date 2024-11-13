import { Exam } from '@/lib/definitions';
import { locations } from '@/data/locations';
import { TableRow, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';


export default function ExamRow({ exam }: { exam: Exam }) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      timeZone: 'America/Chicago'
    });
  };

  const formatTime = (timeStr: string) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    
    const date = new Date();
    date.setHours(hours, minutes);

    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'America/Chicago'
    }).toUpperCase();
  };

  const createCalendarEvent = () => {
    const [year, month, day] = exam.date.split('T')[0].split('-').map(Number);
    const [startHours, startMinutes] = exam.startTime.split(':');
    const [endHours, endMinutes] = exam.endTime.split(':');

    const chicagoOptions = { timeZone: 'America/Chicago' };
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Chicago',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });

    const examDate = new Date(year, month - 1, day);
    examDate.setHours(parseInt(startHours), parseInt(startMinutes), 0, 0);
    const startStr = formatter.format(examDate);
    const startUTC = new Date(startStr);

    const endDate = new Date(year, month - 1, day);
    endDate.setHours(parseInt(endHours), parseInt(endMinutes), 0, 0);
    const endStr = formatter.format(endDate);
    const endUTC = new Date(endStr);

    return {
      title: `${exam.course}/${exam.section} Final Exam`,
      description: `${exam.sectionTitle}\nInstructor: ${exam.instructor}`,
      location: exam.room,
      start: startUTC,
      end: endUTC,
    };
  };

  const addToGoogleCalendar = () => {
    const event = createCalendarEvent();
    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title
    )}&details=${encodeURIComponent(
      event.description
    )}&location=${encodeURIComponent(
      event.location
    )}&dates=${event.start.toISOString().replace(/[-:.]/g, '')}Z/${event.end.toISOString().replace(
      /[-:.]/g,
      ''
    )}Z`;
    window.open(googleUrl, '_blank');
  };

  const addToOutlookCalendar = () => {
    const event = createCalendarEvent();
    const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(
      event.title
    )}&body=${encodeURIComponent(
      event.description
    )}&location=${encodeURIComponent(
      event.location
    )}&startdt=${event.start.toISOString()}&enddt=${event.end.toISOString()}`;
    window.open(outlookUrl, '_blank');
  };

  const addToAppleCalendar = () => {
    const event = createCalendarEvent();
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `DTSTART:${event.start.toISOString().replace(/[-:.]/g, '')}Z`,
      `DTEND:${event.end.toISOString().replace(/[-:.]/g, '')}Z`,
      `SUMMARY:${event.title.replace(/,/g, '\\,')}`,
      `DESCRIPTION:${event.description.replace(/\n/g, '\\n').replace(/,/g, '\\,')}`,
      `LOCATION:${event.location.replace(/,/g, '\\,')}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${event.title.replace(/[/\\?%*:|"<>]/g, '-')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <TableRow key={exam.id}>
      <TableCell>
        <span className="font-bold">{exam.course}/{exam.section}</span><br />{exam.sectionTitle}
      </TableCell>
      <TableCell>{exam.instructor}</TableCell>
      <TableCell>
        {locations[exam.room.split(" ")[0]] ? (
          <a target="_blank" href={locations[exam.room.split(" ")[0]]?.mapLink?.toString()} className="text-blue-500" rel="noopener noreferrer">
            {exam.room}
          </a>
        ) : (
          <span>{exam.room}</span>
        )}
      </TableCell>
      <TableCell>{formatDate(exam.date)}</TableCell>
      <TableCell>{formatTime(exam.startTime)} - {formatTime(exam.endTime)}</TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2"
            >
              <Calendar className="h-4 w-4" />
              Add to Calendar
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={addToGoogleCalendar}>
              Google Calendar
            </DropdownMenuItem>
            <DropdownMenuItem onClick={addToOutlookCalendar}>
              Outlook Calendar
            </DropdownMenuItem>
            <DropdownMenuItem onClick={addToAppleCalendar}>
              Apple Calendar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}