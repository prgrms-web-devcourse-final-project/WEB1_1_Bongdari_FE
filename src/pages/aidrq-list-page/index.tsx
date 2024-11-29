import { Title, Wrapper } from './indexCss';
import AidRqListWrapper from './ui/aidrqlist-wrapper';
import Search from './ui/search';
import Tab from './ui/tab';

const AidRqListPage = () => {
  return (
    <Wrapper>
      <Title>도움요청글</Title>
      <Search></Search>
      <Tab></Tab>
      <AidRqListWrapper></AidRqListWrapper>
    </Wrapper>
  );
};

export default AidRqListPage;
