import { Link } from 'react-router-dom';
import { Title, Visual, Wrapper, ButtonContainer } from './indexCss';

const LandingPage = () => {
  return (
    <Wrapper>
      <Visual>
        <Title>
          <h2>
            여러분의 도움을<br></br> <span>손모아</span> 기다립니다.
          </h2>
          <p>사회지원활동 연결 플랫폼, 손모아</p>
        </Title>
        <img src="assets/imgs/landing-visual.svg" alt=""></img>
      </Visual>
      <ButtonContainer>
        <Link to="/main" className="link">
          <button>참여하기</button>
        </Link>
      </ButtonContainer>
    </Wrapper>
  );
};

export default LandingPage;
