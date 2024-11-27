import { useEffect, useState } from 'react';

import { HalfListCss } from './indexCss';
import LongListItem from '@/components/longListItem';
import SectionTitle from '../section-title';

interface HalfListProps {
  user_id: string;
  listType: 'myVolunteer' | 'myMessage';
}
const HalfList: React.FC<HalfListProps> = ({ user_id, listType }) => {
  const [totPage, setTotPage] = useState<number>(0);
  const [currPage, setCurrPage] = useState<number>(1);
  const tmpdata = ['내용1', '내용2', '내용3'];

  useEffect(() => {
    // TODO: user_id를 가지고 데이터 불러오기
    // TODO: 받아오는 data의 타입을 지정해주기(api 보고 타입 지정하기)
    if (listType === 'myVolunteer') console.log('TODO: ', user_id, '의 봉사목록 조회');
    else if (listType === 'myMessage') console.log('TODO: ', user_id, '의 쪽지목록 조회');

    setTotPage(Math.ceil(tmpdata.length / 5));
  }, []);

  const onClickGetId = (id: string) => {
    console.log('클릭한 ', id, '로 이동');
  };

  return (
    <HalfListCss>
      <SectionTitle
        title={listType === 'myVolunteer' ? '내 봉사 목록' : '내 쪽지 목록'}
        totPage={totPage}
        currPage={currPage}
        setCurrPage={setCurrPage}
      />
      <div className="listWrap">
        {tmpdata.map((v) => (
          <LongListItem
            content_id="idid"
            mainText={v}
            getContentId={onClickGetId}
            isRead={listType === 'myVolunteer' ? undefined : false}
            mailWriter={listType === 'myVolunteer' ? undefined : '서울도서관'}
          />
        ))}
      </div>
    </HalfListCss>
  );
};
export default HalfList;
