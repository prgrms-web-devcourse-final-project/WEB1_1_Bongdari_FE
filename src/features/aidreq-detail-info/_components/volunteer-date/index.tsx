import { Container, Wrapper } from './indexCss';

const VolunteerDate = () => {
  return (
    <Wrapper>
      <h2>활동시간</h2>
      <Container>
        <div>
          <p>
            <span>활동시작시각</span>2024. 11. 18 15:00
          </p>
          <p>
            <span>활동종료시각</span>2024. 11. 18 15:00
          </p>
        </div>
        <div>
          <p>
            활동시간 <span>4</span> 시간 입니다.
          </p>
        </div>
      </Container>
    </Wrapper>
  );
};

export default VolunteerDate;
