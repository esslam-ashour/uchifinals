"use client";

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button'; 

interface SearchFormProps {
  searchParams: { details: string; date: string; };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

export default function SearchForm({ searchParams, onInputChange, onSearch }: SearchFormProps): React.ReactElement {
  return (
    <div className="container my-6 py-2 px-2 md:px-4 lg:px-6 rounded-3xl bg-white">
      <form className="grid grid-rows-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6 md:mb-1">
        <div className="row-span-1 md:col-span-3 lg:col-span-5">
          <Input
            id="details"
            name="details"
            value={searchParams.details}
            onChange={onInputChange}
            placeholder="Search by course name, course number, instructor name, or room..."
          />
        </div>
        <div className="row-span-1 md:col-span-1 lg:col-span-1 w-full">
          <Input
            id="date"
            name="date"
            type="date"
            value={searchParams.date}
            onChange={onInputChange}
          />
        </div>
      </form>

      <div className="flex justify-center">
        <Button
          onClick={onSearch}
          className="w-full md:w-1/2 lg:w-1/3 bg-[#800000] text-white px-4 py-2 rounded-3xl hover:bg-[#800000bb] transition-all duration-300"
        >
          Search
        </Button>
      </div>
    </div>
  );
}