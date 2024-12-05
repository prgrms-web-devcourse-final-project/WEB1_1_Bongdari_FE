import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Wrapper } from './indexCss';
import MessageCreateModal from '@/features/message-create-modal';
import CPPGTop from './_component/CPPGTop';
import CPPGReviewList from './_component/CPPGReviewList';

const CenterProfilePage = () => {
  const { userId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Wrapper>
      <div className="innerWrap">
        <CPPGTop setIsModalOpen={setIsModalOpen} />
        <CPPGReviewList />
        <MessageCreateModal user_id={userId || ''} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </Wrapper>
  );
};
export default CenterProfilePage;
