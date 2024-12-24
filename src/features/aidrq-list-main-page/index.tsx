import { useNavigate } from 'react-router-dom';
import AidReqListItem from '@/components/aidreq-list-Item';
import { Wrapper } from './indexCss';
import { AidRequest } from '@/shared/types/aidrq-list-item/aidrqListItemType';
import { useListShort } from '@/store/queries/main-page-common-query/useListShort';

const AidRqListShort = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useListShort();

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생!</div>;

  const aidRequests: AidRequest[] = data?.content || [];

  return (
    <Wrapper>
      {aidRequests.map((request) => (
        <AidReqListItem
          key={request.id}
          width="calc((100% - 20px) / 3)"
          onClick={() => {
            navigate(`/aidrqdetail/${request.id}`, {
              state: { centerId: request.center.id } //센터id는 state로 전달
            });
          }}
          request={request}></AidReqListItem>
      ))}
    </Wrapper>
  );
};

export default AidRqListShort;
