import type { AidRequest } from '@/shared/types/aidrq-list-item/aidrqListItemType';
import { Wrapper } from './indexCss';
import Bottom from './ui/bottom';
import Top from './ui/top';

interface AidReqListItemProps {
  width: string;
  onClick?: () => void;
  request: AidRequest;
}

const AidReqListItem: React.FC<AidReqListItemProps> = ({ width, onClick, request }) => {
  if (!request) return null;

  return (
    <Wrapper width={width} onClick={onClick}>
      <Top
        title={request?.title}
        content={request?.content}
        center={request?.center}
        category={request?.volunteer_category}
        admitted={request?.admitted}
      />
      <Bottom
        created_at={request?.created_at}
        volunteer_start_date_time={request?.volunteer_start_date_time}
        volunteer_hours={request?.volunteer_hours}
      />
    </Wrapper>
  );
};

export default AidReqListItem;
