"use client";

import { useState } from 'react';
import SearchForm from '@/components/SearchForm';
import ExamTable from '@/components/ExamTable';
import { Exam } from '@/lib/definitions';

interface SearchParams {
  details: string;
  date: string;
}

export default function Home() {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    details: '',
    date: '',
  });
  const [filteredExams, setFilteredExams] = useState<Exam[]>([]);
  const [searched, setSearched] = useState<boolean>(false);
  const [resetPageTrigger, setResetPageTrigger] = useState<boolean>(false);

  const handleSearch = async () => {
    if (!searchParams.details && !searchParams.date && filteredExams.length === 0) {
      return;
    }
    const trimmedSearchParams = {
      ...searchParams,
      details: searchParams.details.trim(),
    };

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
      setSearched(true);
      setResetPageTrigger(prevState => !prevState);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchParams(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto my-6 py-4 px-10 rounded-3xl bg-white">
      <SearchForm searchParams={searchParams} onInputChange={handleInputChange} onSearch={handleSearch} />
      <ExamTable key={JSON.stringify(filteredExams)} exams={filteredExams} searched={searched} resetPageTrigger={resetPageTrigger} />
    </div>
  );
}