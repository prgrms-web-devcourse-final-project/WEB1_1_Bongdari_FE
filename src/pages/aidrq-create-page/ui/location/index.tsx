import AidRqCreateLocation from '@/components/aidrq-create-location';
import { Wrapper } from './indexCss';
import { VolunteerType, Location } from '@/shared/types/aidrq-create-type/AidRqCreateType';

interface LocationProps {
  getTitleAndFilter: (key: keyof VolunteerType, value: Location) => void;
}

const LocationBox: React.FC<LocationProps> = ({ getTitleAndFilter }) => {
  const defaultLocationData = { address: '장소를 설정해주세요', latitude: 0, longitude: 0 };
  return (
    <Wrapper>
      <p>활동 주소</p>
      <AidRqCreateLocation
        getTitleAndFilter={getTitleAndFilter}
        locationData={defaultLocationData}></AidRqCreateLocation>
    </Wrapper>
  );
};

export default LocationBox;
