import { Container, Wrapper } from './indexCss';

const RecruitDate = () => {
  return (
    <Wrapper>
      <h2>접수기간</h2>
      <Container>
        <div>
          <p>
            <span>모집시작일</span>2024. 11. 18 15:00
          </p>
          <p>
            <span>봉사시작일</span>2024. 11. 18 15:00
          </p>
        </div>
        <div>
          <p>
            접수마감 <span>1</span>일 남았습니다.
          </p>
        </div>
      </Container>
    </Wrapper>
  );
};

export default RecruitDate;
