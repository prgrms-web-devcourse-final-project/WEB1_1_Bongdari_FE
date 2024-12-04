const aidrqCategoryMapping: { [key: string]: string } = {
  생활편의지원: 'LIVING_SUPPORT',
  주거환경: 'HOUSING_ENVIRONMENT',
  상담: 'COUNSELING',
  교육: 'EDUCATION',
  보건의료: 'HEALTHCARE',
  농어촌봉사: 'RURAL_SUPPORT',
  문화행사: 'CULTURAL_EVENT',
  환경보호: 'ENVIRONMENTAL_PROTECTION',
  행정보조: 'ADMINISTRATIVE_SUPPORT',
  안전예방: 'SAFETY_PREVENTION',
  공익인권: 'PUBLIC_INTEREST_HUMAN_RIGHTS',
  재해재난: 'DISASTER_RELIEF',
  멘토링: 'MENTORING',
  기타: 'OTHER'
};

export default aidrqCategoryMapping;

// 역방향 매칭 생성 -> 프론트엔드에서 표시만 하는 기능이므로 백엔드와 통신할 때는 그대로 영문 코드로 통신
export const categoryToKorean: { [key: string]: string } = Object.entries(aidrqCategoryMapping).reduce(
  (acc, [korean, english]) => ({
    ...acc,
    [english]: korean
  }),
  {}
);
