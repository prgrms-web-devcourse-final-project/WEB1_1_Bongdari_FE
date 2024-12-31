import Modal from '@/components/modal';
import { ButtonContainer, Contents, ScrollSection, Title, Wrapper } from './indexCss';
import InputBox from '@/components/inputBox';
import TextArea from '@/components/textArea';
import UploadBox from '@/components/img-drag-box';
import { useState } from 'react';
import { createReview } from '@/store/queries/review-create-common-query/useCreateReview';
import { ReviewForm } from '@/shared/types/review/reviewType';

interface ReviewCreateModalProps {
  reviewModalState: boolean;
  SetReviewModalState: (state: boolean) => void;
  recruitBoardId: number;
}

const ReviewCreateModal: React.FC<ReviewCreateModalProps> = ({
  reviewModalState,
  SetReviewModalState,
  recruitBoardId
}) => {
  const [formData, setFormData] = useState<ReviewForm>({
    title: '',
    content: ''
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFileSelect = (files: File[]) => {
    if (files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        img_file: files[0] // 첫 번째 파일만 사용
      }));
    }
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      const reviewFormData = new FormData();
      reviewFormData.append(
        'data',
        JSON.stringify({
          recruit_board_id: recruitBoardId,
          title: formData.title,
          content: formData.content
        })
      );

      if (formData.img_file) {
        reviewFormData.append('img_file', formData.img_file);
      }

      await createReview(reviewFormData);

      SetReviewModalState(false);
      setFormData({
        title: '',
        content: ''
      });

      console.log('리뷰가 성공적으로 작성되었습니다.');
    } catch (error) {
      let errorMessage = '리뷰 작성에 실패했습니다.';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      alert(errorMessage);
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
                // inputBox 고쳐주세요!!
                colortype="gray"
                getInputText={(text) => {
                  setFormData((prev) => ({
                    ...prev,
                    title: text
                  }));
                }}></InputBox>
            </div>
            <div>
              <span>이미지</span>
              <UploadBox onFileSelect={handleFileSelect}></UploadBox>
            </div>
            <div>
              <span>내용</span>
              <TextArea
                // TextArea 고쳐주세요!!
                // height="500px"
                colortype="gray"
                getInputText={(text) => {
                  setFormData((prev) => ({
                    ...prev,
                    content: text
                  }));
                }}></TextArea>
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
