import ActivityLocation from './_components/activity-location';
import ActivityTime from './_components/activity-time';
import ApplicantStatus from './_components/applicant-status';
import ApplicationPeriod from './_components/application-period';
import { Wrapper } from './indexCss';

interface AidReqDetailAdminInfoProps {
  recruitDetailData: {
    title: string;
    created_at: string;
    volunteer_start_date_time: string;
    volunteer_end_date_time: string;
    volunteer_hours: number;
    recruit_status: string;
    location: {
      address: string;
      latitude: number;
      longitude: number;
    };
  };
}
const AidReqDetailAdminInfo = ({ recruitDetailData }: AidReqDetailAdminInfoProps) => {
  return (
    <Wrapper>
      <ApplicationPeriod
        createdAt={recruitDetailData.created_at}
        startDateTime={recruitDetailData.volunteer_start_date_time}
        endDateTime={recruitDetailData.volunteer_end_date_time}
      />
      <ActivityTime
        startDateTime={recruitDetailData.volunteer_start_date_time}
        endDateTime={recruitDetailData.volunteer_end_date_time}
        volunteerTime={recruitDetailData.volunteer_hours}
      />
      <ActivityLocation
        address={recruitDetailData.location.address}
        latitude={recruitDetailData.location.latitude}
        longitude={recruitDetailData.location.longitude}
      />
      <ApplicantStatus title={recruitDetailData.title} recruitStatus={recruitDetailData.recruit_status} />
    </Wrapper>
  );
};

export default AidReqDetailAdminInfo;
