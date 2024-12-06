import CommunityInfoCss from './CommunityInfoCss';

interface CommunityInfoProps {
  writer: string;
  modifiedDate: string;
}

const CommunityInfo: React.FC<CommunityInfoProps> = ({ writer, modifiedDate }) => {
  return (
    <CommunityInfoCss>
      <p className="writer">{writer}</p>
      <p className="modifiedDate">{modifiedDate}</p>
    </CommunityInfoCss>
  );
};
export default CommunityInfo;
