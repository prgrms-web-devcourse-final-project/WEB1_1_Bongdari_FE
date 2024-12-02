import { useState } from 'react';
import usePostCode, { type Location } from '@/shared/hooks/usePostCode';

import { LocationInfo, Wrapper } from './indexCss';
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
