import { http, HttpResponse } from 'msw';
import { delayForDevelopment } from '.';
import { mockPreferItems } from '../mock-data/goodsList.mock';

interface PreferItemRequest {
  centerId: number;
  itemName: string;
}

export const preferItemHandlers = [
  http.post('/api/preferItem', async ({ request }) => {
    const requestData = (await request.json()) as PreferItemRequest;
    console.log('MSW Handler - Request Data:', requestData);

    await delayForDevelopment();

    if (!requestData.centerId || !requestData.itemName.trim()) {
      return new HttpResponse(null, {
        status: 400,
        statusText: '잘못된 요청입니다.'
      });
    }

    return HttpResponse.json(
      {
        code: 200,
        message: '선호물품 등록 성공',
        data: [{}, {}]
      },
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }),

  http.get('/api/preferItem/:centerId', async ({ params }) => {
    const { centerId } = params;
    console.log('MSW Handler - CenterId:', centerId);

    await delayForDevelopment();

    const itemData = mockPreferItems[centerId as string];
    console.log('MSW Handler - Item Data:', itemData);

    if (!itemData) {
      return new HttpResponse(null, {
        status: 404,
        statusText: '선호물품 목록을 조회할 수 없습니다.'
      });
    }

    return HttpResponse.json(
      {
        code: 200,
        message: '선호물품 목록 조회 성공',
        data: {
          prefer_item: itemData
        }
      },
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  })
];
