import useGotoKakaoMap from '@/shared/hooks/useGoToKakaoMap';
import { Container, Wrapper } from './indexCss';
import { AidRqDetailType } from '@/shared/types/aidrq-detail/aidrqDetailType';

interface AidRqDetailCenterProfileProps {
  data: AidRqDetailType;
}

const Location: React.FC<AidRqDetailCenterProfileProps> = ({ data }) => {
  const address = data.location.address;
  const latitude = data.location.latitude;
  const longitude = data.location.longitude;
  const { handleMap } = useGotoKakaoMap({ address, latitude, longitude });
  return (
    <Wrapper>
      <h2>활동위치</h2>
      <Container>
        <div>
          <img src="/assets/imgs/icon-location.svg" alt="location-icon"></img>
          <p>{data.location.address}</p>
        </div>
        <div onClick={handleMap}>
          <p>지도보기</p>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Location;
