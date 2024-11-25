import { http, HttpResponse } from 'msw';

// 테스트용 더미 데이터
const dummyData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];

export const centerProfileHandlers = [
  http.get('/api/recurit-boards/search', async ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page')) || 1;
    const limit = Number(url.searchParams.get('limit')) || 9;

    // 페이지당 2개씩 보여주도록 설정
    const startIndex = (page - 1) * 2;
    const endIndex = startIndex + 2;
    const pageData = dummyData.slice(startIndex, endIndex);
    const totalPages = Math.ceil(dummyData.length / limit);
    const hasMore = page < totalPages;

    return HttpResponse.json({
      posts: pageData,
      meta: {
        currentPage: page,
        totalPages,
        hasMore,
        totalCount: dummyData.length
      }
    });
  })
];
