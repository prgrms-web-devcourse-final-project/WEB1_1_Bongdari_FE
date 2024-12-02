import { Map } from 'react-kakao-maps-sdk';
import { PageWrapper } from './indexCss';

const FindNearByActivityPage = () => {
  return (
    <PageWrapper>
      <Map
        id="map"
        center={{
          lat: 33.450701,
          lng: 126.570667
        }}
        style={{
          width: '100%',
          height: '350px'
        }}
        level={3}
      />
    </PageWrapper>
  );
};

export default FindNearByActivityPage;
