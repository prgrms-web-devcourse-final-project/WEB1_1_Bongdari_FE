import AidRqCreateLocation from '@/components/aidrq-create-location';
import { AidRqCreateLocationWrapper, Contents, Wrapper } from './indexCss';
import { VolunteerType, Location } from '@/shared/types/aidrq-create-type/AidRqCreateType';

interface LocationModifyProps {
  getTitleAndFilter: (key: keyof VolunteerType, value: Location) => void;
}

const LocationModify:React.FC<LocationModifyProps> = ({ getTitleAndFilter }) => {
  return (
    <Wrapper>
      <Contents>
        <p>활동 장소</p>
        <AidRqCreateLocationWrapper>
          <AidRqCreateLocation getTitleAndFilter={getTitleAndFilter}></AidRqCreateLocation>
        </AidRqCreateLocationWrapper>
      </Contents>
      <button>수정하기</button>
    </Wrapper>
  );
};

export default LocationModify;
