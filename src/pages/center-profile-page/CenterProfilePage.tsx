import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Wrapper } from './CenterProfilePageCss';
import MessageCreateModal from '@/features/message-create-modal';
import ReviewSet from '@/features/manage-center-post-set/_components/review-set';
import CenterProfileTop from '@/features/center-profile-top';

const CenterProfilePage = () => {
  const { userId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Wrapper>
      <div className="innerWrap">
        <CenterProfileTop center_id={Number(userId) || 0} setIsModalOpen={setIsModalOpen} />
        <ReviewSet />
        <MessageCreateModal user_id={userId || ''} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </Wrapper>
  );
};
export default CenterProfilePage;
