import { http, HttpResponse } from 'msw';

// post 요청 body 타입 정의
interface PreferItemRequest {
  item_name: string;
}

let currentProfileData = {
  center_id: 'B84733D0-AE17-11EF-AA15-0A855994FB4B',
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
};

export const centerHandlers = [
  // 기관 프로필 get
  http.get('https://api.somemore.site/api/center/profile/:centerId', () => {
    return HttpResponse.json({
      code: 200,
      message: '조회 성공',
      data: currentProfileData
    });
  }),

  // 기관 프로필 put
  http.put('https://api.somemore.site/api/center/profile', async ({ request }) => {
    const formData = await request.formData();
    const jsonData = JSON.parse(formData.get('data') as string);
    const imgFile = formData.get('img_file');

    // 현재 상태 업데이트
    currentProfileData = {
      ...currentProfileData,
      name: jsonData.name,
      contact_number: jsonData.contact_number,
      homepage_link: jsonData.homepage_link,
      introduce: jsonData.introduce,
      img_url: imgFile ? 'https://updated-image-url.jpg' : currentProfileData.img_url
    };

    return HttpResponse.json({
      code: 200,
      message: '요청 성공',
      data: currentProfileData
    });
  }),

  // 기관 마이페이지 선호물품 post
  http.post('https://api.somemore.site/api/preferItem', async ({ request }) => {
    const requestData = (await request.json()) as PreferItemRequest;

    return HttpResponse.json({
      code: 200,
      message: '요청 성공',
      data: {
        id: 111,
        center_id: 'B84733D0-AE17-11EF-AA15-0A855994FB4B',
        item_name: requestData.item_name
      }
    });
  })
];
