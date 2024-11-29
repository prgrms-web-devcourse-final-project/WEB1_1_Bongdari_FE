import type { AidRequest } from '@/shared/types/aidrq-list-item/aidrqListItemType';
import { Wrapper } from './indexCss';
import Bottom from './ui/bottom';
import Top from './ui/top';

interface AidReqListItem {
  width: string;
  onClick?: () => void;
  request: AidRequest;
}

const AidReqListItem: React.FC<AidReqListItem> = ({ width, onClick, request }) => {
  return (
    <Wrapper width={width} onClick={onClick}>
      <Top title={request.title} content={request.content} center={request.center}></Top>
      <Bottom
        created_at={request.created_at}
        volunteer_start_date_time={request.volunteer_start_date_time}
        volunteer_time={request.volunteer_time}></Bottom>
    </Wrapper>
  );
};

export default AidReqListItem;
