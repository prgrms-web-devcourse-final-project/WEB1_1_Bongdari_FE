import { useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useNavigate, useParams } from 'react-router-dom';

import { Wrapper } from './PersonalProfilePageCss';
import { personProfileType } from '@/shared/types/person-profile/personProfile';
import ProfileImgBox from '@/features/profile-page-img-box';
import ProfileInfoBox from '@/features/profile-page-info-box';
import ProfileMailModal from '@/features/profile-page-mail-modal';
import circleCat from './circleCat.jpg';

const PersonalProfilePage = () => {
  const { userId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // const navigate = useNavigate();
  const tmpdata: personProfileType = {
    id: '??',
    nickname: 'jooyoung',
    imgUrl: circleCat,
    introduce:
      '안녕 잘지내니 나는 잘지내 그래 너도 잘지내라 그래 나도 잘지낼게 안녕 잘지내니 나는 잘지내 그래 너도 잘지내라 그래 나도 잘지낼게 안녕 잘지내니 나는 잘지내 그래 너도 잘지내라 그래 나도 잘지낼게 ',
    tier: 'white',
    totalVolunteerHours: 30,
    totalVolunteerCount: 9
  };

  return (
    <Wrapper>
      <div className="innerWrap">
        <ProfileImgBox type="person" {...tmpdata} setIsModalOpen={setIsModalOpen} />
        <ProfileInfoBox type="person" {...tmpdata} />
        <ProfileMailModal user_id={userId || ''} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </Wrapper>
  );
};
export default PersonalProfilePage;
