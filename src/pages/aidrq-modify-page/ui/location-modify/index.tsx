import AidRqCreateLocation from '@/components/aidrq-create-location';
import { AidRqCreateLocationWrapper, Contents, Wrapper } from './indexCss';

const LocationModify = () => {
  return (
    <Wrapper>
      <Contents>
        <p>활동 장소</p>
        <AidRqCreateLocationWrapper>
          <AidRqCreateLocation></AidRqCreateLocation>
        </AidRqCreateLocationWrapper>
      </Contents>
      <button>수정하기</button>
    </Wrapper>
  );
};

export default LocationModify;
