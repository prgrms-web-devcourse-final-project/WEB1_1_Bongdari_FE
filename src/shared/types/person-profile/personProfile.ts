// 타인의 개인프로필/마이 페이지 api type

export type tierType = 'NONE' | 'WHITE' | 'RED' | 'ORANGE' | 'YELLOW' | 'GREEN' | 'BLUE' | 'NAVY' | 'PURPLE';

export interface personProfileType {
  volunteer_id: string;
  nickname: string;
  img_url?: string;
  introduce?: string;
  tier: tierType;
  total_volunteer_hours?: number;
  total_volunteer_count?: number;
  detail: personProfileDetailType | null;
}

interface personProfileDetailType {
  name: string;
  email: string;
  gender: 'male' | 'female';
  birthDate: string;
  contactNumber: string;
}

export interface myVolunteerType {
  id: number;
  volunteer_id: string;
  status: 'WAITING' | 'APPROVED' | 'REJECTED';
  attend: boolean;
  created_at: string;
  updated_at: string;
  recruit_board: {
    id: number;
    title: string;
  };
}

export interface myMessageType {
  id: number;
  title: string;
  sender_id: string;
  sender_name: string;
  is_read: boolean;
}

export interface myMessageDetailType {
  note_id: number;
  title: string;
  content: string;
  sender_id: string;
  sender_name: string;
  sender_profile_img_link: string;
  created_at: string;
}

export interface interestCenterType {
  center_id: string;
  center_name: string;
  img_url: string;
}

export interface reviewType {
  id: number;
  volunteer_id: string;
  volunteer_nickname: string;
  title: string;
  content: string;
  img_url: string;
  created_at: string;
  update_at: string;
}
