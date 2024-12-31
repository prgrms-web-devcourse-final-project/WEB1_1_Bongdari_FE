import { VolunteerType } from '@/shared/types/aidrq-create-type/AidRqCreateType';
import { Wrapper } from './indexCss';
import AidRqCreateRecruitHours from '@/components/aidrq-create-hours';

interface VolunteerHourProps {
  getTitleAndFilter: (key: keyof VolunteerType, value: number) => void;
}

const VolunteerHour: React.FC<VolunteerHourProps> = ({ getTitleAndFilter }) => {
  return (
    <Wrapper>
      <p>활동 시간 (시간단위)</p>
      <AidRqCreateRecruitHours
        getHours={(hours) => {
          getTitleAndFilter('volunteer_hours', hours);
        }}
        hours={0}></AidRqCreateRecruitHours>
    </Wrapper>
  );
};

export default VolunteerHour;
