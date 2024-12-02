import { centerProfileType } from '@/shared/types/center-profile/centerProfile';
import ButtonContainer from './_components/button-container';
import InfoContainer from './_components/info-container';
import PictureContainer from './_components/picture-container';
import { Wrapper } from './indexCss';

interface AidRqDetailCenterProfileProps {
  data: centerProfileType;
}

const AidRqDetailCenterProfile: React.FC<AidRqDetailCenterProfileProps> = ({ data }) => {
  return (
    <Wrapper>
      <PictureContainer centerProfile={data}></PictureContainer>
      <InfoContainer centerProfile={data}></InfoContainer>
      <ButtonContainer centerProfile={data}></ButtonContainer>
    </Wrapper>
  );
};

export default AidRqDetailCenterProfile;
