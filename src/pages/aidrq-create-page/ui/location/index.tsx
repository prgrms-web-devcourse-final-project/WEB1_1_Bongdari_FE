import AidRqCreateLocation from '@/components/aidrq-create-location';
import { Wrapper } from './indexCss';

const Location = () => {
  return (
    <Wrapper>
      <p>활동 주소</p>
      <AidRqCreateLocation></AidRqCreateLocation>
    </Wrapper>
  );
};

export default Location;
