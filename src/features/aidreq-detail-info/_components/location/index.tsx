import { Container, Wrapper } from './indexCss';
import { AidRqDetailType } from '@/shared/types/aidrq-detail/aidrqDetailType';

interface AidRqDetailCenterProfileProps {
  data: AidRqDetailType;
}

const Location: React.FC<AidRqDetailCenterProfileProps> = ({ data }) => {
  return (
    <Wrapper>
      <h2>활동위치</h2>
      <Container>
        <div>
          <img src="assets/imgs/icon-location.svg" alt=""></img>
          <p>{data.location.address}</p>
        </div>
        <div>
          <p>지도보기</p>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Location;
