// 타인의 개인프로필/마이 페이지 api type

export interface personProfileType {
  volunteer_id: string;
  nickname: string;
  img_url?: string;
  introduce?: string;
  tier: 'none' | 'white' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'navy' | 'purple';
  total_volunteer_hours?: number;
  total_volunteer_count?: number;
  detail: personProfileDetailType;
}

interface personProfileDetailType {
  name: string;
  email: string;
  gender: 'male' | 'female';
  birthDate: string;
  contactNumber: string;
}

export interface heartedOrgType {
  id: string;
  name: string;
  imgUrl?: string;
}

export interface reviewType {
  id: string;
  title: string;
  createdTime: string;
}
