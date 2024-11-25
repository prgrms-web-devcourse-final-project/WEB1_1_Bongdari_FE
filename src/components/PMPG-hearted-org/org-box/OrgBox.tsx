import { OrgBoxCss } from './OrgBoxCss';

interface OrgBoxProps {
  org_id: string;
  orgName: string;
  orgImg?: string;
  onClickFunc: (id: string) => void;
}

const OrgBox: React.FC<OrgBoxProps> = ({ org_id, orgName, orgImg, onClickFunc }) => {
  return (
    <OrgBoxCss onClick={() => onClickFunc(org_id)}>
      <img src={orgImg} />
      <p>{orgName}</p>
    </OrgBoxCss>
  );
};
export default OrgBox;
