interface Location {
  address: string;
  latitude: number;
  longitude: number;
}

// 봉사활동 상세 정보 타입
export interface AidRqDetailType {
  id: number;
  title: string;
  content: string;
  recruitment_count: number;
  recruit_status: string;
  volunteer_start_date_time: string;
  volunteer_end_date_time: string;
  created_at: string;
  updated_at: string;
  volunteer_category: string;
  volunteer_hours: number;
  admitted: boolean;
  img_url: string;
  location: Location;
  region: string;
}

//수정 시에 location 제외한 수정가능 데이터 타입
export interface RegularData {
  title: string;
  content: string;
  region: string;
  recruitment_count: number;
  volunteer_start_date_time: string;
  volunteer_end_date_time: string;
  volunteer_category: string;
  admitted: boolean;
}
