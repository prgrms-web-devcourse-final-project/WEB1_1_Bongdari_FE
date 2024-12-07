import { useEffect, useState } from 'react';
import { LocationInfo, Wrapper } from './indexCss';
import usePostCode from '@/shared/hooks/usePostCode';
import { Location } from '@/shared/types/location/activityLocation';
import { VolunteerType } from '@/shared/types/aidrq-create-type/AidRqCreateType';

interface AidRqCreateLocationProps {
  getTitleAndFilter: (key: keyof VolunteerType, value: Location) => void;
  locationData: Location;
}

const AidRqCreateLocation: React.FC<AidRqCreateLocationProps> = ({ getTitleAndFilter, locationData }) => {
  const [location, setLocation] = useState<Location | undefined>();

  const { handleAddressPopup } = usePostCode({
    onSaveAddress: (location) => {
      setLocation(location);
      console.log('저장된 위치 정보:', location);
    }
  });

  useEffect(() => {
    if (location) getTitleAndFilter('location', location);
  }, [location]);

  return (
    <Wrapper>
      <LocationInfo disabled value={location?.address || ''} placeholder={locationData.address} />
      <button onClick={handleAddressPopup}>
        <img src="/assets/imgs/location.svg" alt="위치 검색" />
      </button>
    </Wrapper>
  );
};

export default AidRqCreateLocation;
