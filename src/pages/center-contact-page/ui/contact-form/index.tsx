import InputBox from '@/components/inputBox';
import { Form, FormContainer, FormGroup, FormRow, FormTitle, ImageUploadArea, Label, UploadIcon } from './indexCss';
import TextArea from '@/components/textArea';
import { OtherButton } from '@/components/button';
import { ButtonBox } from '@/features/adjustment-modal/indexCss';

const ContactForm = () => {
  return (
    <FormContainer>
      <FormTitle>요청하기</FormTitle>
      <Form onSubmit={(e) => e.preventDefault()}>
        <FormRow>
          <FormGroup flex={1}>
            <Label>기관명</Label>
            <InputBox
              colortype={0}
              width="590px"
              getInputText={() => console.log('입력')}
              placeholder="기관명을 입력해주세요."
            />
          </FormGroup>
          <FormGroup flex={1}>
            <Label>이메일</Label>
            <InputBox
              colortype={0}
              width="590px"
              getInputText={() => console.log('입력')}
              placeholder="이메일을 입력해주세요."
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup flex={1}>
            <Label>제출인 명</Label>
            <InputBox
              colortype={0}
              width="390px"
              getInputText={() => console.log('입력')}
              placeholder="제출인 명을 입력해주세요."
            />
          </FormGroup>
          <FormGroup flex={1}>
            <Label>지역</Label>
            <InputBox
              colortype={0}
              width="390px"
              getInputText={() => console.log('입력')}
              placeholder="지역을 입력해주세요."
            />
          </FormGroup>
          <FormGroup flex={1}>
            <Label>연락처</Label>
            <InputBox
              colortype={0}
              width="390px"
              getInputText={() => console.log('입력')}
              placeholder="연락처를 입력해주세요. "
            />
          </FormGroup>
        </FormRow>

        <FormGroup>
          <Label>주소</Label>
          <InputBox
            colortype={0}
            width="100%"
            getInputText={() => console.log('입력')}
            placeholder="주소를 입력해주세요."
          />
        </FormGroup>

        <FormGroup>
          <Label>인증서</Label>
          <ImageUploadArea>
            <UploadIcon>+</UploadIcon>
          </ImageUploadArea>
        </FormGroup>

        <FormGroup>
          <Label>추가 전달 사항</Label>
          <TextArea
            placeholder="내용을 입력해주세요."
            colortype={0}
            getInputText={() => console.log('입력')}
            width="100%"
            height="390px"
          />
        </FormGroup>

        <ButtonBox>
          <OtherButton type="submit" label="작성하기" width="220px" height="53px" />
        </ButtonBox>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
