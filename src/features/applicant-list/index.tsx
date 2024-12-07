import ApplicantListItem from '@/components/applicant-list-item';
import { ApplicantListWrapper } from './indexCss';
import type { VolunteerApply } from '@/store/queries/aidreq-detail-center/useApplicant';

export interface ApplicantListProps {
  applicants: VolunteerApply[];
}
const ApplicantList = ({ applicants }: ApplicantListProps) => {
  return (
    <ApplicantListWrapper>
      {applicants.map((applicant) => (
        <ApplicantListItem key={applicant.id} applicant={applicant} />
      ))}
    </ApplicantListWrapper>
  );
};

export default ApplicantList;
