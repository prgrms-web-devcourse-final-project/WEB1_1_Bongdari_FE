import { LocationInfo, Wrapper } from './indexCss';

const AidRqCreateLocation = () => {
  return (
    <Wrapper>
      <LocationInfo disabled placeholder="활동 위치를 설정해주세요."></LocationInfo>
      <button>
        <img src="assets/imgs/location.svg" alt=""></img>
      </button>
    </Wrapper>
  );
};

export default AidRqCreateLocation;
