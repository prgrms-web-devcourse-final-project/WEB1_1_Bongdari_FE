import { Wrapper } from './indexCss';
import Bottom from './ui/bottom';
import Top from './ui/top';

interface AidReqListItem {
  width: string;
}

const AidReqListItem: React.FC<AidReqListItem> = ({ width }) => {
  return (
    <Wrapper width={width}>
      <Top></Top>
      <Bottom></Bottom>
    </Wrapper>
  );
};

export default AidReqListItem;
