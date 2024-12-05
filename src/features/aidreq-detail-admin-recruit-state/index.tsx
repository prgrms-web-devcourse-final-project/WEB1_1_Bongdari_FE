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
import recruitStatusMapping, {
  type RecruitUIState,
  type RecruitAPIState,
  statusToKorean
} from '@/shared/mapping/aid-recruit-status-mapping';
import { useUpdateRecruitStatus } from '@/store/queries/aidreq-detail-center/useRecruitBoard';

interface AdminReqDetailAdminRecruitStateProps {
  currentStatus: RecruitAPIState;
  id: number;
  applicantCount?: number;
}

const AdminReqDetailAdminRecruitState = ({
  currentStatus,
  id,
  applicantCount
}: AdminReqDetailAdminRecruitStateProps) => {
  const [activeState, setActiveState] = useState<RecruitUIState>(statusToKorean[currentStatus]);
  const { mutate: updateStatus, isPending: isUpdating } = useUpdateRecruitStatus();

  const handleStatusUpdate = () => {
    if (!id || isNaN(id)) return;

    if (currentStatus === 'COMPLETED' && recruitStatusMapping[activeState] !== 'COMPLETED') {
      alert('종료된 모집은 상태를 변경할 수 없습니다.');
      return;
    }

    updateStatus({ id, status: recruitStatusMapping[activeState] });
  };

  console.log('액티브스테이드', activeState);
  console.log(currentStatus);

  console.log('mappedStatus:', recruitStatusMapping[activeState]);

  return (
    <Wrapper>
      <RecruitStateTitle>모집 상태</RecruitStateTitle>
      <StateContainer>
        <RecruitStateButtonContainer>
          <RecruitingButton
            isActive={activeState === '모집중'}
            onClick={() => setActiveState('모집중')}
            disabled={isUpdating}>
            <img src="/assets/imgs/recruit-active.svg" alt="모집중"></img>
          </RecruitingButton>
          <RecruitedButton
            isActive={activeState === '모집완료'}
            onClick={() => setActiveState('모집완료')}
            disabled={isUpdating}>
            <img src="/assets/imgs/recruit-closed.svg" alt="모집완료"></img>
          </RecruitedButton>
          <FinishedButton
            isActive={activeState === '종료'}
            onClick={() => setActiveState('종료')}
            disabled={isUpdating}>
            <img src="/assets/imgs/recruit-completed.svg" alt="종료"></img>
          </FinishedButton>
          <StateText>
            현재 <NumberOfPeople> {applicantCount} </NumberOfPeople>명이 지원했습니다.
          </StateText>
        </RecruitStateButtonContainer>
      </StateContainer>
      <ButtonBox>
        <OtherButton
          label="상태 변경 적용"
          onClick={handleStatusUpdate}
          disabled={isUpdating || recruitStatusMapping[activeState] === currentStatus}
        />
      </ButtonBox>
    </Wrapper>
  );
};

export default AdminReqDetailAdminRecruitState;
