import CommunityInfoCss from './CommunityInfoCss';

interface CommunityInfoProps {
  writer: string;
  modifiedDate: string;
}

const CommunityInfo: React.FC<CommunityInfoProps> = ({ writer, modifiedDate }) => {
  return (
    <CommunityInfoCss>
      {writer ? <p className="writer">{writer}</p> : ''}
      {modifiedDate ? <p className="modifiedDate">{modifiedDate}</p> : ''}
    </CommunityInfoCss>
  );
};
export default CommunityInfo;
