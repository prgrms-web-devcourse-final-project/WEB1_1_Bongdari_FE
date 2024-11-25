import AidReqListItem from '@/components/aidreq-list-Item';
import { Wrapper } from './indexCss';

interface AidRqListProps {}

const AidRqList = ({ data }) => {
  return (
    <Wrapper>
      <AidReqListItem width="calc((100% - 20px) / 3)"></AidReqListItem>
      <AidReqListItem width="calc((100% - 20px) / 3)"></AidReqListItem>
      <AidReqListItem width="calc((100% - 20px) / 3)"></AidReqListItem>
      <AidReqListItem width="calc((100% - 20px) / 3)"></AidReqListItem>
      <AidReqListItem width="calc((100% - 20px) / 3)"></AidReqListItem>
      <AidReqListItem width="calc((100% - 20px) / 3)"></AidReqListItem>
      <AidReqListItem width="calc((100% - 20px) / 3)"></AidReqListItem>
      <AidReqListItem width="calc((100% - 20px) / 3)"></AidReqListItem>
      <AidReqListItem width="calc((100% - 20px) / 3)"></AidReqListItem>
    </Wrapper>
  );
};

export default AidRqList;
