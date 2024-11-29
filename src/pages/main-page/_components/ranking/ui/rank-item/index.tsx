import { Bottom, NickName, Top, Wrapper } from './indexCss';

const RankItem = () => {
  return (
    <Wrapper>
      <Top>
        <div>
          <img src="assets/imgs/rank-gold.svg"></img>
        </div>
        <NickName>
          <span>1위</span>
          <p>710minjoon</p>
        </NickName>
      </Top>
      <Bottom>
        <p>70시간</p>
      </Bottom>
    </Wrapper>
  );
};

export default RankItem;
