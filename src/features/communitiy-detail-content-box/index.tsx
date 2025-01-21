import { useDeleteCommunity } from '@/store/queries/community-create-common-query/useControlCommunity';
import {
  ApplyButton,
  CommunityDetailContentBoxCss,
  CommunityImage,
  CommunityImageContainer,
  DeleteCommunityButton,
  EditDeleteBtnCon,
  EditorContent
} from './indexCss';
import { useCommunityDetailContent } from './logic/useCommunityDetailContent';
import WriterProfileBox from './ui/WriterProfileBox';
import useDateFormat from '@/shared/hooks/useDateFormat';
import { Link, useNavigate } from 'react-router-dom';
import { useAlertDialog, useConfirmDialog } from '@/store/stores/dialog/dialogStore';

const CommunityDetailContentBox = ({ content_id }: { content_id: number }) => {
  const { detailData, writerData, isMyContent } = useCommunityDetailContent(content_id);

  const { mutate: deleteCommunity } = useDeleteCommunity();
  const navigate = useNavigate();

  const { formatDate } = useDateFormat();
  const { openConfirm } = useConfirmDialog();
  const { openAlert } = useAlertDialog();

  const handleDeleteCommunity = () => {
    openConfirm('글을 삭제하시겠습니까?', async () => {
      try {
        await deleteCommunity(Number(content_id), {
          onSuccess: () => {
            openAlert('글이 성공적으로 삭제되었습니다.');
            navigate('/community');
          },
          onError: () => {
            openAlert('글을 삭제하던 중 오류가 발생했습니다. 다시 시도해주세요.');
          }
        });
      } catch (error) {
        console.error('글 삭제 중 오류 발생', error);
      }
    });
  };

  if (!detailData) {
    return (
      <CommunityDetailContentBoxCss>
        <div className="noData">커뮤니티 데이터가 없습니다</div>
      </CommunityDetailContentBoxCss>
    );
  }
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
      <EditorContent dangerouslySetInnerHTML={{ __html: detailData.content }} className="content" />
      <div className="btnWrap">
        {isMyContent ? (
          <EditDeleteBtnCon>
            <Link to={`/communitycreate/${content_id}`}>
              <ApplyButton label="수정하기" type="blue" />
            </Link>
            <DeleteCommunityButton label="삭제하기" type="white" onClick={handleDeleteCommunity} />
          </EditDeleteBtnCon>
        ) : (
          ''
        )}
      </div>
    </CommunityDetailContentBoxCss>
  );
};
export default CommunityDetailContentBox;
