import { useNavigate } from 'react-router-dom';
import { MapWrapper, PageWrapper } from './indexCss';
import FindNearByActivityMap from '@/features/find-nearby-activity-map';
import FindNearByActivitySearch from '@/features/find-nearby-activity-search';
import type { Activity } from '@/shared/types/location/nearbyLocation';
import UseMapLocation from './logic/useMapLocation';
import useNearbySearch from './logic/useNearbySearch';
import useMapControl from './logic/useMapControl';

const FindNearByActivityPage = () => {
  const navigate = useNavigate();
  const { center, setCenter, updateCenter, setUpdateCenter, position, mapLevel, setMapLevel, setCenterToMyPosition } =
    UseMapLocation({
      initialCenter: {
        lat: 37.26577519,
        lng: 127.0368817
      },
      initialLevel: 6
    });
  const { activities, isLoading, handleSearch, refetch } = useNearbySearch(center);
  const { updateCenterMapMoved } = useMapControl({
    setUpdateCenter,
    setMapLevel
  });

  // 클릭했을 때 이동된 지도의 중심값을 API 호출에 사용하는 핸들러
  const handleNearbyActivitiesClick = () => {
    if (updateCenter) {
      setCenter(updateCenter);
      refetch();
    }
  };

  const handleActivityClick = (activity: Activity) => {
    console.log('선택한 봉사활동:', activity);
    // TODO: 지도에서 활동 마커를 클릭했을 때 실행되는 함수 -> 어떤 정보를 띄울지 고민해봐야 함
    navigate(`/centermypage/adminaidreqlist/${activity.id}`);
  };

  return (
    <PageWrapper>
      <MapWrapper>
        <FindNearByActivitySearch activities={activities} isLoading={isLoading} onSearch={handleSearch} />
        <FindNearByActivityMap
          center={center}
          position={position}
          mapLevel={mapLevel}
          activities={activities}
          isLoading={isLoading}
          onCenterChanged={updateCenterMapMoved}
          onZoomChanged={(map) => setMapLevel(map.getLevel())}
          onMyLocationClick={setCenterToMyPosition}
          onActivityClick={handleActivityClick}
          onNearbyClick={handleNearbyActivitiesClick}
        />
      </MapWrapper>
    </PageWrapper>
  );
};

export default FindNearByActivityPage;
