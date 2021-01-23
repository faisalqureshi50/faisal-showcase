export default interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number;
  grade?: string;
  description?: string;
}
