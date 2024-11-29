import { Container, Wrapper } from './indexCss';
import { AidRqDetailType } from '@/shared/types/aidrq-detail/aidrqDetailType';

interface AidRqDetailCenterProfileProps {
  data: AidRqDetailType;
}

const CurrentRecruit: React.FC<AidRqDetailCenterProfileProps> = ({ data }) => {
  return (
    <Wrapper>
      <h2>모집상태</h2>
      <Container>
        <div>
          <img src="assets/imgs/recruit-active.svg" alt=""></img>
        </div>
        <div>
          <p>
            현재 <span>{data.current_recruitment_count}</span>명이 지원했습니다.
          </p>
        </div>
      </Container>
    </Wrapper>
  );
};

export default CurrentRecruit;
