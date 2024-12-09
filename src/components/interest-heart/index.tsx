import { InterestHeartBtnCss } from './interestCss';
import { useInterest } from './logic/useInterest';

// 로그인 안함, 기관 로그인 : 비활성화
// 개인 로그인 : 활성화

interface interestHeartBtnProps {
  center_id: string;
  firstState: boolean;
  top: string;
  right: string;
}
const InterestHeartBtn = ({ center_id, top, right }: interestHeartBtnProps) => {
  const { isInterest, isDisabled, onClickToggleInterest } = useInterest({ center_id });

  return (
    <InterestHeartBtnCss
      onClick={onClickToggleInterest}
      className={isDisabled ? 'disabled' : ''}
      top={top}
      right={right}>
      {isInterest ? <img src="/assets/imgs/heart.svg" /> : <img src="/assets/imgs/heart-empty.svg" />}
    </InterestHeartBtnCss>
  );
};
export default InterestHeartBtn;
