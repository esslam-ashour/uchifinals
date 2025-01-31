import Exam from '@/lib/types';
import { TableRow, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import {
  formatDate,
  formatTime,
  createCalendarEvent,
  generateGoogleCalendarUrl,
  downloadICSFile,
} from '@/lib/calendar-utils';

export default function ExamRow({ exam }: { exam: Exam }) {
  const addToGoogleCalendar = () => {
    const event = createCalendarEvent(exam);
    const url = generateGoogleCalendarUrl(event);
    window.open(url, '_blank');
  };

  const addToAppleCalendar = () => {
    const event = createCalendarEvent(exam);
    downloadICSFile(event);
  };

  return (
    <TableRow key={exam.id} className="flex-col sm:table-row">
      <TableCell className="block sm:table-cell">
        <div className="space-y-1">
          <span className="font-bold text-base sm:text-sm">{exam.course}/{exam.section}</span>
          <span className="block text-sm text-gray-600 sm:text-xs">{exam.sectionTitle}</span>
        </div>
      </TableCell>
      <TableCell className="block sm:table-cell">
        <span className="text-sm">{exam.instructor}</span>
      </TableCell>
      <TableCell className="block sm:table-cell">
          <span
            className="text-sm inline-flex items-center"
          >
            {exam.room}
          </span>
      </TableCell>
      <TableCell className="block sm:table-cell">
        <span className="text-sm">{formatDate(exam.date)}</span>
      </TableCell>
      <TableCell className="block sm:table-cell">
        <span className="text-sm whitespace-nowrap">
          {formatTime(exam.startTime)} - {formatTime(exam.endTime)}
        </span>
      </TableCell>
      <TableCell className="block sm:table-cell">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="w-full sm:w-auto h-10 sm:h-8 text-sm flex items-center justify-center gap-2 hover:bg-gray-100"
            >
              <Calendar className="h-4 w-4" />
              <span>Add to calendar</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            align="end" 
            className="w-[200px] p-2"
          >
            <DropdownMenuItem 
              onClick={addToGoogleCalendar}
              className="h-10 text-sm cursor-pointer"
            >
              Google Calendar
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={addToAppleCalendar}
              className="h-10 text-sm cursor-pointer"
            >
              Apple Calendar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}