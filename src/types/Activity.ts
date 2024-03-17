import { Contract } from "./Contract";
import { SubDiscipline } from "./SubDiscipline";

export interface Activity {
  id: string;
  name: string;
  status_id: number;
  wbs: any; //  o tipo esperado
  baseline_start_date: string | null;
  baseline_completion_date: string | null;
  current_re_baselined_start: string | null;
  current_re_baselined_completion: string | null;
  forecast_start: string | null;
  forecast_completion: string | null;
  actual_start: string | null;
  actual_completion: string | null;
  early_start: string | null;
  early_completion: string | null;
  late_start: string | null;
  late_completion: string | null;
  total_float: number | null;
  cwp_id: number;
  ewp_id: number | null;
  iwp_id: number | null;
  pwp_id: number | null;
  estimate_hours: string;
  contract_reference: string | null;
  contract_id: number | null;
  percent_complete: string;
  type: string;
  code: string;
  predecessor: any; //  o tipo esperado
  sub_discipline_id: number;
  project_information_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  unit_id: number | null;
  percentual: number | null;
  cost: number | null;
  quantity: number | null;
  wp_code: string;
  responsible_name: string | null;
  parent_activity: any; //  o tipo esperado
  contract?: Contract;
  sub_discipline: SubDiscipline;
  measure: any; //  o tipo esperado
  cwp: any; //  o tipo esperado
  unit: any; //  o tipo esperado
}
