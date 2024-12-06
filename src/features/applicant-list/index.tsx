import ApplicantListItem from '@/components/applicant-list-item';
import { ApplicantListWrapper } from './indexCss';
import type { VolunteerApply } from '@/store/queries/aidreq-detail-center/useApplicant';

export interface ApplicantListProps {
  applicants: VolunteerApply[];
}
const ApplicantList = ({ applicants }: ApplicantListProps) => {
  console.log('applicants다.', applicants);

  return (
    <ApplicantListWrapper>
      {applicants.map((applicant) => (
        <ApplicantListItem key={applicant.id} />
      ))}
    </ApplicantListWrapper>
  );
};

export default ApplicantList;
