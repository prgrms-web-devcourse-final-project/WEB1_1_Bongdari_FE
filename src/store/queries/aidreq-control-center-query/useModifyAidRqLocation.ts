import axiosInstance from '@/api/apis';
import { LocationData } from '@/shared/types/location/locationType';

export const updateLocation = async (id: string, locationData: LocationData) => {
  try {
    const response = await axiosInstance.put(`/api/recruit-board/${id}/location`, locationData);
    console.log(response);
  } catch (error) {
    console.error('Error:', error);
  }
};
