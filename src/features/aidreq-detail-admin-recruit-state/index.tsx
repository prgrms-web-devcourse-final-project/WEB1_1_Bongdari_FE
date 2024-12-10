// import { OtherButton } from '@/components/button';
// import {
//   ButtonBox,
//   FinishedButton,
//   NumberOfPeople,
//   RecruitedButton,
//   RecruitingButton,
//   RecruitStateButtonContainer,
//   RecruitStateTitle,
//   StateContainer,
//   StateText,
//   Wrapper
// } from './indexCss';
// import { useState } from 'react';
// import recruitStatusMapping, {
//   type RecruitUIState,
//   type RecruitAPIState,
//   statusToKorean
// } from '@/shared/mapping/aid-recruit-status-mapping';
// import { useUpdateRecruitStatus } from '@/store/queries/aidreq-detail-center/useRecruitBoard';
// import { useAlertDialog, useConfirmDialog } from '@/store/stores/dialog/dialogStore';

// interface AdminReqDetailAdminRecruitStateProps {
//   currentStatus: RecruitAPIState;
//   id: number;
//   applicantCount?: number;
//   startDate: string;
// }

// const AdminReqDetailAdminRecruitState = ({
//   currentStatus,
//   id,
//   applicantCount,
//   startDate
// }: AdminReqDetailAdminRecruitStateProps) => {
//   const [activeState, setActiveState] = useState<RecruitUIState>(statusToKorean[currentStatus]);
//   const { mutate: updateStatus, isPending: isUpdating } = useUpdateRecruitStatus();
//   const { openConfirm } = useConfirmDialog();
//   const { openAlert } = useAlertDialog();

//   // 봉사 시작 전날 자정인지 체크하는 함수
//   const isAfterDeadLine = () => {
//     const deadline = new Date(startDate);
//     deadline.setHours(0, 0, 0, 0);
//     return new Date() > deadline;
//   };

//   const handleStatusUpdate = () => {
//     if (!id || isNaN(id)) return;

//     if (currentStatus === 'COMPLETED') {
//       openAlert('종료된 모집은 상태를 변경할 수 없습니다.');
//       return;
//     }

//     // CLOSED에서 RECRUITING으로 바꾸려는 경우
//     if (currentStatus === 'CLOSED' && recruitStatusMapping[activeState] === 'RECRUITING' && isAfterDeadLine()) {
//       openAlert('봉사 시작일 00:00 이후에는 모집중으로 상태를 변경할 수 없습니다.');
//       return;
//     }

//     openConfirm('모집 상태를 변경하시겠습니까?', () => {
//       updateStatus(
//         { id, status: recruitStatusMapping[activeState] },
//         {
//           onSuccess: () => {
//             openAlert('모집 상태가 성공적으로 변경되었습니다.');
//           },
//           onError: () => {
//             openAlert('모집 상태 변경에 실패했습니다. 다시 시도해주세요.');
//           }
//         }
//       );
//     });
//   };

//   // 현재 상태에 따른 버튼 비활성화
//   const isRecruitingDisabled =
//     isUpdating || currentStatus === 'COMPLETED' || (currentStatus === 'CLOSED' && isAfterDeadLine());
//   const isClosedDisabled = isUpdating || currentStatus === 'COMPLETED';

//   //   updateStatus({ id, status: recruitStatusMapping[activeState] });
//   //   openConfirm('모집 상태를 변경하시겠습니까?', () => {
//   //     openAlert('모집 상태가 성공적으로 변경되었습니다.');
//   //   });
//   // };

//   // console.log('현재 active된 state', activeState);
//   // console.log('지금 눌린 state', currentStatus);
//   // console.log('mappedStatus:', recruitStatusMapping[activeState]);

//   return (
//     <Wrapper>
//       <RecruitStateTitle>모집 상태</RecruitStateTitle>
//       <StateContainer>
//         <RecruitStateButtonContainer>
//           <RecruitingButton
//             isActive={activeState === '모집중'}
//             onClick={() => setActiveState('모집중')}
//             disabled={isRecruitingDisabled}>
//             <img src="/assets/imgs/recruit-active.svg" alt="모집중"></img>
//           </RecruitingButton>
//           <RecruitedButton
//             isActive={activeState === '모집완료'}
//             onClick={() => setActiveState('모집완료')}
//             disabled={isClosedDisabled}>
//             <img src="/assets/imgs/recruit-closed.svg" alt="모집완료"></img>
//           </RecruitedButton>
//           <FinishedButton isActive={activeState === '종료'}>
//             <img src="/assets/imgs/recruit-completed.svg" alt="종료"></img>
//           </FinishedButton>
//           <StateText>
//             현재 <NumberOfPeople> {applicantCount} </NumberOfPeople>명이 지원했습니다.
//           </StateText>
//         </RecruitStateButtonContainer>
//       </StateContainer>
//       <ButtonBox>
//         <OtherButton
//           label="상태 변경 적용"
//           onClick={handleStatusUpdate}
//           disabled={isUpdating || recruitStatusMapping[activeState] === currentStatus}
//         />
//       </ButtonBox>
//     </Wrapper>
//   );
// };

