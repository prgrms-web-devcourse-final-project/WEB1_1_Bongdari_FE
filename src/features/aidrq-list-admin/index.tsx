import AidReqListItem from '@/components/aidreq-list-Item';
import { Wrapper } from './indexCss';
import type { AidRequest } from '@/shared/types/aidrq-list-item/aidrqListItemType';
import { useNavigate } from 'react-router-dom';

interface AidRqListAdminProps {
  finalData: AidRequest[];
}

const AidRqListAdmin: React.FC<AidRqListAdminProps> = ({ finalData }) => {
  const navigate = useNavigate();

  const handleAidListItem = (id: string | number) => {
    navigate(`/mypage/adminaidreqlist/${id}`);
    // console.log('클릭');
  };

  return (
    <Wrapper>
      {finalData &&
        finalData.length > 0 &&
        finalData.map((request) => (
          <AidReqListItem
            key={request.id}
            width="calc((100% - 20px) / 3)"
            onClick={() => handleAidListItem(request.id)}
            request={request}
          />
        ))}
    </Wrapper>
  );
};

export default AidRqListAdmin;
