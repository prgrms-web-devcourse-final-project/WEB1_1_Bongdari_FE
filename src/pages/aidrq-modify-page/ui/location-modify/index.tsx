import AidRqCreateLocation from '@/components/aidrq-create-location';
import { AidRqCreateLocationWrapper, Contents, Wrapper } from './indexCss';
import { VolunteerType, Location } from '@/shared/types/aidrq-create-type/AidRqCreateType';
import { updateLocation } from './logic/modifyAidRqLocation';

interface LocationModifyProps {
  getTitleAndFilter: (key: keyof VolunteerType, value: Location | string | number | boolean) => void;
  volunteerData: VolunteerType;
}

const LocationModify: React.FC<LocationModifyProps> = ({ getTitleAndFilter, volunteerData }) => {
  const changedLocation = {
    region: volunteerData.region,
    ...volunteerData.location
  };

  return (
    <Wrapper>
      <Contents>
        <p>활동 장소</p>
        <AidRqCreateLocationWrapper>
          <AidRqCreateLocation
            getTitleAndFilter={getTitleAndFilter}
            locationData={volunteerData.location}></AidRqCreateLocation>
        </AidRqCreateLocationWrapper>
      </Contents>
      <button
        onClick={() => {
          updateLocation('11', changedLocation);
        }}>
        수정하기
      </button>
    </Wrapper>
  );
};

export default LocationModify;
