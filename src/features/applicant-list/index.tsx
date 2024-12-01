import ApplicantListItem from '@/components/applicant-list-item';
import { ApplicantListWrapper } from './indexCss';
import type { Applicant } from '@/shared/types/applicant-list-item/applicantListItemType';

const dummyData = [
  {
    volunteerId: 456,
    name: '홍길동',
    nickName: 'hong1',
    email: 'hong@example.com',
    img_url: 'dasdas@asdf.asd',
    status: '승인 대기',
    created_at: ''
  },
  {
    volunteerId: 457,
    name: '김철수',
    nickName: 'hong2',
    email: 'kcs@example.com',
    img_url: 'dasdas@asdf.asd',
    status: '승인 대기',
    created_at: ''
  },
  {
    volunteerId: 458,
    name: '김철수2',
    nickName: 'hong3',
    email: 'kcs@example.com',
    img_url: 'dasdas@asdf.asd',
    status: '승인 대기',
    created_at: ''
  },
  {
    volunteerId: 459,
    name: '김철수3',
    nickName: 'hong4',
    email: 'kcs@example.com',
    img_url: 'dasdas@asdf.asd',
    status: '승인 대기',
    created_at: ''
  },
  {
    volunteerId: 460,
    name: '김철수4',
    nickName: 'hong5',
    email: 'kcs@example.com',
    img_url: 'dasdas@asdf.asd',
    status: '승인 대기',
    created_at: ''
  },
  {
    volunteerId: 461,
    name: '김철수5',
    nickName: 'hong6',
    email: 'kcs@example.com',
    img_url: 'dasdas@asdf.asd',
    status: '승인 대기',
    created_at: ''
  },
  {
    volunteerId: 462,
    name: '김철수6',
    nickName: 'hong7',
    email: 'kcs@example.com',
    img_url: 'dasdas@asdf.asd',
    status: '승인 대기',
    created_at: '20241101'
  },
  {
    volunteerId: 463,
    name: '김철수7',
    nickName: 'hong8',
    email: 'kcs@example.com',
    img_url: 'dasdas@asdf.asd',
    status: '승인 대기',
    created_at: '20241102'
  }
];
const ApplicantList = () => {
  const applicants: Applicant[] = dummyData;

  return (
    <ApplicantListWrapper>
      {applicants.map((applicant) => (
        <ApplicantListItem key={applicant.volunteerId} {...applicant} />
      ))}
    </ApplicantListWrapper>
  );
};

export default ApplicantList;
