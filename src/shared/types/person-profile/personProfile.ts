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

export interface interestCenterType {
  id: string;
  name: string;
  imgUrl?: string;
}

export interface reviewType {
  id: string;
  title: string;
  createdTime: string;
  writer?: string;
}
