import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Wrapper } from './indexCss';
import MessageCreateModal from '@/features/message-create-modal';
import CPPGTop from './_component/CPPGTop';
import CPPGReviewList from './_component/CPPGReviewList';

const CenterProfilePage = () => {
  const { center_id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Wrapper>
      <CPPGTop setIsModalOpen={setIsModalOpen} />
      <CPPGReviewList center_id={center_id || ''} />
      <MessageCreateModal user_id={center_id || ''} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </Wrapper>
  );
};
export default CenterProfilePage;
