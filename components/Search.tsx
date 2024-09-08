"use client";

import { useEffect,useState } from 'react';

import ExamTable from '@/components/ExamTable';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Exam } from '@/lib/definitions';

export default function Search(): JSX.Element {
  const [searchParams, setSearchParams] = useState({
    course: '',
    instructor: '',
    room: '',
    date: '',
  });
  const [filteredExams, setFilteredExams] = useState<Exam[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchExams = async () => {
      setLoading(true);
      try {
        const query = new URLSearchParams(searchParams as any).toString();
        const res = await fetch(`/api/exams?${query}`);
        if (res.ok) {
          const data = await res.json();
          setFilteredExams(data);
        } else {
          console.error('An error occurred while fetching exams');
        }
      } catch (error) {
        console.error('Error fetching exams: ', error);
      } finally {
        setLoading(false);
      }
    };
    fetchExams();
  }, [searchParams])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchParams(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
      <div className="container mx-auto my-6 py-4 px-10 rounded-3xl bg-white">
        <form className="grid gap-4 mb-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Label htmlFor="course">Course</Label>
            <Input
              id="course"
              name="course"
              value={searchParams.course}
              onChange={handleInputChange}
              placeholder="e.g., CMSC 14100"
            />
          </div>
          <div>
            <Label htmlFor="instructor">Instructor</Label>
            <Input
              id="instructor"
              name="instructor"
              value={searchParams.instructor}
              onChange={handleInputChange}
              placeholder="e.g., John Doe"
            />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="room"
              name="room"
              value={searchParams.room}
              onChange={handleInputChange}
              placeholder="e.g., Kent 107"
            />
          </div>
          <div>
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              name="date"
              type="date"
              value={searchParams.date}
              onChange={handleInputChange}
            />
          </div>
        </form>
          <ExamTable exams={filteredExams} />
      </div>
)};
