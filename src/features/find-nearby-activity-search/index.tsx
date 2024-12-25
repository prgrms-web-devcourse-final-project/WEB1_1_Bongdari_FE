import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPageTitle, ScrollSection, SearchBarComponent, SearchBox, SearchButton, Wrapper } from './indexCss';
import AidReqListItem from '@/components/aidreq-list-Item';
import InputBox from '@/components/inputBox';
import type { Activity } from '@/shared/types/location/nearbyLocation';

interface FindNearByActivitySearchProps {
  activities: Activity[];
  isLoading: boolean;
  onSearch: (searchText: string) => void;
}

const FindNearByActivitySearch = ({ activities, isLoading, onSearch }: FindNearByActivitySearchProps) => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (inputText: string) => {
    setSearchText(inputText);
  };

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleActivityClick = (id: string | number) => {
    navigate(`/aidrqdetail/${id}`);
  };

  return (
    <SearchBox>
      <ScrollSection>
        <MapPageTitle>주변 활동 찾기</MapPageTitle>
        <SearchBarComponent>
          <InputBox colortype={0} width="80%" getInputText={handleInputChange} />
          <SearchButton label="검색" onClick={handleSearch} />
        </SearchBarComponent>
        <Wrapper>
          {!isLoading &&
            activities.map((activity) => (
              <AidReqListItem
                key={activity.id}
                width="100%"
                onClick={() => handleActivityClick(activity.id)}
                request={activity}
              />
            ))}
        </Wrapper>
      </ScrollSection>
    </SearchBox>
  );
};

export default FindNearByActivitySearch;
