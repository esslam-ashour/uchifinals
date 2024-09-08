import { Url } from "next/dist/shared/lib/router/router";

type examTime = string;

export interface Exam {
  course: string;
  section: string;
  sectionTitle: string;
  instructor: string;
  startTime: examTime;
  endTime: examTime;
  date: string;
  room: string;
  [key: string]: string;
}

export interface location {
  building: string;
  mapLink?: Url;
}