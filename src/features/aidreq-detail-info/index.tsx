import CurrentRecruit from './_components/current-recruit';
import Location from './_components/location';
import RecruitDate from './_components/recruit-date';
import VolunteerDate from './_components/volunteer-date';
import { InfoFirstLine, InfoSecondLine, Wrapper } from './indexCss';

const AidRqDetailInfo = () => {
  return (
    <Wrapper>
      <InfoFirstLine>
        <CurrentRecruit></CurrentRecruit>
        <RecruitDate></RecruitDate>
      </InfoFirstLine>
      <InfoSecondLine>
        <Location></Location>
        <VolunteerDate></VolunteerDate>
      </InfoSecondLine>
    </Wrapper>
  );
};

export default AidRqDetailInfo;
