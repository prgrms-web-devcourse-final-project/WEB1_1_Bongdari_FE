// import { http, HttpResponse } from 'msw';
// import type { RecruitAPIState } from '@/shared/mapping/aid-recruit-status-mapping';

// // 현재 모집글 데이터
// let currentRecruitData = {
//   id: 11,
//   center_id: 'B8473384-AE17-11EF-AA15-0A855994FB4B',
//   created_at: '2024-12-01T09:00:00',
//   updated_at: '2024-12-01T09:00:00',
//   title: '일과 적의 봉사',
//   content: '도서 공연에서 일과 적의 봉사',
//   region: '서울특별시',
//   recruit_status: 'RECRUITING' as RecruitAPIState,
//   recruitment_count: 5,
//   volunteer_start_date_time: '2024-12-01T09:00:00',
//   volunteer_end_date_time: '2024-12-01T13:00:00',
//   volunteer_category: 'LIVING_SUPPORT',
//   volunteer_time: '04:00:00',
//   admitted: true,
//   img_url: 'https://image.domain.com/links',
//   location: {
//     address: '서울특별시 강남구 테헤란로 123',
//     latitude: 37.5665,
//     longitude: 126.978
//   }
// };

// export const recruitBoardHandlers = [
//   // 봉사 모집글 상세 조회
//   http.get('https://api.somemore.site/api/recruit-board/:id', ({ params }) => {
//     const { id } = params;

//     if (id === '123') {
//       return HttpResponse.json({
//         code: 200,
//         message: '요청 성공',
//         data: currentRecruitData
//       });
//     }
//     return HttpResponse.json(
//       {
//         code: 404,
//         message: '찾을 수 없는 모집글입니다.',
//         data: null
//       },
//       { status: 404 }
//     );
//   }),

//   // 봉사 모집글 상태 수정
//   http.patch<{ id: string }, { status: RecruitAPIState }>(
//     'https://api.somemore.site/api/recruit-board/:id',
//     async ({ request }) => {
//       try {
//         const { status } = await request.json();

//         // 상태 업데이트
//         currentRecruitData = {
//           ...currentRecruitData,
//           recruit_status: status,
//           updated_at: new Date().toISOString()
//         };

//         return HttpResponse.json({
//           code: 200,
//           message: '요청 성공',
//           data: 'string'
//         });
//       } catch (error) {
//         console.error('상태 수정 중 에러 발생:', error);
//         return HttpResponse.json(
//           {
//             code: 400,
//             message: '잘못된 요청입니다.',
//             data: null
//           },
//           { status: 400 }
//         );
//       }
//     }
//   )
// ];
