import { useParams } from 'react-router-dom';
// import { useNavigate, useParams } from 'react-router-dom';

import { Wrapper } from './PersonalProfilePageCss';
import ProfileImgBox from '@/features/profile-page-img-box';
import ProfileInfoBox from '@/features/profile-page-info-box';

const PersonalProfilePage = () => {
  const { userId } = useParams();
  // const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="innerWrap">
        <ProfileImgBox user_id={userId || 'idid'} profileMitten="white" profileName={userId || 'idid'} />
        <ProfileInfoBox
          user_id={userId || ''}
          profileName={userId || ''}
          profileAidTime={30}
          profileAidCount={40}
          profileMitten={'white'}
          profileDescription="안녕 잘지내니 나는 잘지내 그래 너도 잘지내라 그래 나도 잘지낼게 하하하 안녕 잘지내니 나는 잘지내 그래 너도 잘지내라 그래 나도 잘지낼게 하하하 안녕 잘지내니 나는 잘지내 그래 너도 잘지내라 그래 나도 잘지낼게 하하하"
        />
      </div>
    </Wrapper>
  );
};
export default PersonalProfilePage;
