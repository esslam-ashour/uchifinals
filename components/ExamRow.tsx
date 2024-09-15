import { Exam } from '@/lib/definitions';
import { locations } from '@/data/locations';
import { TableRow, TableCell } from '@/components/ui/table';

interface ExamRowProps {
  exam: Exam;
}

export default function ExamRow( { exam }: ExamRowProps ) {
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
      <TableCell>{exam.date.split('T')[0]}</TableCell>
      <TableCell>{exam.startTime} - {exam.endTime}</TableCell>
    </TableRow>
  );
}