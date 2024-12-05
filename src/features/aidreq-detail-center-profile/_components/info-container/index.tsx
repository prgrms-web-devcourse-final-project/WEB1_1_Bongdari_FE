import { centerProfileType } from '@/shared/types/center-profile/centerProfile';
import { Explain, PreferItemContainer, Site, Title, Wrapper } from './indexCss';
// import InterestButton from './ui/interest-center';
import PreferItem from './ui/prefer-items';
import InterestHeartBtn from '@/components/interest-heart';

interface InfoContainerProps {
  centerProfile: centerProfileType;
}

const InfoContainer: React.FC<InfoContainerProps> = ({ centerProfile }) => {
  return (
    <Wrapper>
      <InterestHeartBtn
        center_id={centerProfile.center_id}
        firstState={centerProfile.interest}
        top={'0px'}
        right={'100px'}
      />
      <Title>{centerProfile.name}</Title>
      <Site>{centerProfile.homepage_link}</Site>
      <Explain>{centerProfile.introduce}</Explain>
      <PreferItemContainer>
        <p>이러한 지원이 필요해요!</p>
        {centerProfile.prefer_item?.map((item) => <PreferItem label={item.itemName}></PreferItem>)}
      </PreferItemContainer>
    </Wrapper>
  );
};

export default InfoContainer;
