import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { LocationButtonBox, MyLocationButton, NearbyButton, RefreshIcon } from './indexCss';
import type { Activity, Coordinates } from '@/shared/types/location/nearbyLocation';
import { useRef } from 'react';

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
  onNearbyClick: () => void;
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
  onActivityClick,
  onNearbyClick
}: FindNearByActivityMapProps) => {
  const mapRef = useRef<kakao.maps.Map>();

  // "현재 내 위치" 버튼을 클릭하고 지도를 움직여 해당 위치를 벗어나도 버튼을 누르면 위치를 복귀시키는 핸들러
  const handleMyLocationClick = () => {
    onMyLocationClick();
    if (position && mapRef.current) {
      const moveLatLon = new kakao.maps.LatLng(position.lat, position.lng);
      mapRef.current.panTo(moveLatLon);
    }
  };

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
        onCreate={(map) => {
          mapRef.current = map;
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

        <LocationButtonBox>
          <NearbyButton onClick={onNearbyClick}>
            현재 위치에서 재검색
            <RefreshIcon src="/assets/imgs/icon-refresh.svg" alt="현재위치에서검색" />
          </NearbyButton>
          <MyLocationButton onClick={handleMyLocationClick}>
            <img src="/assets/imgs/icon-my-location.svg" alt="내위치" />
          </MyLocationButton>
        </LocationButtonBox>
      </Map>
    </>
  );
};

export default FindNearByActivityMap;
