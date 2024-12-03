import { useDaumPostcodePopup } from 'react-daum-postcode';
import type { KakaoAddress, PostcodeData, Location } from '../types/location/activityLocation';

interface UsePostCodeProps {
  onSaveAddress: (location: Location) => void;
}

const usePostCode = ({ onSaveAddress }: UsePostCodeProps) => {
  const open = useDaumPostcodePopup();

  const convertAddressToCoords = async (address: string): Promise<Location | undefined> => {
    try {
      const geocoder = new kakao.maps.services.Geocoder();

      const result = await new Promise<KakaoAddress[]>((resolve, reject) => {
        geocoder.addressSearch(address, (result, status) => {
          if (status === kakao.maps.services.Status.OK) {
            resolve(result);
          } else {
            reject(new Error('주소 검색에 실패했습니다.'));
          }
        });
      });

      const firstResult = result[0];
      const coordinates = new kakao.maps.LatLng(Number(firstResult.y), Number(firstResult.x));

      const location = {
        address,
        latitude: coordinates.getLat(),
        longitude: coordinates.getLng()
      };

      console.log('변환된 위치 정보:', location);
      return location;
    } catch (err) {
      console.error('좌표 변환 중 오류 발생:', err);
      return undefined;
    }
  };

  const handleComplete = async (data: PostcodeData) => {
    let address = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      address += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    // 주소를 좌표로 변환
    const location = await convertAddressToCoords(address);

    if (location) {
      onSaveAddress(location);
    }
  };

  const handleAddressPopup = () => {
    open({ onComplete: handleComplete });
  };

  return {
    handleAddressPopup
  };
};

export default usePostCode;
