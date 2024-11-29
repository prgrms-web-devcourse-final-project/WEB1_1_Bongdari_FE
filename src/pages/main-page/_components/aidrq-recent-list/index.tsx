import AidRqListShort from '@/features/aidrq-list-main-page';
import { Bottom, Title, Top, Wrapper } from './indexCss';

const AidRqRecentList = () => {
  return (
    <Wrapper>
      <Top>
        <Title>최근에 올라온 모집글을 확인해보세요!</Title>
        <button>더보기</button>
      </Top>
      <Bottom>
        <AidRqListShort></AidRqListShort>
      </Bottom>
    </Wrapper>
  );
};

export default AidRqRecentList;
