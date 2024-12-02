import LongListItemCss from './indexCss';
import MailInfo from './ui/MailInfo';
import CommunityInfo from './ui/CommunityInfo';

interface LongListItemProps {
  content_id: string;
  mainText: string;
  writer?: string;
  modifiedDate?: string;
  indexNum?: number;
  mailWriter?: string;
  isRead?: boolean;

  getContentId: (id: string) => void; // 클릭한 item의 content_id 반환
}

const LongListItem: React.FC<LongListItemProps> = ({
  content_id,
  mainText,
  writer,
  modifiedDate,
  indexNum,
  mailWriter,
  isRead,
  getContentId
}) => {
  return (
    <LongListItemCss onClick={() => getContentId(content_id)}>
      {indexNum ? <p className="numbering">{indexNum}</p> : ''}
      <p className={`mainText ${isRead ? 'read' : ''}`}>{mainText}</p>

      {modifiedDate && writer ? <CommunityInfo writer={writer} modifiedDate={modifiedDate} /> : ''}

      {mailWriter && isRead !== undefined ? <MailInfo isRead={isRead} mailWriter={mailWriter} /> : ''}
    </LongListItemCss>
  );
};
export default LongListItem;
