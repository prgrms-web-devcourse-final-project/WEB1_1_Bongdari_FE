import InputBox from '@/components/inputBox';
import { Form, FormContainer, FormGroup, FormRow, FormTitle, ImageUploadArea, Label, UploadIcon } from './indexCss';
import TextArea from '@/components/textArea';
import { ButtonBox } from '@/features/adjustment-modal/indexCss';
import Button from '@/components/button';

const ContactForm = () => {
  return (
    <FormContainer>
      <FormTitle>요청하기</FormTitle>
      <Form onSubmit={(e) => e.preventDefault()}>
        <FormRow>
          <FormGroup flex={1}>
            <Label>기관명</Label>
            <InputBox
              // inputBox 고쳐주세요!!
              // width="590px"
              colortype="white"
              getInputText={() => console.log('입력')}
              placeholder="기관명을 입력해주세요."
            />
          </FormGroup>
          <FormGroup flex={1}>
            <Label>이메일</Label>
            <InputBox
              // inputBox 고쳐주세요!!
              // width="590px"
              colortype="white"
              getInputText={() => console.log('입력')}
              placeholder="이메일을 입력해주세요."
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup flex={1}>
            <Label>제출인 명</Label>
            <InputBox
              // inputBox 고쳐주세요!!
              // width="390px"
              colortype="white"
              getInputText={() => console.log('입력')}
              placeholder="제출인 명을 입력해주세요."
            />
          </FormGroup>
          <FormGroup flex={1}>
            <Label>지역</Label>
            <InputBox
              // inputBox 고쳐주세요!!
              // width="390px"
              colortype="white"
              getInputText={() => console.log('입력')}
              placeholder="지역을 입력해주세요."
            />
          </FormGroup>
          <FormGroup flex={1}>
            <Label>연락처</Label>
            <InputBox
              // inputBox 고쳐주세요!!
              // width="390px"
              colortype="white"
              getInputText={() => console.log('입력')}
              placeholder="연락처를 입력해주세요. "
            />
          </FormGroup>
        </FormRow>

        <FormGroup>
          <Label>주소</Label>
          <InputBox
            // inputBox 고쳐주세요!!
            colortype="white"
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
            // TextArea 고쳐주세요!!
            // height="390px"
            placeholder="내용을 입력해주세요."
            colortype="white"
            getInputText={() => console.log('입력')}
          />
        </FormGroup>

        <ButtonBox>
          <Button label="작성하기" />
        </ButtonBox>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
