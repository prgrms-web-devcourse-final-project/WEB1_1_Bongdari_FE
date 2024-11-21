import { AidTime, RegisterDate, StartDate, Wrapper } from './indexCss';

const Bottom = () => {
  return (
    <Wrapper>
      <RegisterDate>
        <p>등록 일자</p>
        <p>2024-11-15</p>
      </RegisterDate>
      <StartDate>
        <p>활동 시작 일자</p>
        <p>2024-11-15</p>
      </StartDate>
      <AidTime>
        <p>활동 시간</p>
        <p>4시간</p>
      </AidTime>
    </Wrapper>
  );
};

export default Bottom;
