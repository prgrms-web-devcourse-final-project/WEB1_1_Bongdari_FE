import { InterestCenterBoxCss } from './InterestCenterBoxCss';

interface InterestCenterBoxProps {
  orgName: string;
  orgImg?: string;
}

const InterestCenterBox: React.FC<InterestCenterBoxProps> = ({ orgName, orgImg }) => {
  return (
    <InterestCenterBoxCss>
      <img src={orgImg || '/assets/imgs/no-img-center.svg'} />
      <p>{orgName}</p>
    </InterestCenterBoxCss>
  );
};
export default InterestCenterBox;
