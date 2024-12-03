import type { Center } from '../aidrq-list-item/aidrqListItemType';
import type { Location } from './activityLocation';

export type VolunteerType =
  | 'LIVING_SUPPORT'
  | 'HOUSING_ENVIRONMENT'
  | 'COUNSELING'
  | 'EDUCATION'
  | 'HEALTHCARE'
  | 'RURAL_SUPPORT'
  | 'CULTURAL_EVENT'
  | 'ENVIRONMENTAL_PROTECTION'
  | 'ADMINISTRATIVE_SUPPORT'
  | 'SAFETY_PREVENTION'
  | 'PUBLIC_INTEREST_HUMAN_RIGHTS'
  | 'DISASTER_RELIEF'
  | 'MENTORING'
  | 'OTHER';

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface GetActivitiesParams {
  latitude: number;
  longitude: number;
  radius?: number;
  page?: number;
  size?: number;
}

// export interface Activity {
//   id: number;
//   title: string;
//   content: string;
//   location: {
//     latitude: number;
//     longitude: number;
//   };
// }

export interface Activity {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  content: string;
  region: string;
  recruit_status: 'RECRUITING' | 'CLOSED' | 'COMPLETED';
  recruitment_count: number;
  volunteer_start_date_time: string;
  volunteer_end_date_time: string;
  volunteer_category: VolunteerType;
  volunteer_time: string;
  admitted: boolean;
  img_url: string;
  center: Center;
  location: Location;
}
