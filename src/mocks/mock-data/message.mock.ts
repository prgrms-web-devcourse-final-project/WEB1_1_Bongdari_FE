// 가상의 메시지 목록 데이터
export const mockMessageList = {
  code: 200,
  message: '요청 성공',
  data: {
    totalElements: 15,
    totalPages: 3,
    first: true,
    last: false,
    size: 6,
    content: [
      {
        id: 1111,
        title: '문의 드립니다.',
        sender_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        sender_name: '봉사왕',
        is_read: false
      },
      {
        id: 2222,
        title: '문의 드립니다..!',
        sender_id: '3fa85f64-5717-4562-b3fc-2c963f66afa7',
        sender_name: '이도움',
        is_read: true
      },
      {
        id: 3333,
        title: '문의 드립니다..!!!',
        sender_id: '3fa85f64-5717-4562-b3fc-2c963f66afa8',
        sender_name: '군고구마',
        is_read: false
      }
    ]
  }
};

// 가상의 메시지 상세 데이터
export const mockMessageDetail = {
  code: 200,
  message: '요청 성공',
  data: {
    note_id: 0,
    title: '문의 드립니다.',
    content: '점심이 제공되는지 궁금합니다.',
    sender_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    sender_name: '봉사왕',
    sender_profile_img_link: 'string',
    created_at: '2024-12-25T10:21:44.487Z'
  }
};
