// get 해온 위도/경도 내에 있는 모집글 검색 처리 훅

import type { Coordinates } from '@/shared/types/location/nearbyLocation';
import { useNearbyActivities } from '@/store/queries/recruit-boards/useGetNearbyActivities';
import { useState } from 'react';

const useNearbySearch = (center: Coordinates) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: activities = [], isLoading, refetch } = useNearbyActivities(center, searchQuery);

  const handleSearch = (searchText: string) => {
    setSearchQuery(searchText);
    refetch();
    console.log('검색 버튼 눌렀다. 입력된 값: ', searchText);
  };

  return {
    activities,
    isLoading,
    handleSearch,
    refetch
  };
};

export default useNearbySearch;
