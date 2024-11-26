import InputBox from '@/components/inputBox';
import TextArea from '@/components/textArea';
import { EditFormWrapper, EditItem, EditItem_TextArea, EditLabel, ErrorMessage } from './inputCss';

interface EditProfileFormProps {
  centerName: string;
  centerPhone: string;
  centerURL: string;
  validURL: boolean;
  validPhone: boolean;
  centerIntroduction: string;
  handleNameChange: (newName: string) => void;
  handlePhoneChange: (phone: string) => void;
  handleURLChange: (URL: string) => void;
  handleIntroductionChange: (introduction: string) => void;
}

const EditProfileForm = ({
  centerName,
  centerPhone,
  centerURL,
  validURL,
  validPhone,
  centerIntroduction,
  handleNameChange,
  handlePhoneChange,
  handleURLChange,
  handleIntroductionChange
}: EditProfileFormProps) => {
  console.log('centerName', centerName);
  return (
    <EditFormWrapper>
      <EditItem>
        <EditLabel htmlFor="centerName">기관명</EditLabel>
        <div>
          <InputBox
            getInputText={handleNameChange}
            colortype={1}
            width="480px"
            height="38px"
            placeholder="기관명을 입력해주세요"
            initialVal={centerName}
          />
          {centerName === '' && <ErrorMessage>⚠️ 기관명을 입력해주세요.</ErrorMessage>}
        </div>
      </EditItem>
      <EditItem>
        <EditLabel htmlFor="centerPhone">연락처</EditLabel>
        <div>
          <InputBox
            getInputText={handlePhoneChange}
            colortype={1}
            width="480px"
            height="38px"
            placeholder="연락처를 입력해주세요"
            initialVal={centerPhone}
          />
          {centerPhone && !validPhone && (
            <ErrorMessage>⚠️ 연락처는 "oo-oooo-oooo" 또는 "ooo-oooo-oooo" 형식으로 입력해주세요.</ErrorMessage>
          )}
        </div>
      </EditItem>
      <EditItem>
        <EditLabel htmlFor="centerURL">사이트</EditLabel>
        <div>
          <InputBox
            getInputText={handleURLChange}
            colortype={1}
            width="480px"
            height="38px"
            placeholder="사이트 주소를 입력해주세요"
            initialVal={centerURL}
          />
          {centerURL && !validURL && <ErrorMessage>⚠️ 올바른 URL 형식이 아닙니다.</ErrorMessage>}
        </div>
      </EditItem>
      <EditItem_TextArea>
        <EditLabel htmlFor="centerDescription" style={{ paddingTop: '14px' }}>
          설명
        </EditLabel>
        <TextArea
          getInputText={handleIntroductionChange}
          colortype={1}
          width="480px"
          height="220px"
          placeholder="기관에 대한 간단한 소개를 작성해주세요"
          initialVal={centerIntroduction}
        />
      </EditItem_TextArea>
    </EditFormWrapper>
  );
};

export default EditProfileForm;
