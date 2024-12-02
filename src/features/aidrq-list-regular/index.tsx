import { useNavigate } from 'react-router-dom';

import AidReqListItem from '@/components/aidreq-list-Item';
import { Wrapper } from './indexCss';
import { AidRequest } from '@/shared/types/aidrq-list-item/aidrqListItemType';

interface AidRqListProps {
  finalData: AidRequest[];
}

const AidRqList: React.FC<AidRqListProps> = ({ finalData }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      {finalData &&
        finalData.length > 0 &&
        finalData.map((request) => (
          <AidReqListItem
            key={request.id}
            width="calc((100% - 20px) / 3)"
            onClick={() => {
              navigate(`/aidrqdetail`);
            }}
            request={request}
          />
        ))}
    </Wrapper>
  );
};

export default AidRqList;
