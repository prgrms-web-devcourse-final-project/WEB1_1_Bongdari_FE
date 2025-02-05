import Modal from '@/components/modal';
import { ButtonContainer, Contents, ReviewText, ScrollSection, Title, Wrapper } from './indexCss';
import InputBox from '@/components/inputBox';
import { useState } from 'react';
import { createReview } from '@/store/queries/review-create-common-query/useCreateReview';
import { ReviewForm } from '@/shared/types/review/reviewType';
import { useAlertDialog } from '@/store/stores/dialog/dialogStore';

interface ReviewCreateModalProps {
  reviewModalState: boolean;
  SetReviewModalState: (state: boolean) => void;
  applyId: number | undefined;
}

const ReviewCreateModal: React.FC<ReviewCreateModalProps> = ({ reviewModalState, SetReviewModalState, applyId }) => {
  const { openAlert } = useAlertDialog();

  const [formData, setFormData] = useState<ReviewForm>({
    title: '',
    content: ''
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (!applyId) return;

    try {
      setIsLoading(true);

      await createReview({ volunteer_apply_id: applyId, title: formData.title, content: formData.content });

      openAlert(`리뷰가 성공적으로 작성되었습니다.`);

      SetReviewModalState(false);
      setFormData({
        title: '',
        content: ''
      });
      window.location.reload();
    } catch (error) {
      let errorMessage = '리뷰 작성에 실패했습니다.';
      openAlert(errorMessage);
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.log(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      isOpen={reviewModalState}
      onClose={() => {
        SetReviewModalState(false);
      }}
      variant="big">
      <Wrapper>
        <ScrollSection>
          <Contents>
            <Title>리뷰 글작성</Title>
            <div>
              <span>제목</span>
              <InputBox
                colortype="gray"
                getInputText={(text) => {
                  setFormData((prev) => ({
                    ...prev,
                    title: text
                  }));
                }}></InputBox>
            </div>
            <div>
              <span>내용</span>
              <ReviewText
                setHtmlContent={(text) => {
                  setFormData((prev) => ({
                    ...prev,
                    content: text
                  }));
                }}></ReviewText>
            </div>
            <ButtonContainer>
              <button onClick={handleSubmit} disabled={isLoading || !formData.title || !formData.content}>
                {isLoading ? '전송 중...' : '전송'}
              </button>
            </ButtonContainer>
          </Contents>
        </ScrollSection>
      </Wrapper>
    </Modal>
  );
};

export default ReviewCreateModal;
