import { HeartedOrgCss } from './indexCss';
import SectionTitle from '../section-title';
import OrgBox from './org-box/OrgBox';
import { useEffect, useState } from 'react';
import { heartedOrgType } from '@/shared/types/person-profile/personProfile';

const HeartedOrg = ({ user_id }: { user_id: string }) => {
  const [totPage, setTotPage] = useState<number>(0);
  const [currPage, setCurrPage] = useState<number>(1);
  const tmpdata: heartedOrgType[] = [
    { id: 'id1', name: 'name1' },
    { id: 'id1', name: 'name1' },
    { id: 'id1', name: 'name1' },
    { id: 'id1', name: 'name1' },
    { id: 'id1', name: 'name1' },
    { id: 'id1', name: 'name1' },
    { id: 'id1', name: 'name1' }
  ];

  useEffect(() => {
    // TODO: user_id를 가지고 데이터 불러오기
    // TODO: 받아오는 data의 타입을 지정해주기(api 보고 타입 지정하기)
    console.log('TODO: ', user_id, '의 관심기관 조회');

    // TODO: width를 계산해서 몇개 요소 들어갈지 pagenation 구하기
    let countPerPage = 7;
    const w = window.innerWidth;
    console.log('width', w);
    if (w < 1200 && w >= 1000) countPerPage = 6;
    else if (w >= 800) countPerPage = 5;
    setTotPage(Math.ceil(tmpdata.length / countPerPage));
  }, []);

  return (
    <HeartedOrgCss>
      <SectionTitle title="내 관심 기관" totPage={totPage} currPage={currPage} setCurrPage={setCurrPage} />
      <div className="listWrap">
        {tmpdata.map((v) => (
          <OrgBox org_id={v.id} orgName={v.name} onClickFunc={(id: string) => console.log(id)} />
        ))}
      </div>
    </HeartedOrgCss>
  );
};
export default HeartedOrg;
