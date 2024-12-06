import { CommunityDetailContentBoxCss } from './indexCss';
import { useCommunityDetailContent } from './logic/useCommunityDetailContent';
import { SubmitButton } from '@/components/button';
import WriterProfileBox from './ui/WriterProfileBox';
import useDateFormat from '@/shared/hooks/useDateFormat';

const CommunityDetailContentBox = ({ content_id }: { content_id: number }) => {
  const { detailData, writerData, isMyContent } = useCommunityDetailContent(content_id);
  const { formatDate } = useDateFormat();

  if (!detailData) {
    <CommunityDetailContentBoxCss>
      <div className="noData">커뮤니티 데이터가 없습니다</div>
    </CommunityDetailContentBoxCss>;
  } else {
    return (
      <CommunityDetailContentBoxCss>
        <i className="title">{detailData.title}</i>
        <i className="modifiedDate">최근 수정일: {formatDate(detailData.updated_at)}</i>
        <WriterProfileBox {...writerData} />
        <div className="content">{detailData.content}</div>
        <div className="btnWrap">{isMyContent ? <SubmitButton label="수정하기" /> : ''}</div>
      </CommunityDetailContentBoxCss>
    );
  }
};
export default CommunityDetailContentBox;
