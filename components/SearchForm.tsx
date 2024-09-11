"use client";

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';  // Assuming you have a Button component

interface SearchFormProps {
  searchParams: { details: string; date: string; };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

export default function SearchForm({ searchParams, onInputChange, onSearch }: SearchFormProps): React.ReactElement {
  return (
    <div className="container mx-auto my-6 py-4 px-10 rounded-3xl bg-white">
      <form className="grid gap-4 mb-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Input
            id="details"
            name="details"
            value={searchParams.details}
            onChange={onInputChange}
            placeholder="Search by course, instructor or room"
          />
        </div>
        <div>
          <Label htmlFor="date">Date</Label>
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