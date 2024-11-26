import { useEffect, useState } from 'react';

import { HalfListCss } from './indexCss';
import LongListItem from '@/components/longListItem';
import SectionTitle from '../section-title';

interface HalfListProps {
  data: string[];
  // TODO: 받아오는 data의 타입을 지정해주기(api 보고 타입 지정하기)
}
const HalfList: React.FC<HalfListProps> = ({ data }) => {
  const [totPage, setTotPage] = useState<number>(0);
  const [currPage, setCurrPage] = useState<number>(1);

  const getId = (id: string) => {
    console.log('클릭한 ', id, '로 이동');
  };

  useEffect(() => {
    setTotPage(Math.ceil(data.length / 5));
  }, [data]);

  return (
    <HalfListCss>
      <SectionTitle title="내 봉사 목록" totPage={totPage} currPage={currPage} setCurrPage={setCurrPage} />
      <div className="listWrap">
        {data.map((v) => (
          <LongListItem content_id="2" mainText={v} getContentId={getId} isRead={false} mailWriter="서울도서관" />
        ))}
      </div>
    </HalfListCss>
  );
};
export default HalfList;
