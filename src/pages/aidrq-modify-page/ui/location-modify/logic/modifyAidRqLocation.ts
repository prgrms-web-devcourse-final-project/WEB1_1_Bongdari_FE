import axios from 'axios';
import Cookies from 'js-cookie';

interface LocationData {
  region: string;
  address: string;
  latitude: number;
  longitude: number;
}

export const updateLocation = async (id: string, locationData: LocationData) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_APP_BASE_URL}/api/recruit-board/${id}/location`,
      locationData,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('centerToken')}`
        }
      }
    );
    console.log(response);
  } catch (error) {
    console.error('Error:', error);
  }
};
