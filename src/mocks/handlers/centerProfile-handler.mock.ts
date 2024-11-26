import { http, HttpResponse } from 'msw';
import { centerProfileData } from '../mock-data/centerProfile.mock';
import { delayForDevelopment } from '.';

export const centerProfileHandlers = [
  http.get('/api/center/profile/:centerId', async ({ params }) => {
    const { centerId } = params;
    console.log('MSW Handler - CenterId:', centerId); // 파라미터 확인

    await delayForDevelopment();

    const centerData = centerProfileData[centerId as string];
    console.log('MSW Handler - Center Data:', centerData); // 반환할 데이터 확인

    if (!centerData) {
      return new HttpResponse(null, {
        status: 404,
        statusText: '센터를 조회할 수 없습니다.'
      });
    }

    return HttpResponse.json(centerData, {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  })
];
