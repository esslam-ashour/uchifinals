import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Pagination from '@/components/Pagination';
import { locations } from '@/data/locations';
import { Exam } from '@/lib/definitions';

interface ExamTableProps {
  exams: Exam[];
  loading: boolean;
  searched: boolean;
}

export default function ExamTable({ exams, loading, searched }: ExamTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const examsPerPage = 10;

  const currentExams = exams.slice((currentPage - 1) * examsPerPage, currentPage * examsPerPage);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Course</TableHead>
            <TableHead>Instructor</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentExams.map((exam) => (
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
          ))}
        </TableBody>
      </Table>

      {exams.length === 0 && <p className="text-center mt-4 text-gray-500">{searched ? "No exams found matching your search criteria." : "Start searching to view results."}</p>}

      <Pagination totalItems={exams.length} itemsPerPage={examsPerPage} currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
}