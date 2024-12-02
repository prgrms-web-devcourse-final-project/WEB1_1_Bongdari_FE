import { useEffect } from 'react';
import { CommuntiyListCss } from './indexCss';
import LongListItem from '@/components/long-list-item';
import { CustomPagination } from '../manage-center-post-set/_components/review-set/indexCss';
import { SubmitButton } from '@/components/button';

const CommuntiyList = () => {
  const tmpdata = [
    {
      id: 1,
      title: '손모아 사이트 어떤가요?',
      write_nickname: 'jooyoug',
      created_at: '2024.11.18'
    },
    {
      id: 2,
      title: '손모아 사이트 어떤가요?',
      write_nickname: 'jooyoug',
      created_at: '2024.11.18'
    },
    {
      id: 3,
      title: '손모아 사이트 어떤가요?',
      write_nickname: 'jooyoug',
      created_at: '2024.11.18'
    },
    {
      id: 4,
      title: '손모아 사이트 어떤가요?',
      write_nickname: 'jooyoug',
      created_at: '2024.11.18'
    },
    {
      id: 5,
      title: '손모아 사이트 어떤가요?',
      write_nickname: 'jooyoug',
      created_at: '2024.11.18'
    },
    {
      id: 6,
      title: '손모아 사이트 어떤가요?',
      write_nickname: 'jooyoug',
      created_at: '2024.11.18'
    },
    {
      id: 7,
      title: '손모아 사이트 어떤가요?',
      write_nickname: 'jooyoug',
      created_at: '2024.11.18'
    },
    {
      id: 8,
      title: '손모아 사이트 어떤가요?',
      write_nickname: 'jooyoug',
      created_at: '2024.11.18'
    },
    {
      id: 9,
      title: '손모아 사이트 어떤가요?',
      write_nickname: 'jooyoug',
      created_at: '2024.11.18'
    },
    {
      id: 10,
      title: '손모아 사이트 어떤가요?',
      write_nickname: 'jooyoug',
      created_at: '2024.11.18'
    }
  ];

  const onClickContent = (id: string) => {
    // TODO: id 커뮤니티 페이지로 이동
    console.log(id, '커뮤니티로 이동');
  };

  useEffect(() => {
    // TODO: api/community-boards 데이터 fetch
    console.log('TODO: api/community-boards 데이터 fetch');
  });

  return (
    <CommuntiyListCss>
      <div className="listHeader">
        <i>번호</i>
        <i>제목</i>
        <i>작성자</i>
        <i>등록날짜</i>
      </div>
      <div className="listWrap">
        {tmpdata.map((v) => (
          <LongListItem
            content_id={`${v.id}`}
            indexNum={v.id}
            mainText={v.title}
            writer={v.write_nickname}
            modifiedDate={v.created_at}
            getContentId={onClickContent}
          />
        ))}
      </div>
      <CustomPagination />
      <div className="btnWrap">
        <SubmitButton label="작성하기" variant="enabledTwo" />
      </div>
    </CommuntiyListCss>
  );
};
export default CommuntiyList;
