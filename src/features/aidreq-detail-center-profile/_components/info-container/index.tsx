import { Explain, PreferItemContainer, Site, Title, Wrapper } from './indexCss';
import InterestButton from './ui/interest-center';
import PreferItem from './ui/prefer-items';
import { aidRqCenterProfileType } from '@/shared/types/aidrq-detail-center/aidRqCenterProfileType';

interface InfoContainerProps {
  centerProfile: aidRqCenterProfileType;
}

const InfoContainer: React.FC<InfoContainerProps> = ({ centerProfile }) => {
  return (
    <Wrapper>
      <InterestButton></InterestButton>
      <Title>{centerProfile.name}</Title>
      <Site>{centerProfile.homepage_link}</Site>
      <Explain>{centerProfile.introduce}</Explain>
      <PreferItemContainer>
        <p>이러한 지원이 필요해요!</p>
        <PreferItem label="어린이동화 10권"></PreferItem>
        <PreferItem label="어린이동화 10권"></PreferItem>
        <PreferItem label="어린이동화 10권"></PreferItem>
        <PreferItem label="어린이동화 10권"></PreferItem>
        <PreferItem label="어린이동화 10권"></PreferItem>
        <PreferItem label="어린이동화 10권"></PreferItem>
        <PreferItem label="어린이동화 10권"></PreferItem>
      </PreferItemContainer>
    </Wrapper>
  );
};

export default InfoContainer;
