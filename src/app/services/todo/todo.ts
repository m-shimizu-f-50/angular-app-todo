export interface Todo {
  id: number;
  status: number;
  category?: { name: string; displayName: string };
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}