// export default AdminReqDetailAdminRecruitState;

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
import { useAlertDialog, useConfirmDialog } from '@/store/stores/dialog/dialogStore';

interface AdminReqDetailAdminRecruitStateProps {
  currentStatus: RecruitAPIState;
  id: number;
  total?: number;
  startDate: string;
}

const AdminReqDetailAdminRecruitState = ({
  currentStatus,
  id,
  total,
  startDate
}: AdminReqDetailAdminRecruitStateProps) => {
  const [activeState, setActiveState] = useState<RecruitUIState>(statusToKorean[currentStatus]);
  const { mutate: updateStatus, isPending: isUpdating } = useUpdateRecruitStatus();
  const { openConfirm } = useConfirmDialog();
  const { openAlert } = useAlertDialog();

  // 봉사 시작 전날 자정인지 체크하는 함수
  const isAfterDeadLine = () => {
    const deadline = new Date(startDate);
    deadline.setHours(0, 0, 0, 0);
    return new Date() > deadline;
  };

  const handleStatusUpdate = () => {
    if (!id || isNaN(id)) return;

    if (currentStatus === 'COMPLETED') {
      openAlert('종료된 모집은 상태를 변경할 수 없습니다.');
      return;
    }

    // CLOSED에서 RECRUITING으로 바꾸려는 경우
    if (currentStatus === 'CLOSED' && recruitStatusMapping[activeState] === 'RECRUITING' && isAfterDeadLine()) {
      openAlert('봉사 시작일 00:00 이후에는 모집중으로 상태를 변경할 수 없습니다.');
      return;
    }

    openConfirm('모집 상태를 변경하시겠습니까?', () => {
      updateStatus(
        { id, status: recruitStatusMapping[activeState] },
        {
          onSuccess: () => {
            openAlert('모집 상태가 성공적으로 변경되었습니다.');
          },
          onError: () => {
            openAlert('모집 상태 변경에 실패했습니다. 다시 시도해주세요.');
          }
        }
      );
    });
  };

  // 현재 상태에 따른 버튼 비활성화
  const isRecruitingDisabled =
    isUpdating || currentStatus === 'COMPLETED' || (currentStatus === 'CLOSED' && isAfterDeadLine());
  const isClosedDisabled = isUpdating || currentStatus === 'COMPLETED';

  //   updateStatus({ id, status: recruitStatusMapping[activeState] });
  //   openConfirm('모집 상태를 변경하시겠습니까?', () => {
  //     openAlert('모집 상태가 성공적으로 변경되었습니다.');
  //   });
  // };

  // console.log('현재 active된 state', activeState);
  // console.log('지금 눌린 state', currentStatus);
  // console.log('mappedStatus:', recruitStatusMapping[activeState]);

  return (
    <Wrapper>
      <RecruitStateTitle>모집 상태</RecruitStateTitle>
      <StateContainer>
        <RecruitStateButtonContainer>
          <RecruitingButton
            isActive={activeState === '모집중'}
            onClick={() => setActiveState('모집중')}
            disabled={isRecruitingDisabled}>
            <img src="/assets/imgs/recruit-active.svg" alt="모집중"></img>
          </RecruitingButton>
          <RecruitedButton
            isActive={activeState === '모집완료'}
            onClick={() => setActiveState('모집완료')}
            disabled={isClosedDisabled}>
            <img src="/assets/imgs/recruit-closed.svg" alt="모집완료"></img>
          </RecruitedButton>
          <FinishedButton isActive={activeState === '종료'}>
            <img src="/assets/imgs/recruit-completed.svg" alt="종료"></img>
          </FinishedButton>
          <StateText>
            현재 <NumberOfPeople> {total} </NumberOfPeople>명이 지원했습니다.
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
