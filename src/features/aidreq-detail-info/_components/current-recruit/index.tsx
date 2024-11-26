import { Container, Wrapper } from './indexCss';

const CurrentRecruit = () => {
  return (
    <Wrapper>
      <h2>모집상태</h2>
      <Container>
        <div>
          <img src="assets/imgs/recruit-active.svg" alt=""></img>
        </div>
        <div>
          <p>
            현재 <span>15</span>명이 지원했습니다.
          </p>
        </div>
      </Container>
    </Wrapper>
  );
};

export default CurrentRecruit;
