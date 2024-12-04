import { http, HttpResponse } from 'msw';

export const centerHandlers = [
  http.get('https://somemore.site/api/center/profile/:centerId', ({ params }) => {
    const { centerId } = params;

    return HttpResponse.json({
      code: 200,
      message: '조회 성공',
      data: {
        center_id: centerId,
        name: '서울 도서관',
        contact_number: '010-1234-5678',
        img_url:
          'https://png.pngtree.com/png-clipart/20190614/original/pngtree-company-business-business-company-friendly-man-greeting-man-png-image_3785135.jpg',
        introduce: '서울 도서관을 소개해요',
        homepage_link: 'https://fitnesscenter.com',
        prefer_items: [
          {
            id: 1,
            centerId: 'B84733D0-AE17-11EF-AA15-0A855994FB4B',
            itemName: '도서 10권'
          },
          {
            id: 2,
            centerId: 'B84733D0-AE17-11EF-AA15-0A855994FB4B',
            itemName: '옷 10벌'
          }
        ]
      }
    });
  })
];
