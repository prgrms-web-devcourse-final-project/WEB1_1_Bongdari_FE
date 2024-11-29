import ButtonContainer from './_components/button-container';
import InfoContainer from './_components/info-container';
import PictureContainer from './_components/picture-container';
import { Wrapper } from './indexCss';
import { AidRqDetailType } from '@/shared/types/aidrq-detail/aidrqDetailType';

interface AidRqDetailCenterProfileProps {
  data: AidRqDetailType;
}

const AidRqDetailCenterProfile: React.FC<AidRqDetailCenterProfileProps> = ({ data }) => {
  return (
    <Wrapper>
      <PictureContainer centerProfile={data.center}></PictureContainer>
      <InfoContainer centerProfile={data.center}></InfoContainer>
      <ButtonContainer centerProfile={data.center}></ButtonContainer>
    </Wrapper>
  );
};

export default AidRqDetailCenterProfile;
