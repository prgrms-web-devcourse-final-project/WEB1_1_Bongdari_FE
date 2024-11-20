import ListItemCss from './indexCss';

interface ListItemProps {
  content_id: string;
  mainText: string;
  writer?: string;
  modifiedDate?: string;
  indexNum?: number;
  isRead?: boolean;

  getContentId: (id: string) => void; // 클릭한 item의 content_id 반환
}

const ListItem: React.FC<ListItemProps> = ({
  content_id,
  mainText,
  writer,
  modifiedDate,
  indexNum,
  isRead,
  getContentId
}) => {
  return (
    <ListItemCss onClick={() => getContentId(content_id)}>
      {indexNum ? <p className="numbering">{indexNum}</p> : ''}
      <p className={`mainText ${isRead ? 'read' : ''}`}>{mainText}</p>
      {writer ? <p className="writer">{writer}</p> : ''}
      {modifiedDate ? <p className="modifiedDate">{modifiedDate}</p> : ''}
    </ListItemCss>
  );
};
export default ListItem;
