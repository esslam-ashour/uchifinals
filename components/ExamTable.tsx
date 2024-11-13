import { useState, useEffect } from 'react';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Pagination from '@/components/Pagination';
import { Exam } from '@/lib/definitions';
import ExamRow from '@/components/ExamRow';

interface ExamTableProps {
  exams: Exam[];
  searched: boolean;
  resetPageTrigger: boolean;
}

export default function ExamTable({ exams, searched, resetPageTrigger }: ExamTableProps) {
  const [currentPage, setCurrentPage] = useState(1); // Internal state for pagination
  const examsPerPage = 10;

  const currentExams = exams.slice(
    (currentPage - 1) * examsPerPage,
    currentPage * examsPerPage
  );

  // Reset page number when search is triggered
  // This is necessary to avoid showing an empty page when the number of pages changes
  useEffect(() => {
    setCurrentPage(1);
  }, [resetPageTrigger]);

  return (
    <div className="overflow-x-auto">
      <div className="responsive-table">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="px-4 py-2">Course</TableHead>
              <TableHead className="px-4 py-2">Instructor</TableHead>
              <TableHead className="px-4 py-2">Location</TableHead>
              <TableHead className="px-4 py-2">Date</TableHead>
              <TableHead className="px-4 py-2">Time</TableHead>
              <TableHead className="px-4 py-2"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentExams.map((exam) => (
              <ExamRow key={exam.id} exam={exam} />
            ))}
          </TableBody>
        </Table>
      </div>
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