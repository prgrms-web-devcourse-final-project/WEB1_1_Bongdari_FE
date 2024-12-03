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

interface AdjustmentModalProps {
  setOpenAdjustmentModal: (isOpen: boolean) => void;
}

interface Participant {
  id: number;
  name: string;
  username: string;
}

// 더미데이터
const participants: Participant[] = [
  { id: 1, name: '김민준', username: '710minjoon' },
  { id: 2, name: '이서연', username: 'seoyeon22' },
  { id: 3, name: '박지우', username: 'jwpark' },
  { id: 4, name: '최수현', username: 'suhyeon95' },
  { id: 5, name: '정예준', username: 'yejun88' },
  { id: 6, name: '강민서', username: 'minseo77' },
  { id: 7, name: '윤도현', username: 'dohyun123' },
  { id: 8, name: '임서윤', username: 'seoyunlim' },
  { id: 9, name: '한지민', username: 'jimin_han' },
  { id: 10, name: '송현우', username: 'hyunwoo99' }
];

const AdjustmentModal = ({ setOpenAdjustmentModal }: AdjustmentModalProps) => {
  return (
    <Modal variant="small" isOpen onClose={() => setOpenAdjustmentModal(false)}>
      <ModalWrapper>
        <ScrollSection>
          <TitleBox>
            <AdjustmentTitle>정산하기</AdjustmentTitle>
            <AdjustmentSubTitle>참여한 인원만 체크해 주세요.</AdjustmentSubTitle>
          </TitleBox>

          <ApplicantList>
            {participants.map((participant) => (
              <Applicant key={participant.id}>
                <NameBox>
                  <Name>{participant.name}</Name>
                  <NickName>{participant.username}</NickName>
                </NameBox>
                <Checkbox />
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
            />
          </ButtonBox>
        </ScrollSection>
      </ModalWrapper>
    </Modal>
  );
};

export default AdjustmentModal;
