import AidRqCreateRecruitPopulation from '@/components/aidrq-create-recruit-population';
import { Wrapper } from './indexCss';
import { VolunteerType } from '@/shared/types/aidrq-create-type/AidRqCreateType';

interface RecruitPopulationProps {
  getTitleAndFilter: (key: keyof VolunteerType, value: number) => void;
}

const RecruitPopulation: React.FC<RecruitPopulationProps> = ({ getTitleAndFilter }) => {
  return (
    <Wrapper>
      <p>예상 모집 인원</p>
      <AidRqCreateRecruitPopulation
        getPopulation={(population) => {
          getTitleAndFilter('recruitment_count', population);
        }}
        recruitmentcount={0}></AidRqCreateRecruitPopulation>
    </Wrapper>
  );
};

export default RecruitPopulation;
