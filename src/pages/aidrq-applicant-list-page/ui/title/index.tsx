import { Title } from './indexCss';

interface ApplicantStatusTitleProps {
  title: string;
}
const ApplicantStatusTitle = ({ title }: ApplicantStatusTitleProps) => {
  return (
    <>
      <Title>'{title}'의 지원자 현황</Title>
    </>
  );
};

export default ApplicantStatusTitle;
