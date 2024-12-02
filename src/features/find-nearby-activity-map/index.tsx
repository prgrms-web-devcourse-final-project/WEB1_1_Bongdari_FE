import { useMemo, useState } from 'react';
import { debounce } from 'lodash';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import { MyLocationButton } from './indexCss';
import { useNearbyActivities } from '@/store/queries/recruit-boards/useGetNearbyActivities';
import type { Activity, Coordinates } from '@/shared/types/location-type/nearbyLocation';

const FindNearByActivityMap = () => {
  const [center, setCenter] = useState<Coordinates>({
    lat: 37.54912276,
    lng: 126.95401691
  });
  const [position, setPosition] = useState<Coordinates | null>(null);
  // 지도를 축소/확대해도 "현재 내 위치" 버튼을 클릭한다면 level 3으로 확대 -> 축소, 축소 -> 확대 되어 확대 레벨을 유지할 수 있게 상태 관리로 넣었습니다!
  const [mapLevel, setMapLevel] = useState(3);

  const { data: activities = [], isLoading } = useNearbyActivities(center);

  // "현재 내 위치" 버튼을 클릭해야만 내 현재 위치를 보여줄 수 있게 설정해놨습니다.
  // 지금은 테스트를 위해 서울신용보증재단빌딩으로 초기 위치를 설정했습니다.
  const setCenterToMyPosition = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const newPosition = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      };
      setCenter(newPosition);
      setPosition(newPosition);
      setMapLevel(3);
    });
  };

  const updateCenterWhenMapMoved = useMemo(
    () =>
      debounce((map: kakao.maps.Map) => {
        setCenter({
          lat: map.getCenter().getLat(),
          lng: map.getCenter().getLng()
        });
        setMapLevel(map.getLevel());
      }, 500),
    []
  );

  return (
    <>
      <Map
        id="map"
        center={center}
        level={mapLevel}
        style={{
          width: '100%',
          height: '100vh',
          position: 'relative'
        }}
        onCenterChanged={updateCenterWhenMapMoved}
        onZoomChanged={(map) => setMapLevel(map.getLevel())}>
        {/* 현재 위치 마커 */}
        {position && (
          <MapMarker
            image={{
              src: '/assets/imgs/icon-location.svg',
              size: {
                width: 30,
                height: 30
              }
            }}
            position={position}
          />
        )}

        {/* 봉사활동 위치 마커들 */}
        {!isLoading &&
          activities.map((activity: Activity) => (
            <MapMarker
              key={activity.id}
              position={{
                lat: activity.location.latitude,
                lng: activity.location.longitude
              }}
              title={activity.title}
              onClick={() => console.log('선택한 봉사활동:', activity)}
            />
          ))}

        <MyLocationButton onClick={setCenterToMyPosition}>현재 내 위치</MyLocationButton>
      </Map>
    </>
  );
};

export default FindNearByActivityMap;
