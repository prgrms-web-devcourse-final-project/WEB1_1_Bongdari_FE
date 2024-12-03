import AidReqListItem from '@/components/aidreq-list-Item';
import { Wrapper } from './indexCss';
import { useAidRequestStore } from '@/store/stores/aid-request/aidRequestItemStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AidRqListShort = () => {
  const { aidRequests, setAidRequests } = useAidRequestStore();
  const navigate = useNavigate();

  // test용 더미 데이터 - 삭제 예정 ----------------------------------
  useEffect(() => {
    const dummyData = Array.from({ length: 3 }, (_, index) => ({
      id: index + 1,
      title: `서울도서관 사서도우미 모집 ${index}`,
      content:
        '사서도우미 3명 모집사서도우미 3명 모집사서도우미 3명 모집 사서도우미 3명 모집사서도우미 3명 모집사서도우미 3명 모집 사서도우미 3명 모집사서도우미 3명 모집사서도우미 3명 모집',
      region: '서울',
      volunteer_start_date_time: '2024-12-01T09:00',
      volunteer_end_date_time: '2024-12-01T13:00',
      created_at: '2024-12-01T09:00',
      updated_at: '2024-12-01T09:00',
      volunteer_category: 'LIVING_SUPPORT',
      volunteer_time: 'T04:00',
      admitted: true,
      center: {
        id: `center-${index}`,
        name: '서울도서관'
      }
    }));

    setAidRequests(dummyData);
  }, []);
  // ----------------------------------------------------------------

  return (
    <Wrapper>
      {aidRequests.map((request) => (
        <AidReqListItem
          key={request.id}
          width="calc((100% - 20px) / 3)"
          onClick={() => {
            navigate(`/aidrqdetail`);
          }}
          request={request}></AidReqListItem>
      ))}
    </Wrapper>
  );
};

export default AidRqListShort;
