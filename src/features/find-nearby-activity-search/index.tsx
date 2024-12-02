import { useAidRequestStore } from '@/store/stores/aid-request/aidRequestItemStore';
import { useNavigate } from 'react-router-dom';
import { MapPageTitle, ScrollSection, SearchBarComponent, SearchBox, Wrapper } from './indexCss';
import AidReqListItem from '@/components/aidreq-list-Item';
import InputBox from '@/components/inputBox';
import { OtherButton } from '@/components/button';
import theme from '@/styles/theme';

const FindNearByActivitySearch = () => {
  const navigate = useNavigate();
  const { aidRequests } = useAidRequestStore();

  const handleAidListItem = (id: string | number) => {
    navigate(`/centermypage/adminaidreqlist/${id}`);
    console.log('클릭');
  };

  return (
    <SearchBox>
      <ScrollSection>
        <MapPageTitle>주변 활동 찾기</MapPageTitle>
        <SearchBarComponent>
          <InputBox colortype={0} width="80%" getInputText={() => console.log('입력')} />
          <OtherButton label="검색" width="80px" height="47px" fontSize={theme.fontSize.seventhSize} fontWeight="600" />
        </SearchBarComponent>
        <Wrapper>
          {aidRequests.map((request) => (
            <AidReqListItem
              key={request.id}
              width="100%"
              onClick={() => handleAidListItem(request.id)}
              request={request}></AidReqListItem>
          ))}
        </Wrapper>
      </ScrollSection>
    </SearchBox>
  );
};

export default FindNearByActivitySearch;
