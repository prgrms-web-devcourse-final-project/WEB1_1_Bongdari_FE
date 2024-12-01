import { Title, Wrapper } from './indexCss';
import InfoModify from './ui/info-modify';
import LocationModify from './ui/location-modify';

const AidRqModifyPage = () => {
  return (
    <Wrapper>
      <Title>도움요청 글 수정</Title>
      <LocationModify></LocationModify>
      <InfoModify></InfoModify>
    </Wrapper>
  );
};

export default AidRqModifyPage;
