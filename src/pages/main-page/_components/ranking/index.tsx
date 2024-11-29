import { Bottom, Title, Top, Wrapper } from './indexCss';
import RankItem from './ui/rank-item';

const Ranking = () => {
  return (
    <Wrapper>
      <Top>
        <Title>이주의 봉사왕은?</Title>
      </Top>
      <Bottom>
        <RankItem></RankItem>
        <RankItem></RankItem>
        <RankItem></RankItem>
        <RankItem></RankItem>
      </Bottom>
    </Wrapper>
  );
};

export default Ranking;
