import ApplicantListItem from '@/components/applicant-list-item';
import { ApplicantListWrapper } from './indexCss';
import { VolunteerApply } from '@/shared/types/aidrq-volunteer-list/volunteerListType';

export interface ApplicantListProps {
  applicants: VolunteerApply[];
  recruitStatus: string;
}
const ApplicantList = ({ applicants, recruitStatus }: ApplicantListProps) => {
  // console.log('머읖리칸트(얜 배열)', applicants);

  return (
    <ApplicantListWrapper>
      {applicants.map((applicant) => (
        <ApplicantListItem key={applicant.id} applicant={applicant} recruitStatus={recruitStatus} />
      ))}
    </ApplicantListWrapper>
  );
};

export default ApplicantList;
