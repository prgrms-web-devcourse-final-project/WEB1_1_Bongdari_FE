export interface Center {
  id: string;
  name: string;
}

export interface AidRequest {
  id: number;
  title: string;
  content: string;
  region: string;
  volunteer_start_date_time: string;
  volunteer_end_date_time: string;
  created_at: string;
  updated_at: string;
  volunteer_type: string;
  volunteer_time: string;
  admitted: boolean;
  center: Center;
}
