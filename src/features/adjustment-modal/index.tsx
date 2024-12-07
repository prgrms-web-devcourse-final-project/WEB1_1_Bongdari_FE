import { OtherButton } from '@/components/button';
import Modal from '@/components/modal';
import theme from '@/styles/theme';
import {
  AdjustmentSubTitle,
  AdjustmentTitle,
  Applicant,
  ApplicantList,
  ButtonBox,
  ModalWrapper,
  Name,
  NameBox,
  NickName,
  ScrollSection,
  TitleBox
} from './indexCss';
import { Checkbox } from '@mui/material';
import { useVolunteerApplies, type VolunteerApply } from '@/store/queries/aidreq-detail-center/useApplicant';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSettleApplyment } from '@/store/queries/aidreq-detail-center/useManageApplyment';

interface AdjustmentModalProps {
  setOpenAdjustmentModal: (isOpen: boolean) => void;
}

const AdjustmentModal = ({ setOpenAdjustmentModal }: AdjustmentModalProps) => {
  const { id } = useParams();
  const parsedRecruitBoardId = id ? parseInt(id) : 0;

  const { data: applicantsData, isLoading, isError } = useVolunteerApplies(parsedRecruitBoardId, 0, 9, 'APPROVED');
  const participants: VolunteerApply[] = applicantsData;

  // console.log('파티', participants);

  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const { mutate: settle } = useSettleApplyment();

  // attend가 true인 지원자들의 id를 초기 selectedIds로 설정
  useEffect(() => {
    if (participants) {
      const attendedIds = participants.filter((participant) => participant.attend).map((participant) => participant.id);
      setSelectedIds(attendedIds);
    }
  }, [participants]);

  if (isLoading) return <div style={{ paddingTop: '450px' }}>로딩 중...</div>;
  if (isError) return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;

  // 체크박스 핸들러
  const handleCheckbox = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((prevId) => prevId !== id));
    }
  };

  // 정산 가능한 봉사자가 있는지 확인
  const hasUnsettledParticipants = participants?.some((participant) => !participant.attend);

  // 정산하기 처리
  const handleSettle = () => {
    console.log('클릭');
    if (selectedIds.length === 0) {
      alert('선택된 봉사자가 없습니다.');
      return;
    }
    settle(selectedIds, {
      onSuccess: () => {
        alert('정산이 성공적으로 완료되었습니다.');
        setOpenAdjustmentModal(false);
      }
    });
  };

  return (
    <Modal variant="small" isOpen onClose={() => setOpenAdjustmentModal(false)}>
      <ModalWrapper>
        <ScrollSection>
          <TitleBox>
            <AdjustmentTitle>정산하기</AdjustmentTitle>
            <AdjustmentSubTitle>
              {hasUnsettledParticipants ? '참여한 인원만 체크해 주세요.' : '모든 봉사자의 정산이 완료되었습니다.'}
            </AdjustmentSubTitle>
          </TitleBox>

          <ApplicantList>
            {participants.map((participant) => (
              <Applicant key={participant.id}>
                <NameBox>
                  <Name>{participant.volunteer.name}</Name>
                  <NickName>{participant.volunteer.nickname}</NickName>
                </NameBox>
                <Checkbox
                  onChange={(e) => handleCheckbox(participant.id, e.target.checked)}
                  checked={participant.attend || selectedIds.includes(participant.id)}
                  disabled={participant.attend}
                />
              </Applicant>
            ))}
          </ApplicantList>
          <ButtonBox>
            <OtherButton
              label="정산하기"
              width="163px"
              height="48px"
              fontSize={theme.fontSize.eighthSize}
              fontWeight="600"
              onClick={handleSettle}
              disabled={!hasUnsettledParticipants}
            />
          </ButtonBox>
        </ScrollSection>
      </ModalWrapper>
    </Modal>
  );
};

export default AdjustmentModal;
