import { render, screen, fireEvent } from '@testing-library/react';
import ExamTable from '@/components/ExamTable';
import Exam from '@/lib/types';

const mockExams: Exam[] = [
  { id: '1', course: 'Math 101', section: "1", sectionTitle: "Intro to Math", instructor: 'John Doe', startTime: '10:00:00', endTime: '12:00:00', date: '2023-12-01', room: 'Room 101' },
  { id: '2', course: 'Physics 201', instructor: 'Jane Smith', location: 'Room 102', date: '2023-12-02', time: '11:00 AM' },
  // Add more mock exams as needed
];

describe('ExamTable', () => {
  it('renders the table headers correctly', () => {
    render(<ExamTable exams={mockExams} searched={false} resetPageTrigger={false} />);
    expect(screen.getByText('Course')).toBeInTheDocument();
    expect(screen.getByText('Instructor')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Time')).toBeInTheDocument();
  });

  it('renders the correct number of exam rows', () => {
    render(<ExamTable exams={mockExams} searched={false} resetPageTrigger={false} />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(mockExams.length + 1); // +1 for the header row
  });

  it('displays a message when no exams are found', () => {
    render(<ExamTable exams={[]} searched={true} resetPageTrigger={false} />);
    expect(screen.getByText('No exams found matching your search criteria.')).toBeInTheDocument();
  });

  it('displays a message when no search has been made', () => {
    render(<ExamTable exams={[]} searched={false} resetPageTrigger={false} />);
    expect(screen.getByText('Start searching to view results.')).toBeInTheDocument();
  });

  it('resets to the first page when resetPageTrigger changes', () => {
    const { rerender } = render(<ExamTable exams={mockExams} searched={false} resetPageTrigger={false} />);
    fireEvent.click(screen.getByText('2')); // Assuming there's a button to go to page 2
    rerender(<ExamTable exams={mockExams} searched={false} resetPageTrigger={true} />);
    expect(screen.getByText('1')).toHaveClass('active'); // Assuming the active page button has a class 'active'
  });
});