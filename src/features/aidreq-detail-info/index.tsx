import CurrentRecruit from './_components/current-recruit';
import Location from './_components/location';
import RecruitDate from './_components/recruit-date';
import VolunteerDate from './_components/volunteer-date';
import { InfoFirstLine, InfoSecondLine, Wrapper } from './indexCss';
import { AidRqDetailType } from '@/shared/types/aidrq-detail/aidrqDetailType';

interface AidRqDetailCenterProfileProps {
  data: AidRqDetailType;
}

const AidRqDetailInfo: React.FC<AidRqDetailCenterProfileProps> = ({ data }) => {
  return (
    <Wrapper>
      <InfoFirstLine>
        <CurrentRecruit data={data}></CurrentRecruit>
        <RecruitDate data={data}></RecruitDate>
      </InfoFirstLine>
      <InfoSecondLine>
        <Location data={data}></Location>
        <VolunteerDate data={data}></VolunteerDate>
      </InfoSecondLine>
    </Wrapper>
  );
};

export default AidRqDetailInfo;
