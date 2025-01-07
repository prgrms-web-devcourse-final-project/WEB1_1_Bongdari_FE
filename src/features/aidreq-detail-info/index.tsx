import { InfoFirstLine, InfoSecondLine, Wrapper } from './indexCss';
import { AidRqDetailType } from '@/shared/types/aidrq-detail/aidrqDetailType';
import CurrentRecruit from '@/components/aidreq-detail-info/current-recruit';
import RecruitDate from '@/components/aidreq-detail-info/recruit-date';
import Location from '@/components/aidreq-detail-info/location';
import VolunteerDate from '@/components/aidreq-detail-info/volunteer-date';

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
