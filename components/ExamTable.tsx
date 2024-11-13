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
  const [currentPage, setCurrentPage] = useState(1);
  const examsPerPage = 10;

  const currentExams = exams.slice(
    (currentPage - 1) * examsPerPage,
    currentPage * examsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [resetPageTrigger]);

  return (
    <div className="flex flex-col h-[calc(100vh-16rem)]">
      <div className="flex-1 min-h-0">
        <div className="h-full overflow-y-auto">
          <Table className="min-w-full border-collapse">
            <TableHeader className="sticky top-0 bg-white z-10 hidden sm:table-header-group">
              <TableRow className="sm:table-row">
                <TableHead className="w-1/4 px-4 py-2 text-left text-sm font-medium">Course</TableHead>
                <TableHead className="w-1/6 px-4 py-2 text-left text-sm font-medium">Instructor</TableHead>
                <TableHead className="w-1/6 px-4 py-2 text-left text-sm font-medium">Location</TableHead>
                <TableHead className="w-1/6 px-4 py-2 text-left text-sm font-medium">Date</TableHead>
                <TableHead className="w-1/6 px-4 py-2 text-left text-sm font-medium">Time</TableHead>
                <TableHead className="w-1/6 px-4 py-2 text-left text-sm font-medium"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentExams.map((exam) => (
                <ExamRow key={exam.id} exam={exam} />
              ))}
            </TableBody>
          </Table>
          {exams.length === 0 && (
            <p className="text-center mt-4 text-gray-500 text-sm">
              {searched ? "No exams found matching your search criteria." : "Start searching to view results."}
            </p>
          )}
        </div>
      </div>
      <div className="mt-4 py-2 bg-white">
        <Pagination
          totalItems={exams.length}
          itemsPerPage={examsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}