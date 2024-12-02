import { MapWrapper, PageWrapper } from './indexCss';
import FindNearByActivityMap from '@/features/find-nearby-activity-map';
import FindNearByActivitySearch from '@/features/find-nearby-activity-search';
import type { Activity, Coordinates } from '@/shared/types/location/nearbyLocation';
import { useNearbyActivities } from '@/store/queries/recruit-boards/useGetNearbyActivities';
import { useMemo, useState } from 'react';
import { debounce } from 'lodash';

const FindNearByActivityPage = () => {
  const [center, setCenter] = useState<Coordinates>({
    lat: 37.54912276,
    lng: 126.95401691
  });

  const [position, setPosition] = useState<Coordinates | null>(null);
  // 지도를 축소/확대해도 "현재 내 위치" 버튼을 클릭한다면 level 3으로 확대 -> 축소, 축소 -> 확대 되어 확대 레벨을 유지할 수 있게 상태 관리로 넣었습니다!
  const [mapLevel, setMapLevel] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');

  const { data: activities = [], isLoading, refetch } = useNearbyActivities(center);

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

  const handleActivityClick = (activity: Activity) => {
    console.log('선택한 봉사활동:', activity);
    // 필요한 처리 추가
  };

  const handleSearch = (searchText: string) => {
    setSearchQuery(searchText);
    // 필요한 경우 여기서 검색 관련 로직 추가
  };

  const handleActivitySelect = (id: string | number) => {
    const selectedActivity = activities.find((activity) => activity.id === id);
    if (selectedActivity) {
      setCenter({
        lat: selectedActivity.location.latitude,
        lng: selectedActivity.location.longitude
      });
      setMapLevel(3);
    }
  };

  return (
    <PageWrapper>
      <MapWrapper>
        <FindNearByActivitySearch
          activities={activities}
          isLoading={isLoading}
          onSearch={handleSearch}
          onActivitySelect={handleActivitySelect}
        />
        <FindNearByActivityMap
          center={center}
          position={position}
          mapLevel={mapLevel}
          activities={activities}
          isLoading={isLoading}
          onCenterChanged={updateCenterWhenMapMoved}
          onZoomChanged={(map) => setMapLevel(map.getLevel())}
          onMyLocationClick={setCenterToMyPosition}
          onActivityClick={handleActivityClick}
        />
      </MapWrapper>
    </PageWrapper>
  );
};

export default FindNearByActivityPage;
