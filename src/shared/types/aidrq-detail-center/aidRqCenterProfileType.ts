export interface aidRqCenterProfileType {
  // 고유 식별자
  id: number;

  // 조직/회사명
  name: string;

  // 소개글
  introduce: string;

  // 선호 아이템 목록
  prefer_items: string[];

  // 홈페이지 URL
  homepage_link: string;

  // 이미지 URL
  img_url: string;

  // 관심 여부
  is_interested: boolean;
}
