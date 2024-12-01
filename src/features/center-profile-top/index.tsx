import { useEffect } from 'react';
import ProfileImgBox from '../profile-page-img-box';
import ProfileInfoBox from '../profile-page-info-box';
import ProfilePreferItemBox from './_components/ProfilePreferItemBox';
import { CenterProfileTopCss } from './indexCss';
import { centerProfileType } from '@/shared/types/center-profile/centerProfile';

const CenterProfileTop = ({
  center_id,
  setIsModalOpen
}: {
  center_id: number;
  setIsModalOpen: (bool: boolean) => void;
}) => {
  const tmpdata: centerProfileType = {
    center_id: 1,
    name: '서울 도서관',
    contact_number: '010-~~~',
    homepage_link: 'www.~~~',
    introduce: '서울 도서관에 대한 간단한 소개',
    interest: true,
    prefer_item: [
      {
        prefer_item_id: 1,
        item_name: '어린이 도서'
      },
      {
        prefer_item_id: 2,
        item_name: '간식'
      },
      {
        prefer_item_id: 3,
        item_name: '복숭아'
      }
    ]
  };
  useEffect(() => {
    // TODO: api/center/profile/center_id에서 정보 가져오기
    console.log('TODO: api/center/profile/center_id에서 정보 가져오기');
    console.log('center_id:', center_id);
  }, []);

  return (
    <CenterProfileTopCss>
      <ProfileImgBox type="center" {...tmpdata} setIsModalOpen={setIsModalOpen} />
      <div className="rightWrap">
        <ProfileInfoBox type="center" {...tmpdata} />
        <ProfilePreferItemBox preferItems={tmpdata.prefer_item ?? []} />
      </div>
    </CenterProfileTopCss>
  );
};
export default CenterProfileTop;
