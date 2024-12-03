import { useState } from 'react';
import { LocationInfo, Wrapper } from './indexCss';
import usePostCode from '@/shared/hooks/usePostCode';
import { Location } from '@/shared/types/location/activityLocation';

const AidRqCreateLocation = () => {
  const [location, setLocation] = useState<Location | undefined>();

  const { handleAddressPopup } = usePostCode({
    onSaveAddress: (location) => {
      setLocation(location);
      console.log('저장된 위치 정보:', location);
    }
  });

  return (
    <Wrapper>
      <LocationInfo disabled value={location?.address || ''} placeholder="활동 위치를 설정해주세요." />
      <button onClick={handleAddressPopup}>
        <img src="/assets/imgs/location.svg" alt="위치 검색" />
      </button>
    </Wrapper>
  );
};

export default AidRqCreateLocation;
