import useGotoKakaoMap from '@/shared/hooks/useGoToKakaoMap';
import { SectionBox, Title } from '../../indexCss';
import { LocationBox, LocationIcon, LocationText, MapButton } from './indexCss';

interface ActivityLocationProps {
  address: string;
  latitude: number;
  longitude: number;
}
const ActivityLocation = ({ address, latitude, longitude }: ActivityLocationProps) => {
  const { handleMap } = useGotoKakaoMap({ address, latitude, longitude });
  return (
    <div>
      <Title>활동 위치</Title>
      <SectionBox>
        <LocationBox>
          <LocationIcon src="/assets/imgs/icon-location.svg" alt="위치아이콘" />
          <LocationText>{address}</LocationText>
        </LocationBox>
        <MapButton onClick={handleMap}>지도 보기</MapButton>
      </SectionBox>
    </div>
  );
};

export default ActivityLocation;
