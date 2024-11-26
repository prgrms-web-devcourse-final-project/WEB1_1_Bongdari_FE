import ButtonContainer from './_components/button-container';
import InfoContainer from './_components/info-container';
import PictureContainer from './_components/picture-container';
import { Wrapper } from './indexCss';
import { dummyData } from './dummydata';

const centerProfile = dummyData.data.center;

const AidRqDetailCenterProfile = () => {
  return (
    <Wrapper>
      <PictureContainer centerProfile={centerProfile}></PictureContainer>
      <InfoContainer centerProfile={centerProfile}></InfoContainer>
      <ButtonContainer centerProfile={centerProfile}></ButtonContainer>
    </Wrapper>
  );
};

export default AidRqDetailCenterProfile;
