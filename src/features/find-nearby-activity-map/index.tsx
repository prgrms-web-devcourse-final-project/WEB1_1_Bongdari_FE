import { Map, MapMarker } from 'react-kakao-maps-sdk';

import { MyLocationButton } from './indexCss';
import type { Activity, Coordinates } from '@/shared/types/location/nearbyLocation';

interface FindNearByActivityMapProps {
  center: Coordinates;
  position: Coordinates | null;
  mapLevel: number;
  activities: Activity[];
  isLoading: boolean;
  onCenterChanged: (map: kakao.maps.Map) => void;
  onZoomChanged: (map: kakao.maps.Map) => void;
  onMyLocationClick: () => void;
  onActivityClick: (activity: Activity) => void;
}

const FindNearByActivityMap = ({
  center,
  position,
  mapLevel,
  activities,
  isLoading,
  onCenterChanged,
  onZoomChanged,
  onMyLocationClick,
  onActivityClick
}: FindNearByActivityMapProps) => {
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
        onCenterChanged={onCenterChanged}
        onZoomChanged={onZoomChanged}>
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
              onClick={() => onActivityClick(activity)}
            />
          ))}

        <MyLocationButton onClick={onMyLocationClick}>현재 내 위치</MyLocationButton>
      </Map>
    </>
  );
};

export default FindNearByActivityMap;
