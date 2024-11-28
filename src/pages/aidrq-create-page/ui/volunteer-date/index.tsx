import AidRqCreateDate from '@/components/aidrq-create-date';
import { Wrapper } from './indexCss';

interface VolunteerDataProps {
  label: string;
}

const VolunteerDate: React.FC<VolunteerDataProps> = ({ label }) => {
  return (
    <Wrapper>
      <p>{label}</p>
      <AidRqCreateDate></AidRqCreateDate>
    </Wrapper>
  );
};

export default VolunteerDate;
