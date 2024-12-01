import ActivityLocation from './_components/activity-location';
import ActivityTime from './_components/activity-time';
import ApplicantStatus from './_components/applicant-status';
import ApplicationPeriod from './_components/application-period';
import { Wrapper } from './indexCss';

const AidReqDetailAdminInfo = () => {
  return (
    <Wrapper>
      <ApplicationPeriod />
      <ActivityTime />
      <ActivityLocation />
      <ApplicantStatus />
    </Wrapper>
  );
};

export default AidReqDetailAdminInfo;
