"use client";

import { useState, useEffect } from 'react';
import SearchForm from '@/components/SearchForm';
import ExamTable from '@/components/ExamTable';
import { Exam } from '@/lib/definitions';

export default function Home() {
  const [searchParams, setSearchParams] = useState({
    details: '',
    date: '',
  });
  const [filteredExams, setFilteredExams] = useState<Exam[]>([]);
  const [loading, setLoading] = useState(true);

  const handleSearch = async () => {
    setLoading(true);
    const trimmedSearchParams = {
      ...searchParams,
      details: searchParams.details.trim(),
    }

    try {
      const query = new URLSearchParams(trimmedSearchParams).toString();
      const res = await fetch(`/api/exams?${query}`);
      if (res.ok) {
        const data = await res.json();
        setFilteredExams(data);
      } else {
        console.error('Failed to fetch exams');
      } 
    } catch (error) {
      console.error('Error fetching exams: ', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchParams(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }
  
  return (
    <div className="container mx-auto my-6 py-4 px-10 rounded-3xl bg-white">
      <SearchForm searchParams={searchParams} onInputChange={handleInputChange} onSearch={handleSearch}  />
      <ExamTable exams={filteredExams} loading={loading} />
    </div>
  );
}