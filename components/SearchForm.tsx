"use client";

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface SearchFormProps {
  searchParams: { course: string; instructor: string; room: string; date: string; };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchForm({ searchParams, onInputChange }: SearchFormProps): React.ReactElement {
  return (
      <div className="container mx-auto my-6 py-4 px-10 rounded-3xl bg-white">
        <form className="grid gap-4 mb-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Label htmlFor="course">Course</Label>
            <Input
              id="course"
              name="course"
              value={searchParams.course}
              onChange={onInputChange}
              placeholder="e.g., CMSC 14100"
            />
          </div>
          <div>
            <Label htmlFor="instructor">Instructor</Label>
            <Input
              id="instructor"
              name="instructor"
              value={searchParams.instructor}
              onChange={onInputChange}
              placeholder="e.g., John Doe"
            />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="room"
              name="room"
              value={searchParams.room}
              onChange={onInputChange}
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
              onChange={onInputChange}
            />
          </div>
        </form>
      </div>
)};
