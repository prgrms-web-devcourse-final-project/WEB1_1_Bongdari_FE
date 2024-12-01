// 타인의 개인프로필 페이지 api type
export interface personProfileType {
  id: string;
  nickname: string;
  imgUrl?: string;
  introduce?: string;
  tier: 'none' | 'white' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'navy' | 'purple';
  totalVolunteerHours?: number;
  totalVolunteerCount?: number;
}

export interface myProfileType {
  nickname: string;
  imgUrl: string;
  introduce: string;
  tier: 'none' | 'white' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'navy' | 'purple';
  totalVolunteerHours: number;
  totalVolunteerCount: number;
  details: {
    name: string;
    email: string;
    gender: 'male' | 'female';
    birthDate: string;
    contactNumber: string;
  };
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
