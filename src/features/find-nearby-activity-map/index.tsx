import { Map } from 'react-kakao-maps-sdk';

const FindNearByActivityMap = () => {
  return (
    <>
      <Map
        id="map"
        center={{
          lat: 33.450701,
          lng: 126.570667
        }}
        style={{
          width: '100%',
          height: '100vh'
        }}
        level={3}
      />
    </>
  );
};

export default FindNearByActivityMap;
