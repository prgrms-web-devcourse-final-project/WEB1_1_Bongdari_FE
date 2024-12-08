import { InterestCenterListCss } from './indexCss';
import { useMyInterestCenter } from './logic/useMyInterestCenter';
import TitleWithPagenation from '@/features/personal-my-page-title-with-pagenation';
import InterestCenterBox from './_component/InterestCenterBox';

const InterestCenterList = () => {
  const { interestCenterData, containerRef, totPage, currPage, setCurrPage } = useMyInterestCenter();

  if (!interestCenterData || interestCenterData.length === 0) {
    return (
      <InterestCenterListCss currpage={currPage}>
        <TitleWithPagenation title="내 관심 기관" totPage={totPage} currPage={currPage} setCurrPage={setCurrPage} />
        <div className="noData">관심 기관이 없습니다</div>
      </InterestCenterListCss>
    );
  } else {
    return (
      <InterestCenterListCss currpage={currPage}>
        <TitleWithPagenation title="내 관심 기관" totPage={totPage} currPage={currPage} setCurrPage={setCurrPage} />
        <div className="listShowWrap" ref={containerRef}>
          <div className="listInnerWrap">
            {interestCenterData?.map((v, i) => (
              <InterestCenterBox
                key={i}
                org_id={v.center_id}
                orgName={v.center_name}
                orgImg={v.img_url}
                onClickFunc={(id: string) => console.log(id)}
              />
            ))}
          </div>
        </div>
      </InterestCenterListCss>
    );
  }
};
export default InterestCenterList;
