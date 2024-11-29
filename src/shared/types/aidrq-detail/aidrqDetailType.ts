interface Location {
  address: string;
  latitude: number;
  longitude: number;
}

// 봉사활동 센터 정보 타입
interface Center {
  id: number;
  name: string;
  introduce: string;
  prefer_items: string[];
  homepage_link: string;
  img_url: string;
  is_interested: boolean;
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
  volunteer_type: VolunteerType;
  volunteer_time: string; // ISO 8601 duration format
  admitted: boolean;
  img_url: string;
  location: Location;
  center: Center;
}
