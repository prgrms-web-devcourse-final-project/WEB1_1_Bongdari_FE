import { ApplyButton, CommunityDetailContentBoxCss, CommunityImage, CommunityImageContainer } from './indexCss';
import { useCommunityDetailContent } from './logic/useCommunityDetailContent';
import WriterProfileBox from './ui/WriterProfileBox';
import useDateFormat from '@/shared/hooks/useDateFormat';
import { Link } from 'react-router-dom';

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
        {detailData.image_url && (
          <CommunityImageContainer>
            <CommunityImage src={detailData.image_url} alt="detailData.image_url" />
          </CommunityImageContainer>
        )}
        <div className="content">{detailData.content}</div>
        <div className="btnWrap">
          {isMyContent ? (
            <Link to={`/communitycreate/${content_id}`}>
              <ApplyButton label="수정하기" type="blue" />
            </Link>
          ) : (
            ''
          )}
        </div>
      </CommunityDetailContentBoxCss>
    );
  }
};
export default CommunityDetailContentBox;
