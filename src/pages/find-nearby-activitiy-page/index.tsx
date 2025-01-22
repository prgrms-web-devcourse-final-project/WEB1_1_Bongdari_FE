import { useNavigate } from 'react-router-dom';
import { MapWrapper, PageWrapper } from './indexCss';
import FindNearByActivityMap from '@/features/find-nearby-activity-map';
import FindNearByActivitySearch from '@/features/find-nearby-activity-search';
import type { Activity } from '@/shared/types/location/nearbyLocation';
import UseMapLocation from './logic/useMapLocation';
import useNearbySearch from './logic/useNearbySearch';
import useMapControl from './logic/useMapControl';
import { useEffect, useState } from 'react';
import BottomSheet from './_components/bottom-sheet/BottomSheet';

const FindNearByActivityPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { center, setCenter, updateCenter, setUpdateCenter, position, mapLevel, setMapLevel, setCenterToMyPosition } =
    UseMapLocation({
      initialCenter: {
        // 서울 특별 시청
        lat: 37.5662,
        lng: 126.978
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
    navigate(`/aidrqdetail/${activity.id}`);
  };

  return (
    <PageWrapper>
      <MapWrapper>
        {isMobile ? (
          <BottomSheet>
            <FindNearByActivitySearch activities={activities} isLoading={isLoading} onSearch={handleSearch} />
          </BottomSheet>
        ) : (
          <FindNearByActivitySearch activities={activities} isLoading={isLoading} onSearch={handleSearch} />
        )}

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
