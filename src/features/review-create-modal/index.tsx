import Modal from '@/components/modal';
import { ButtonContainer, Contents, ScrollSection, Title, Wrapper } from './indexCss';
import InputBox from '@/components/inputBox';
import TextArea from '@/components/textArea';
import UploadBox from '@/components/img-drag-box';
import { handleFileSelect } from './logic/handleFileSelect';

interface ReviewCreateModalProps {
  reviewModalState: boolean;
  SetReviewModalState: (state: boolean) => void;
}

const ReviewCreateModal: React.FC<ReviewCreateModalProps> = ({ reviewModalState, SetReviewModalState }) => {
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
                colortype={1}
                width="100%"
                getInputText={(text) => {
                  console.log(text);
                }}></InputBox>
            </div>
            <div>
              <span>이미지</span>
              <UploadBox onFileSelect={handleFileSelect}></UploadBox>
            </div>
            <div>
              <span>내용</span>
              <TextArea
                colortype={1}
                width="100%"
                height="500px"
                getInputText={(text) => {
                  console.log(text);
                }}></TextArea>
            </div>
            <ButtonContainer>
              <button>전송</button>
            </ButtonContainer>
          </Contents>
        </ScrollSection>
      </Wrapper>
    </Modal>
  );
};

export default ReviewCreateModal;
