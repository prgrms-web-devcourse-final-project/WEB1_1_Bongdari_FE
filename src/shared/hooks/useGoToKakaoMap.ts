interface useGotoKakaoMapProps {
  address: string;
  latitude: number;
  longitude: number;
}

const useGotoKakaoMap = ({ address, latitude, longitude }: useGotoKakaoMapProps) => {
  const handleMap = () => {
    const kakaoMapUrl = `https://map.kakao.com/link/map/${encodeURIComponent(address)},${latitude},${longitude}`;
    window.open(kakaoMapUrl, '_blank');
  };

  return {
    handleMap
  };
};

export default useGotoKakaoMap;
