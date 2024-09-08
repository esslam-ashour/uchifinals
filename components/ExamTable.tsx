import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { locations } from '@/data/locations';
import { Exam } from '@/lib/definitions';

export default function ExamTable({ exams }: { exams: Exam[] }): JSX.Element {
  return (
    <div className='h-screen overflow-scroll'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="sticky top-0">Course</TableHead>
            <TableHead className="sticky top-0">Instructor</TableHead>
            <TableHead className="sticky top-0">Location</TableHead>
            <TableHead className="sticky top-0">Date</TableHead>
            <TableHead className="sticky top-0">Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {exams.map(exam => (
            <TableRow key={exam.id}>
              <TableCell><span className='font-bold'>{exam.course}/{exam.section}</span> <br></br> {exam.sectionTitle}</TableCell>
              <TableCell>{exam.instructor}</TableCell>
              <TableCell>
                {locations[exam.room.split(" ")[0]] ? (
                  <a
                    target="_blank"
                    href={locations[exam.room.split(" ")[0]]?.mapLink?.toString()}
                    className='text-blue-500'
                    rel="noopener noreferrer"
                  >
                    {exam.room}
                  </a>
                ) : (
                  <span>{exam.room}</span>
                )}
              </TableCell>
              <TableCell>{exam.date}</TableCell>
              <TableCell>{exam.startTime} - {exam.endTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {exams.length === 0 && (
        <p className="text-center mt-4 text-gray-500">No exams found matching your search criteria.</p>
      )}
    </div>
  );
}