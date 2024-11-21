import ListItemCss from './indexCss';
import MailInfo from './ui/MailInfo';
import CommunityInfo from './ui/CommunityInfo';

interface ListItemProps {
  content_id: string;
  mainText: string;
  writer?: string;
  modifiedDate?: string;
  indexNum?: number;
  mailWriter?: string;
  isRead?: boolean;

  getContentId: (id: string) => void; // 클릭한 item의 content_id 반환
}

const ListItem: React.FC<ListItemProps> = ({
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
    <ListItemCss onClick={() => getContentId(content_id)}>
      {indexNum ? <p className="numbering">{indexNum}</p> : ''}
      <p className={`mainText ${isRead ? 'read' : ''}`}>{mainText}</p>

      {modifiedDate && writer ? <CommunityInfo writer={writer} modifiedDate={modifiedDate} /> : ''}

      {mailWriter && isRead !== undefined ? <MailInfo isRead={isRead} mailWriter={mailWriter} /> : ''}
    </ListItemCss>
  );
};
export default ListItem;
