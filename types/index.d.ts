export type Todo = {
  id: number;
  name: string;
  is_complete: boolean;
  note: string;
  created_at: Date;
  updated_at: Date;
};

export type TodoDto = {
  id?: number;
  name?: string;
  is_complete?: boolean;
  note?: string;
};

export interface TodoCardProps {
  id: number;
  isDone: boolean;
  name: string;
  note: string;
  mutate: () => {};
}
