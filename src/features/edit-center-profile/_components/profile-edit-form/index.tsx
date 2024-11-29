import {
  CenterIntroTextArea,
  EditFormWrapper,
  EditItem,
  EditItem_TextArea,
  EditLabel,
  ErrorMessage,
  Input
} from './indexCss';

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
  return (
    <EditFormWrapper>
      <EditItem>
        <EditLabel htmlFor="centerName">기관명</EditLabel>
        <div>
          <Input
            id="centerName"
            type="text"
            value={centerName}
            onChange={(e) => handleNameChange(e.target.value)}
            placeholder="기관명을 입력해주세요"
          />
          {centerName === '' && <ErrorMessage>⚠️ 기관명을 입력해주세요.</ErrorMessage>}
        </div>
      </EditItem>
      <EditItem>
        <EditLabel htmlFor="centerPhone">연락처</EditLabel>
        <div>
          <Input
            id="centerPhone"
            type="text"
            value={centerPhone}
            onChange={(e) => handlePhoneChange(e.target.value)}
            placeholder="연락처를 입력하세요."
          />
          {centerPhone && !validPhone && (
            <ErrorMessage>⚠️ 연락처는 "oo-oooo-oooo" 또는 "ooo-oooo-oooo" 형식으로 입력해주세요.</ErrorMessage>
          )}
        </div>
      </EditItem>
      <EditItem>
        <EditLabel htmlFor="centerURL">사이트</EditLabel>
        <div>
          <Input
            id="centerURL"
            type="text"
            value={centerURL}
            onChange={(e) => handleURLChange(e.target.value)}
            placeholder="사이트 주소를 입력하세요."
          />
          {centerURL && !validURL && <ErrorMessage>⚠️ 올바른 URL 형식이 아닙니다.</ErrorMessage>}
        </div>
      </EditItem>
      <EditItem_TextArea>
        <EditLabel htmlFor="centerDescription" style={{ paddingTop: '14px' }}>
          설명
        </EditLabel>
        <CenterIntroTextArea
          placeholder="기관에 대한 간단한 소개를 작성해주세요"
          value={centerIntroduction}
          onChange={(e) => handleIntroductionChange(e.target.value)}
        />
      </EditItem_TextArea>
    </EditFormWrapper>
  );
};

export default EditProfileForm;
