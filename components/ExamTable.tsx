import { useState } from 'react';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Pagination from '@/components/Pagination';
import { Exam } from '@/lib/definitions';
import ExamRow from '@/components/ExamRow';

interface ExamTableProps {
  exams: Exam[];
  loading: boolean;
  searched: boolean;
}

export default function ExamTable({ exams, loading, searched }: ExamTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const examsPerPage = 10;

  const currentExams = exams.slice(
    (currentPage - 1) * examsPerPage, currentPage * examsPerPage
  );

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
        <ExamRow key={exam.id} exam={exam} />
        ))}
      </TableBody>
      </Table>

      {exams.length === 0 && (
      <p className="text-center mt-4 text-gray-500">
        {searched ? "No exams found matching your search criteria." : "Start searching to view results."}
      </p>
      )}

      <Pagination
      totalItems={exams.length}
      itemsPerPage={examsPerPage}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      />
    </div>
  );
}