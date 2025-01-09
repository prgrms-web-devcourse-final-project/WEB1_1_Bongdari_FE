import axiosInstance from '@/api/apis';
import { LocationData } from '@/shared/types/location/locationType';

export const updateLocation = async (id: string, locationData: LocationData) => {
  try {
    await axiosInstance.put(`/api/recruit-board/${id}/location`, locationData);
  } catch (error) {
    console.error('Error:', error);
  }
};
