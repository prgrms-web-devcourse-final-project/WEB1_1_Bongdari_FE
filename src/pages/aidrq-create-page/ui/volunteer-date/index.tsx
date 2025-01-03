import AidRqCreateDate from '@/components/aidrq-create-date';
import { Wrapper } from './indexCss';

interface VolunteerDataProps {
  getDate: (date: string | null) => void;
  label: string;
}

const VolunteerDate: React.FC<VolunteerDataProps> = ({ getDate, label }) => {
  return (
    <Wrapper>
      <p>{label}</p>
      <AidRqCreateDate
        getDate={(date) => {
          getDate(date);
        }}
        datetime=""></AidRqCreateDate>
    </Wrapper>
  );
};

export default VolunteerDate;
