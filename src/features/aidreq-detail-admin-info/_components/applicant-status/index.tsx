import { EmptyButton, SectionBox, Title } from '../../indexCss';
import { UserBox, UserIcon, VolunteerSubTitle, VolunteerTitle, VolunteerTitleBox } from './indexCss';

const ApplicantStatus = () => {
  return (
    <div>
      <Title>지원자 현황</Title>
      <SectionBox>
        <UserBox>
          <UserIcon src="/assets/imgs/user-icon.svg" alt="유저아이콘" />
        </UserBox>
        <VolunteerTitleBox>
          <VolunteerTitle>지원자 현황 리스트</VolunteerTitle>
          <VolunteerSubTitle>지원자 리스트를 확인해보세요</VolunteerSubTitle>
        </VolunteerTitleBox>
        <EmptyButton>바로가기</EmptyButton>
      </SectionBox>
    </div>
  );
};

export default ApplicantStatus;
