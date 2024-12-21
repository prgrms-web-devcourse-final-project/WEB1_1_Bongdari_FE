export interface Volunteer {
  id: string;
  name: string;
  nickname: string;
  email: string;
  img_url: string;
}

export interface VolunteerApply {
  id: number;
  recruit_board_id: number;
  status: 'WAITING' | 'APPROVED' | 'REJECTED';
  attend: boolean;
  created_at: string;
  updated_at: string;
  volunteer: Volunteer;
}

export interface VolunteerApplyParams {
  recruitBoardId: number;
  page: number;
  size: number;
  status?: 'WAITING' | 'APPROVED' | 'REJECTED';
  attended?: boolean;
}

// 지원자 리스트 상세 모달 api
export interface ApplicantDetailInfo {
  volunteer_id: string;
  nickname: string;
  img_url: string;
  introduce: string;
  tier: string;
  total_volunteer_hours: number;
  total_volunteer_count: number;
  detail: {
    name: string;
    email: string;
    gender: 'MALE' | 'FEMALE';
    birth_date: string;
    contact_number: string;
  };
}
