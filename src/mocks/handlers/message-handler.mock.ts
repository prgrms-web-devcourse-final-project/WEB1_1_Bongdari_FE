import { http, HttpResponse } from 'msw';
import { delayForDevelopment } from '.';
import { mockMessageDetail, mockMessageList } from '../mock-data/message.mock';

export const messageHandlers = [
  // 쪽지 리스트 조회
  http.get('https://api.somemore.site/api/note/center', async ({ request }) => {
    await delayForDevelopment();

    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page')) || 0;
    const size = Number(url.searchParams.get('size')) || 6;

    // 페이지네이션 로직 시뮬레이션
    const startIdx = page * size;
    const paginatedContent = mockMessageList.data.content.slice(startIdx, startIdx + size);

    return HttpResponse.json({
      ...mockMessageList,
      data: {
        ...mockMessageList.data,
        content: paginatedContent
      }
    });
  }),

  // 쪽지 상세 조회 - 기관용
  http.get('https://api.somemore.site/api/note/center/:noteId', async ({ params }) => {
    await delayForDevelopment();

    const { noteId } = params;
    return HttpResponse.json({
      ...mockMessageDetail,
      data: {
        ...mockMessageDetail.data,
        note_id: Number(noteId)
      }
    });
  }),

  // 쪽지 상세 조회-봉사자용
  http.get('https://api.somemore.site/api/note/volunteer/:noteId', async ({ params }) => {
    await delayForDevelopment();

    const { noteId } = params;
    return HttpResponse.json({
      ...mockMessageDetail,
      data: {
        ...mockMessageDetail.data,
        note_id: Number(noteId)
      }
    });
  })
];
