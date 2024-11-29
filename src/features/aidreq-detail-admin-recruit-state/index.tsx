import { OtherButton } from '@/components/button';
import {
  ButtonBox,
  FinishedButton,
  NumberOfPeople,
  RecruitedButton,
  RecruitingButton,
  RecruitStateButtonContainer,
  RecruitStateTitle,
  StateContainer,
  StateText,
  Wrapper
} from './indexCss';
import { useState } from 'react';

const AdminReqDetailAdminRecruitState = () => {
  const [activeState, setActiveState] = useState<'모집중' | '모집완료' | '종료'>('모집중');

  return (
    <Wrapper>
      <RecruitStateTitle>모집 상태</RecruitStateTitle>
      <StateContainer>
        <RecruitStateButtonContainer>
          <RecruitingButton isActive={activeState === '모집중'} onClick={() => setActiveState('모집중')}>
            <img src="/assets/imgs/recruit-active.svg" alt="모집중"></img>
          </RecruitingButton>
          <RecruitedButton isActive={activeState === '모집완료'} onClick={() => setActiveState('모집완료')}>
            <img src="/assets/imgs/recruit-active.svg" alt="모집완료"></img>
          </RecruitedButton>
          <FinishedButton isActive={activeState === '종료'} onClick={() => setActiveState('종료')}>
            <img src="/assets/imgs/recruit-active.svg" alt="종료"></img>
          </FinishedButton>
          <StateText>
            현재 <NumberOfPeople> 15 </NumberOfPeople>명이 지원했습니다.
          </StateText>
        </RecruitStateButtonContainer>
      </StateContainer>
      <ButtonBox>
        <OtherButton label="상태 변경 적용" />
      </ButtonBox>
    </Wrapper>
  );
};

export default AdminReqDetailAdminRecruitState;
