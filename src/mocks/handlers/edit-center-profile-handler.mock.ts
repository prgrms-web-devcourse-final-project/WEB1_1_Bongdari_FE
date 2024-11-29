import { http, HttpResponse } from 'msw';
import { delayForDevelopment } from '.';

export const centerProfileHandlers = [
  http.put('/api/center/profile/:centerId', async ({ request }) => {
    await delayForDevelopment();

    const formData = await request.formData();
    const centerDataJson = formData.get('centerData');
    const file = formData.get('file');

    console.log('MSW Handler - Received form data:', {
      centerData: centerDataJson,
      hasFile: !!file
    });

    return HttpResponse.json(
      {
        code: 200,
        message: '업데이트 성공',
        data: [{}]
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
