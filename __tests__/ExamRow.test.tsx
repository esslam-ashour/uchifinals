import { render, screen, fireEvent } from '@testing-library/react';
import ExamRow from '@/components/ExamRow';
import '@testing-library/jest-dom';
import Exam from '@/lib/types';

jest.mock('@/lib/calendar-utils', () => ({
  createCalendarEvent: jest.fn(),
  generateGoogleCalendarUrl: jest.fn(() => 'http://google.com'),
  downloadICSFile: jest.fn(),
  formatDate: jest.fn((date) => date),
  formatTime: jest.fn((time) => time),
}));

describe('ExamRow', () => {
  const exam: Exam = {
    id: '1',
    course: 'Math 101',
    section: 'A',
    sectionTitle: 'Introduction to Math',
    instructor: 'John Doe',
    room: 'Room 101',
    date: '2023-10-10',
    startTime: '10:00',
    endTime: '12:00',
  };

  it('renders exam details correctly', () => {
    render(<ExamRow exam={exam} />);

    expect(screen.getByText('Math 101/A')).toBeInTheDocument();
    expect(screen.getByText('Introduction to Math')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Room 101')).toBeInTheDocument();
    expect(screen.getByText('2023-10-10')).toBeInTheDocument();
    expect(screen.getByText('10:00 - 12:00')).toBeInTheDocument();
  });

  it('opens Google Calendar when Google Calendar option is clicked', () => {
    render(<ExamRow exam={exam} />);

    fireEvent.click(screen.getByText('Add to calendar'));
    fireEvent.click(screen.getByText('Google Calendar'));

    expect(window.open).toHaveBeenCalledWith('http://google.com', '_blank');
  });

  it('downloads ICS file when Apple Calendar option is clicked', () => {
    render(<ExamRow exam={exam} />);

    fireEvent.click(screen.getByText('Add to calendar'));
    fireEvent.click(screen.getByText('Apple Calendar'));

    expect(require('@/lib/calendar-utils').downloadICSFile).toHaveBeenCalled();
  });
});