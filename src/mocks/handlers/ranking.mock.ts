import { http, HttpResponse } from 'msw';

import { RankingResponse } from '@/shared/types/ranking-data/RankingDataType';

const DUMMY_RANKING_LIST: RankingResponse = {
  volunteer_total_ranking_response: [
    {
      volunteerId: 'c6893199-9f2a-43a8-996a-b81fd8f6f777',
      totalHours: 100,
      ranking: 1,
      nickname: '봉사자1'
    },
    {
      volunteerId: 'c6893199-9f2a-43a8-996a-b81fd8f6f777',
      totalHours: 100,
      ranking: 1,
      nickname: '봉사자3'
    },
    {
      volunteerId: '899dc77c-7ea5-4279-ac41-3247cc9f97ad',
      totalHours: 90,
      ranking: 2,
      nickname: '봉사자2'
    },
    {
      volunteerId: '899dc77c-7ea5-4279-ac41-3247cc9f97ad',
      totalHours: 90,
      ranking: 2,
      nickname: '봉사자9'
    },
    {
      volunteerId: '899dc77c-7ea5-4279-ac41-3247cc9f97ad',
      totalHours: 80,
      ranking: 3,
      nickname: '봉사자10'
    },
    {
      volunteerId: '899dc77c-7ea5-4279-ac41-3247cc9f97ad',
      totalHours: 70,
      ranking: 4,
      nickname: '봉사자11'
    }
  ],
  volunteer_monthly_ranking_response: [
    {
      volunteerId: 'f34d5925-399c-4aca-b86d-4cc5977ffcf7',
      totalHours: 50,
      ranking: 1,
      nickname: '봉사자3'
    },
    {
      volunteerId: 'f34d5925-399c-4aca-b86d-4cc5977ffcf7',
      totalHours: 50,
      ranking: 1,
      nickname: '봉사자32'
    },
    {
      volunteerId: 'b6f17ab1-31e7-41d5-8fb3-919aede5d39b',
      totalHours: 40,
      ranking: 2,
      nickname: '봉사자4'
    },
    {
      volunteerId: 'b6f17ab1-31e7-41d5-8fb3-919aede5d39b',
      totalHours: 30,
      ranking: 3,
      nickname: '봉사자7'
    },
    {
      volunteerId: 'b6f17ab1-31e7-41d5-8fb3-919aede5d39b',
      totalHours: 20,
      ranking: 4,
      nickname: '봉사자8'
    },
    {
      volunteerId: 'f34d5925-399c-4aca-b86d-4cc5977ffcf7',
      totalHours: 20,
      ranking: 4,
      nickname: '봉사자36'
    }
  ],
  volunteer_weekly_ranking_response: [
    {
      volunteerId: 'e15973b4-8b9e-47a8-bae8-3659b9733151',
      totalHours: 30,
      ranking: 1,
      nickname: '봉사자5'
    },
    {
      volunteerId: '5cadf076-bdb0-4242-a9d2-929a9f092c0f',
      totalHours: 20,
      ranking: 2,
      nickname: '봉사자6'
    },
    {
      volunteerId: 'e15973b4-8b9e-47a8-bae8-3659b9733151',
      totalHours: 10,
      ranking: 3,
      nickname: '봉사자5'
    },
    {
      volunteerId: 'e15973b4-8b9e-47a8-bae8-3659b9733151',
      totalHours: 10,
      ranking: 3,
      nickname: '봉사자58'
    },
    {
      volunteerId: '5cadf076-bdb0-4242-a9d2-929a9f092c0f',
      totalHours: 5,
      ranking: 4,
      nickname: '봉사자6'
    }
  ]
};

export const rankingHandlers = [
  // 기관 프로필 get
  http.get('https://api.somemore.site/api/volunteerrecord/ranking', () => {
    return HttpResponse.json({
      code: 200,
      message: '조회 성공',
      data: DUMMY_RANKING_LIST
    });
  })
];
