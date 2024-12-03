interface Location {
  address: string;
  latitude: number;
  longitude: number;
}

// 봉사활동 타입 (enum)
enum VolunteerType {
  LIVING_SUPPORT = 'LIVING_SUPPORT'
  // 다른 봉사활동 타입들도 추가 가능
}

// 봉사활동 상세 정보 타입
export interface AidRqDetailType {
  id: number;
  title: string;
  content: string;
  recruitment_count: number;
  current_recruitment_count: number;
  volunteer_start_date_time: string; // ISO 8601 format
  volunteer_end_date_time: string; // ISO 8601 format
  created_at: string; // ISO 8601 format
  updated_at: string; // ISO 8601 format
  volunteer_category: VolunteerType;
  volunteer_time: string; // ISO 8601 duration format
  admitted: boolean;
  img_url: string;
  location: Location;
}
