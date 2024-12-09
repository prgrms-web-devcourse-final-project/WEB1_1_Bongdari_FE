import ApplicantListItem from '@/components/applicant-list-item';
import { ApplicantListWrapper } from './indexCss';
import type { VolunteerApply } from '@/store/queries/aidreq-detail-center/useApplicant';

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
