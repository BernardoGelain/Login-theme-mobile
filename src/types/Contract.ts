export interface Contract {
  id: number;
  start_date: string | null;
  end_date: string | null;
  description: string;
  amount: number | null;
  active: boolean;
  status: string;
  measurement_criteria: string;
  hired_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}
