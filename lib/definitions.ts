import { Url } from "next/dist/shared/lib/router/router";

type examTime = string;

export interface Exam {
  [key: string]: string;
  course: string;
  section: string;
  sectionTitle: string;
  instructor: string;
  startTime: examTime;
  endTime: examTime;
  date: string;
  room: string;
}

export interface location {
  building: string;
  mapLink?: Url;
}