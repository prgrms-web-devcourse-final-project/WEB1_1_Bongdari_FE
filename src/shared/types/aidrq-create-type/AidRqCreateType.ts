export interface Location {
  address: string;
  latitude: number;
  longitude: number;
}

export interface VolunteerType {
  title: string;
  content: string;
  region: string;
  recruitment_count: number;
  volunteer_start_date_time: string;
  volunteer_end_date_time: string;
  volunteer_category: string;
  admitted: boolean;
  location: Location;
}
