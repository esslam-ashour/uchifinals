"use client";

import { useState, useEffect } from 'react';
import SearchForm from '@/components/SearchForm';
import ExamTable from '@/components/ExamTable';
import { Exam } from '@/lib/definitions';

export default function Home() {
  const [searchParams, setSearchParams] = useState({
    course: '',
    instructor: '',
    room: '',
    date: '',
  });
  const [filteredExams, setFilteredExams] = useState<Exam[]>([]);
  const [loading, setLoading] = useState(true);

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
          console.log('An error occurred while fetching exams');
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
      <SearchForm searchParams={searchParams} onInputChange={handleInputChange} />
      <ExamTable exams={filteredExams} loading={loading} />
    </div>
  );
}