import { MapWrapper, PageWrapper } from './indexCss';
import FindNearByActivityMap from '@/features/find-nearby-activity-map';
import FindNearByActivitySearch from '@/features/find-nearby-activity-search';

const FindNearByActivityPage = () => {
  return (
    <PageWrapper>
      <MapWrapper>
        <FindNearByActivitySearch />
        <FindNearByActivityMap />
      </MapWrapper>
    </PageWrapper>
  );
};

export default FindNearByActivityPage;
