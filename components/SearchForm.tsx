"use client";

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button'; 

interface SearchFormProps {
  searchParams: { details: string; date: string; };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

export default function SearchForm({ searchParams, onInputChange, onSearch }: SearchFormProps): React.ReactElement {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <div className="container my-6 py-4 px-4 md:px-10 bg-white">
      <form className="grid grid-rows-2 md:grid-cols-4 lg:grid-cols-6 gap-4" onSubmit={handleSubmit}>
        <div className="row-span-2 mb-6 md:col-span-4 lg:col-span-6">
          <Input
            id="details"
            name="details"
            value={searchParams.details}
            onChange={onInputChange}
            placeholder="Search by course name, course number, instructor name, or room..."
            className="w-full"
          />
        </div>
      </form>

      <div className="flex justify-center">
        <Button
          onClick={onSearch}
          className="w-full my-4 md:my-auto lg:my-auto bg-[#800000] text-white rounded-3xl hover:bg-[#800000bb] transition-all duration-300"
        >
          Search
        </Button>
      </div>
    </div>
  );
}