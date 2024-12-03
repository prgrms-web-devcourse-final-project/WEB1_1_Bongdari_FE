import { MapWrapper, PageWrapper } from './indexCss';
import FindNearByActivityMap from '@/features/find-nearby-activity-map';
import FindNearByActivitySearch from '@/features/find-nearby-activity-search';
import type { Activity, Coordinates } from '@/shared/types/location/nearbyLocation';
import { useNearbyActivities } from '@/store/queries/recruit-boards/useGetNearbyActivities';
import { useMemo, useState } from 'react';
import { debounce } from 'lodash';
import { useNavigate } from 'react-router-dom';

const FindNearByActivityPage = () => {
  const navigate = useNavigate();

  const [center, setCenter] = useState<Coordinates>({
    lat: 37.26577519,
    lng: 127.0368817
  });
  // 지도 이동 후에 갱신될 위치값 -> 버튼을 클릭했을 때만 갱신될 수 있도록 구현
  const [updateCenter, setUpdateCenter] = useState<Coordinates | null>(null);
  const [position, setPosition] = useState<Coordinates | null>(null);
  // 지도를 축소/확대해도 "현재 내 위치" 버튼을 클릭한다면 level 3으로 확대 -> 축소, 축소 -> 확대 되어 확대 레벨을 유지할 수 있게 상태 관리로 넣었습니다!
  const [mapLevel, setMapLevel] = useState(5);

  const [searchQuery, setSearchQuery] = useState('');

  const { data: activities = [], isLoading, refetch } = useNearbyActivities(center, searchQuery);

  // "현재 내 위치" 버튼을 클릭해야만 내 현재 위치를 보여줄 수 있게 설정해놨습니다.
  // 지금은 테스트를 위해 "경기도 수원시 팔달구 인계로 178 (인계동) 7층"으로 초기 위치를 설정했습니다.
  const setCenterToMyPosition = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const newPosition = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      };
      setCenter(newPosition);
      setPosition(newPosition);
      setMapLevel(5);
    });
  };

  const updateCenterWhenMapMoved = useMemo(
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

  const handleSearch = (searchText: string) => {
    setSearchQuery(searchText);
    refetch();
    console.log('검색 버튼 눌렀다. 입력된 값: ', searchText);
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
          onCenterChanged={updateCenterWhenMapMoved}
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
