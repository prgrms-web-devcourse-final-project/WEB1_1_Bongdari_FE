import Location from '@/components/aidreq-detail-info/location';
import ApplicantStatus from './_components/applicant-status';
import { Wrapper } from './indexCss';
import type { AidRqDetailType } from '@/shared/types/aidrq-detail/aidrqDetailType';
import RecruitDate from '@/components/aidreq-detail-info/recruit-date';
import VolunteerDate from '@/components/aidreq-detail-info/volunteer-date';

interface AidReqDetailAdminInfoProps {
  recruitDetailData: AidRqDetailType;
}
const AidReqDetailAdminInfo = ({ recruitDetailData }: AidReqDetailAdminInfoProps) => {
  return (
    <Wrapper>
      <RecruitDate data={recruitDetailData} />
      <VolunteerDate data={recruitDetailData} />
      <Location data={recruitDetailData} />
      <ApplicantStatus title={recruitDetailData.title} recruitStatus={recruitDetailData.recruit_status} />
    </Wrapper>
  );
};

export default AidReqDetailAdminInfo;
