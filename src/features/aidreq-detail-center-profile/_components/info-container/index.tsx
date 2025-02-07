import { centerProfileType } from '@/shared/types/center-profile/centerProfile';
import { Explain, PreferItemContainer, Site, Title, Wrapper } from './indexCss';
// import InterestButton from './ui/interest-center';
import PreferItem from './ui/prefer-items';
import InterestHeartBtn from '@/components/interest-heart';

interface InfoContainerProps {
  centerProfile: centerProfileType;
}

const InfoContainer: React.FC<InfoContainerProps> = ({ centerProfile }) => {
  console.log(centerProfile);
  return (
    <Wrapper>
      <InterestHeartBtn center_id={centerProfile.id} top={'0px'} right={'100px'} />
      <Title>{centerProfile.name}</Title>
      <Site>{centerProfile.homepage_url}</Site>
      <Explain>{centerProfile.introduce}</Explain>
      <PreferItemContainer>
        <p>이러한 지원이 필요해요!</p>
        {centerProfile.prefer_items?.map((item) => <PreferItem label={item.item_name}></PreferItem>)}
      </PreferItemContainer>
    </Wrapper>
  );
};

export default InfoContainer;
