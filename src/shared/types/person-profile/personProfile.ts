// 타인의 개인프로필 페이지 api type
export interface personProfileType {
  nickname: string;
  imgUrl?: string;
  introduce?: string;
  tier: 'none' | 'white' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'navy' | 'purple';
  totalVolunteerHours?: number;
  totalVolunteerCount?: number;
}
