// 지도 초기 위치, "현재 내 위치" 버튼 클릭 시 위치 계산하는 훅

import type { Coordinates } from '@/shared/types/location/nearbyLocation';
import { useState } from 'react';

interface UseMapLocationProps {
  initialCenter: Coordinates;
  initialLevel: number;
}

const UseMapLocation = ({ initialCenter, initialLevel }: UseMapLocationProps) => {
  const [center, setCenter] = useState<Coordinates>(initialCenter);
  // 지도 이동 후에 갱신될 위치값 -> 버튼을 클릭했을 때만 갱신될 수 있도록 구현
  const [updateCenter, setUpdateCenter] = useState<Coordinates | null>(null);
  const [position, setPosition] = useState<Coordinates | null>(null);
  // 지도를 축소/확대해도 "현재 내 위치" 버튼을 클릭한다면 level 3으로 확대 -> 축소, 축소 -> 확대 되어 확대 레벨을 유지할 수 있게 상태 관리로 넣었습니다!
  const [mapLevel, setMapLevel] = useState(5);

  const setCenterToMyPosition = () => {
    const options = {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000
    };

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const newPosition = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        };
        setCenter(newPosition);
        setPosition(newPosition);
        setMapLevel(initialLevel);
      },
      (error) => {
        console.error('위치 정보를 가져오는데 실패했습니다:', error);
      },
      options
    );
  };

  return {
    center,
    setCenter,
    updateCenter,
    setUpdateCenter,
    position,
    setPosition,
    mapLevel,
    setMapLevel,
    setCenterToMyPosition
  };
};

export default UseMapLocation;
