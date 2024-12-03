// 지도를 직접 움직여 api 호출 전에 해당 위치의 새 위도/경도값을 저장하는 훅

import { useMemo } from 'react';
import { debounce } from 'lodash';
import type { Coordinates } from '@/shared/types/location/nearbyLocation';

interface UseMapControlProps {
  setUpdateCenter: (center: Coordinates) => void;
  setMapLevel: (level: number) => void;
}

const useMapControl = ({ setUpdateCenter, setMapLevel }: UseMapControlProps) => {
  const updateCenterMapMoved = useMemo(
    () =>
      debounce((map: kakao.maps.Map) => {
        setUpdateCenter({
          lat: map.getCenter().getLat(),
          lng: map.getCenter().getLng()
        });
        setMapLevel(map.getLevel());
      }, 500),
    []
  );

  return {
    updateCenterMapMoved
  };
};

export default useMapControl;
