export interface CenterProfile {
  centerId: string;
  name: string;
  contact_number: string;
  introduce: string;
  prefer_item: string[];
  account_id: string;
  prefer_item_id: number;
  item_name: string;
}

export const centerProfileData: Record<string, object> = {
  '1': {
    data: {
      center_id: 1,
      name: '해피키즈 센터',
      contact_number: '010-1234-5678',
      homepage_link: 'https://happykids.center.com',
      introduce:
        '아이들의 건강한 성장을 돕는 전문 아동발달센터입니다. 10년 이상의 전문 경력을 가진 선생님들이 함께합니다.',
      prefer_item: [
        { prefer_item_id: 1, item_name: '교육 도구' },
        { prefer_item_id: 2, item_name: '학습 자료' }
      ]
    }
  },
  '2': {
    data: {
      center_id: 2,
      name: '마인드케어 상담소',
      contact_number: '010-9876-5432',
      homepage_link: 'https://mindcare.center.com',
      introduce: '전문 상담사와 함께하는 심리상담 센터입니다. 개인상담, 가족상담, 집단상담 프로그램을 운영합니다.',
      prefer_item: [
        { prefer_item_id: 1, item_name: '심리 테스트' },
        { prefer_item_id: 2, item_name: '상담 도구' }
      ]
    }
  },
  '3': {
    data: {
      center_id: 3,
      name: '스마트 러닝센터',
      contact_number: '010-5555-4444',
      homepage_link: 'https://smartlearn.center.com',
      introduce: '최신 교육 방법론을 적용한 맞춤형 학습지도 센터입니다. 1:1 개인지도와 소그룹 수업을 진행합니다.',
      prefer_item: [
        { prefer_item_id: 1, item_name: '온라인 학습 자료' },
        { prefer_item_id: 2, item_name: '교재' }
      ]
    }
  },
  '4': {
    data: {
      center_id: 4,
      name: '웰니스 피트니스',
      contact_number: '010-7777-8888',
      homepage_link: 'https://wellness.center.com',
      introduce: '전문 트레이너와 함께하는 건강관리 센터입니다. 개인 PT, 그룹 운동, 식단관리 서비스를 제공합니다.',
      prefer_item: [
        { prefer_item_id: 1, item_name: '운동 기구' },
        { prefer_item_id: 2, item_name: '식단 플랜' }
      ]
    }
  },
  '5': {
    data: {
      center_id: 5,
      name: '아트앤뮤직 스튜디오',
      contact_number: '010-2222-3333',
      homepage_link: 'https://artmusic.center.com',
      introduce: '음악과 미술을 통한 창의력 개발 센터입니다. 연령별 맞춤 프로그램으로 예술적 감각을 키워드립니다.',
      prefer_item: [
        { prefer_item_id: 1, item_name: '미술 재료' },
        { prefer_item_id: 2, item_name: '악기' }
      ]
    }
  }
};
