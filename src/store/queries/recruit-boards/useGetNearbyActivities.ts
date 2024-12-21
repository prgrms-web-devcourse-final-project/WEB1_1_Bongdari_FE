import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/api/apis';
import { Activity, GetActivitiesParams, type Coordinates } from '@/shared/types/location/nearbyLocation';

const getNearbyActivities = async ({
  latitude,
  longitude,
  radius = 5,
  page = 0,
  size = 10,
  keyword
}: GetActivitiesParams & { keyword?: string }) => {
  const response = await axiosInstance.get(`/api/recruit-boards/nearby`, {
    params: {
      latitude,
      longitude,
      radius,
      page,
      size,
      keyword
    }
  });
  // console.log('근처 데이터: ', response.data.content);

  return response.data.content;
};

export const useNearbyActivities = (center: Coordinates, searchQuery: string) => {
  return useQuery<Activity[]>({
    queryKey: ['nearbyActivities', center, searchQuery],
    queryFn: () =>
      getNearbyActivities({
        latitude: center.lat,
        longitude: center.lng,
        keyword: searchQuery
      }),
    staleTime: 1000 * 60 // 데이터 썩는 시간: 1분
  });
};
