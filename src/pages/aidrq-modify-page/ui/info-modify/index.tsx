import AidRqCreateShared from '@/features/aidrq-create-shared-part';
import { ButtonContainer, TextAreaContainer, ThirdLine, Wrapper } from './indexCss';
import AidRqCreateRecruitPopulation from '@/components/aidrq-create-recruit-population';
import AidRqCreateDate from '@/components/aidrq-create-date';
import TextArea from '@/components/textArea';

const InfoModify = () => {
  return (
    <Wrapper>
      <AidRqCreateShared
        getTitleAndFilter={(data) => {
          console.log(data);
        }}></AidRqCreateShared>
      <ThirdLine>
        <div>
          <p>모집 예상 인원</p>
          <AidRqCreateRecruitPopulation
            getPopulation={(data) => {
              console.log(data);
            }}></AidRqCreateRecruitPopulation>
        </div>
        <div>
          <p>활동 시작 일시</p>
          <AidRqCreateDate
            getDate={(date) => {
              console.log(date);
            }}></AidRqCreateDate>
        </div>
        <div>
          <p>활동 종료 일시</p>
          <AidRqCreateDate
            getDate={(date) => {
              console.log(date);
            }}></AidRqCreateDate>
        </div>
      </ThirdLine>
      <TextAreaContainer>
        <p>본문 내용</p>
        <TextArea
          getInputText={(text) => {
            console.log(text);
          }}
          width="100%"
          height="500px"
          colortype={0}></TextArea>
      </TextAreaContainer>
      <ButtonContainer>
        <button>수정하기</button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default InfoModify;
