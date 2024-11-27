import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Wrapper } from './CenterProfilePageCss';
import ProfileImgBox from '@/features/profile-page-img-box';
import ProfileInfoBox from '@/features/profile-page-info-box';
import ProfileMailModal from '@/features/profile-page-mail-modal';
import ReviewSet from '@/features/manage-center-post-set/_components/review-set';

const CenterProfilePage = () => {
  const { userId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Wrapper>
      <div className="innerWrap">
        <ProfileImgBox user_id={userId || ''} nickname={userId || ''} tier="white" setIsModalOpen={setIsModalOpen} />
        <ProfileInfoBox user_id={userId || ''} nickname={userId || ''} tier="white" />
        <ReviewSet />
        <ProfileMailModal user_id={userId || ''} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </Wrapper>
  );
};
export default CenterProfilePage;
