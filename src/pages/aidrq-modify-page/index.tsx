import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Title, Wrapper } from './indexCss';
import InfoModify from './ui/info-modify';
import LocationModify from './ui/location-modify';
import { VolunteerType, Location } from '@/shared/types/aidrq-create-type/AidRqCreateType';
import { useFetchAidRqDefault } from '@/store/queries/aidreq-control-center-query/useFetchAidRqDefault';

const AidRqModifyPage = () => {
  const location = useLocation();
  const id = location.state?.id;

  const { data: initialData } = useFetchAidRqDefault(id);

  // 수정할 데이터를 관리할 state
  const [editedData, setEditedData] = useState<VolunteerType | null>(null);

  // 초기 데이터가 로드되면 editedData를 초기화
  useEffect(() => {
    if (initialData) {
      setEditedData(initialData.data);
    }
  }, [initialData]);

  const getTitleAndFilter = (key: keyof VolunteerType, value: Location | string | number | boolean) => {
    setEditedData((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        [key]: value
      };
    });
  };

  return (
    <Wrapper>
      <Title>도움요청 글 수정</Title>
      <LocationModify id={id} getTitleAndFilter={getTitleAndFilter} volunteerData={editedData}></LocationModify>
      <InfoModify
        id={id}
        getTitleAndFilter={getTitleAndFilter}
        volunteerData={editedData}
        createdAt={initialData?.data?.created_at}></InfoModify>
    </Wrapper>
  );
};

export default AidRqModifyPage;
