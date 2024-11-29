import { SectionBox, Title } from '../../indexCss';
import { LocationBox, LocationIcon, LocationText, MapButton } from './indexCss';

const ActivityLocation = () => {
  return (
    <div>
      <Title>활동 위치</Title>
      <SectionBox>
        <LocationBox>
          <LocationIcon src="/assets/imgs/icon-location.svg" alt="위치아이콘" />
          <LocationText>(07933) 서울시 영등포구 신풍로77, 민준빌딩</LocationText>
        </LocationBox>
        <MapButton>지도 보기</MapButton>
      </SectionBox>
    </div>
  );
};

export default ActivityLocation;
