import LongListItemCss from './indexCss';
import MailInfo from './ui/MailInfo';
import CommunityInfo from './ui/CommunityInfo';
import useDateFormat from '@/shared/hooks/useDateFormat';

interface LongListItemProps {
  content_id: string;
  mainText: string;
  writer?: string;
  modifiedDate?: string;
  indexNum?: number;
  mailWriter?: string;
  isRead?: boolean;

  getContentId?: (id: string) => void; // 클릭한 item의 content_id 반환
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
  const { formatDate } = useDateFormat();

  if (modifiedDate && writer) {
    // 커뮤니티 리스트 (메인페이지 & 커뮤니티리스트페이지)
    return (
      <LongListItemCss>
        {indexNum ? <p className="numbering">{indexNum}</p> : ''}
        <p
          className={`mainText ${isRead ? 'read' : ''}`}
          onClick={() => (getContentId ? getContentId(content_id) : '')}>
          {mainText}
        </p>

        <CommunityInfo writer={writer} modifiedDate={formatDate(modifiedDate)} />
      </LongListItemCss>
    );
  } else if (mailWriter && isRead !== undefined) {
    // 쪽지 리스트 (개인마이페이지)
    return (
      <LongListItemCss>
        <p
          className={`mainText ${isRead ? 'read' : ''}`}
          onClick={() => (getContentId ? getContentId(content_id) : '')}>
          {mainText}
        </p>
        <MailInfo isRead={isRead} mailWriter={mailWriter} />
      </LongListItemCss>
    );
  } else {
    // 봉사 목록 (개인마이페이지)
    return (
      <LongListItemCss>
        <p
          className={`mainText ${isRead ? 'read' : ''}`}
          onClick={() => (getContentId ? getContentId(content_id) : '')}>
          {mainText}
        </p>
      </LongListItemCss>
    );
  }
};
export default LongListItem;
