import { InterestCenterBoxCss } from './InterestCenterBoxCss';

interface InterestCenterBoxProps {
  org_id: string;
  orgName: string;
  orgImg?: string;
  onClickFunc: (id: string) => void;
}

const InterestCenterBox: React.FC<InterestCenterBoxProps> = ({ org_id, orgName, orgImg, onClickFunc }) => {
  return (
    <InterestCenterBoxCss onClick={() => onClickFunc(org_id)}>
      <img src={orgImg} />
      <p>{orgName}</p>
    </InterestCenterBoxCss>
  );
};
export default InterestCenterBox;
