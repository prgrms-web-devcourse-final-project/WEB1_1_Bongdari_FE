import { HeartedOrgCss } from './indexCss';
import SectionTitle from '../PMPG-section-title';
import OrgBox from './org-box/OrgBox';
import { useEffect, useState } from 'react';

const HeartedOrg = ({ data }: { data: string[] }) => {
  // TODO: 데이터 props로 받아오고 뿌려주기.
  // TODO: pagenation 생각해보기
  const [totPage, setTotPage] = useState<number>(0);
  const [currPage, setCurrPage] = useState<number>(1);

  // TODO: width를 계산해서 몇개 요소 들어갈지 pagenation 구하기
  useEffect(() => {
    let countPerPage = 7;
    const w = window.innerWidth;
    console.log('width', w);
    if (w < 1200 && w >= 1000) countPerPage = 6;
    else if (w >= 800) countPerPage = 5;
    setTotPage(Math.ceil(data.length / countPerPage));
  }, [data]);

  return (
    <HeartedOrgCss>
      <SectionTitle title="내 관심 기관" totPage={totPage} currPage={currPage} setCurrPage={setCurrPage} />
      <div className="listWrap">
        {data.map((v) => (
          <OrgBox org_id="123" orgName={v} onClickFunc={(id: string) => console.log(id)} />
        ))}
      </div>
    </HeartedOrgCss>
  );
};
export default HeartedOrg;
