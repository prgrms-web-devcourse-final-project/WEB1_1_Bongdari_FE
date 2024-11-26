import { Container, Wrapper } from './indexCss';

const Location = () => {
  return (
    <Wrapper>
      <h2>활동위치</h2>
      <Container>
        <div>
          <img src="assets/imgs/icon-location.svg" alt=""></img>
          <p>(07933) 서울시 영등포구 신풍로77, 민준빌딩</p>
        </div>
        <div>
          <p>지도보기</p>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Location;
