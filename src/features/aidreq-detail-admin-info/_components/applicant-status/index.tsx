import { useNavigate, useParams } from 'react-router-dom';
import { EmptyButton, SectionBox3, Title } from '../../indexCss';
import { StatusWrapper, UserBox, UserIcon, VolunteerSubTitle, VolunteerTitle, VolunteerTitleBox } from './indexCss';

interface ApplicantStatusProps {
  title: string;
  recruitStatus: string;
}
const ApplicantStatus = ({ title, recruitStatus }: ApplicantStatusProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <StatusWrapper>
      <Title>지원자 현황</Title>
      <SectionBox3>
        <UserBox>
          <UserIcon src="/assets/imgs/user-icon.svg" alt="유저아이콘" />
        </UserBox>
        <VolunteerTitleBox>
          <VolunteerTitle>지원자 현황 리스트</VolunteerTitle>
          <VolunteerSubTitle>지원자 리스트를 확인해보세요</VolunteerSubTitle>
        </VolunteerTitleBox>
        <EmptyButton
          onClick={() =>
            navigate(`/mypage/adminaidreqlist/${id}/applicantList`, {
              state: { title, recruitStatus }
            })
          }
          label="바로가기"
          type="white"
        />
      </SectionBox3>
    </StatusWrapper>
  );
};

export default ApplicantStatus;
