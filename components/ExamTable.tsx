import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { locations } from '@/data/locations';
import { Exam } from '@/lib/definitions';

export default function ExamTable({ exams }: { exams: Exam[] }): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);
  const [highlightedButton, setHighlightedButton] = useState<number | null>(null);

  const examsPerPage = 10;
  const totalPages = Math.ceil(exams.length / examsPerPage);

  const currentExams = exams.slice((currentPage - 1) * examsPerPage, currentPage * examsPerPage);

  const maxVisiblePages = 10;
  const startPage = Math.floor((currentPage - 1) / maxVisiblePages) * maxVisiblePages + 1;
  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setHighlightedButton(page);
  };

  const handleNextPageGroup = () => {
    const nextPage = endPage + 1;
    if (nextPage <= totalPages) {
      setCurrentPage(nextPage);
      setHighlightedButton(null); 
    }
  };

  const handlePreviousPageGroup = () => {
    const previousPage = startPage - 1;
    if (previousPage > 0) {
      setCurrentPage(previousPage);
      setHighlightedButton(null);  
    }
  };

  return (
    <div>
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
          {currentExams.map(exam => (
            <TableRow key={exam.id}>
              <TableCell><span className='font-bold'>{exam.course}/{exam.section}</span> <br /> {exam.sectionTitle}</TableCell>
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
              <TableCell className="whitespace-nowrap">{exam.date.toString().split('T')[0]}</TableCell>
              <TableCell>{exam.startTime} - {exam.endTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {exams.length === 0 && (
        <p className="text-center mt-4 text-gray-500">No exams found matching your search criteria.</p>
      )}

      <div className="flex justify-center items-center space-x-2 mt-4">
        {startPage > 1 && (
          <button className="px-3 py-1 border rounded-3xl" onClick={handlePreviousPageGroup}>
            ...
          </button>
        )}

        {
        Array.from({ length: endPage - startPage + 1 }, (_, idx) => {
          const page = startPage + idx;
          return (
            <button
              key={page}
              className={`px-3 py-1 border rounded-3xl hover:bg-blue-500 hover:text-white duration-300 ${highlightedButton === page ? 'bg-blue-500 text-white' : ''}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          );
        })}

        {endPage < totalPages && (
          <button className="px-3 py-1 border rounded-3xl" onClick={handleNextPageGroup}>
            ...
          </button>
        )}
      </div>
    </div>
  );
}