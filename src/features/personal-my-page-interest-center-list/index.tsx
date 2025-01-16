import { InterestCenterListCss } from './indexCss';
import { useMyInterestCenter } from './logic/useMyInterestCenter';
import TitleWithPagenation from '@/features/personal-my-page-title-with-pagenation';
import InterestCenterBox from './_component/InterestCenterBox';
import { Link } from 'react-router-dom';

const InterestCenterList = () => {
  const { interestCenterData, chunckInterestCenterData, containerRef, totPage, currPage, setCurrPage } =
    useMyInterestCenter();

  return (
    <InterestCenterListCss currpage={currPage}>
      <TitleWithPagenation title="내 관심 기관" totPage={totPage} currPage={currPage} setCurrPage={setCurrPage} />

      <div className="listShowWrap" ref={containerRef}>
        {!interestCenterData || interestCenterData.length === 0 ? (
          <div className="noData">관심 기관이 없습니다</div>
        ) : (
          <div className="listInnerWrap">
            {chunckInterestCenterData?.map((chunk, chunkIdx) => (
              <div className="chunkList" key={chunkIdx}>
                {chunk.map((v, i) => (
                  <Link to={`/centerprofile/${v.center_id}`} key={i}>
                    <InterestCenterBox key={i} orgName={v.center_name} orgImg={v.img_url} />
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </InterestCenterListCss>
  );
};

export default InterestCenterList;
