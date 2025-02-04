import { useAlertDialog } from '@/store/stores/dialog/dialogStore';
import { validatePhone, validateURL } from '../../logic/validation';
import {
  CenterIntroTextArea,
  EditProfileSectionButton,
  EditFormWrapper,
  EditItem,
  EditItem_TextArea,
  EditLabel,
  ErrorMessage,
  Input,
  InputWrapper,
  ProfileSection1,
  TextAreaWrapper
} from './indexCss';

interface EditProfileFormProps {
  centerName: string;
  centerPhone: string;
  centerURL: string;
  validURL: boolean;
  validPhone: boolean;
  centerIntroduction: string;
  handleNameChange: (value: string) => void;
  handlePhoneChange: (value: string, isValid: boolean) => void;
  handleURLChange: (value: string, isValid: boolean) => void;
  handleIntroductionChange: (value: string) => void;
  handleEditProfile: () => void;
  isSubmitting?: boolean;
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
  handleIntroductionChange,
  handleEditProfile,
  isSubmitting = false
}: EditProfileFormProps) => {
  const { openAlert } = useAlertDialog();

  // 소개글 500자 이상일 때 경고창
  const handleIntroductionUpdate = () => {
    if (centerIntroduction.length > 500) {
      openAlert('소개글은 500자를 넘을 수 없습니다.');
      return;
    }

    handleEditProfile();
  };

  return (
    <EditFormWrapper>
      <ProfileSection1>
        <EditItem>
          <EditLabel htmlFor="centerName">닉네임</EditLabel>
          <InputWrapper>
            <Input
              id="centerName"
              type="text"
              value={centerName}
              onChange={(e) => handleNameChange(e.target.value)}
              placeholder="기관명을 입력해주세요"
            />
            {centerName === '' && <ErrorMessage>⚠️ 닉네임을 입력해주세요.</ErrorMessage>}
          </InputWrapper>
        </EditItem>
        <EditItem>
          <EditLabel htmlFor="centerPhone">연락처</EditLabel>
          <InputWrapper>
            <Input
              id="centerPhone"
              type="text"
              value={centerPhone}
              onChange={(e) => {
                const value = e.target.value;
                const isValid = validatePhone(value);
                handlePhoneChange(value, isValid);
              }}
              placeholder="연락처를 입력하세요."
            />
            {centerPhone && !validPhone && (
              <ErrorMessage>⚠️ 연락처는 "oo-ooo(o)-oooo" 또는 "ooo-ooo(o)-oooo" 형식으로 입력해주세요.</ErrorMessage>
            )}
          </InputWrapper>
        </EditItem>
        <EditItem>
          <EditLabel htmlFor="centerURL">사이트</EditLabel>
          <InputWrapper>
            <Input
              id="centerURL"
              type="text"
              value={centerURL}
              onChange={(e) => {
                const value = e.target.value;
                const isValid = validateURL(value);
                handleURLChange(value, isValid);
              }}
              placeholder="사이트 주소를 입력하세요."
            />
            {centerURL && !validURL && <ErrorMessage>⚠️ 올바른 URL 형식이 아닙니다.</ErrorMessage>}
          </InputWrapper>
        </EditItem>
        <EditItem_TextArea>
          <EditLabel htmlFor="centerDescription" style={{ paddingTop: '14px' }}>
            설명
          </EditLabel>
          <TextAreaWrapper>
            <CenterIntroTextArea
              placeholder="기관에 대한 간단한 소개를 작성해주세요"
              value={centerIntroduction}
              onChange={(e) => handleIntroductionChange(e.target.value)}
              maxLength={500}
            />
          </TextAreaWrapper>
        </EditItem_TextArea>
        <EditProfileSectionButton
          label={isSubmitting ? '수정중...' : '수정하기'}
          type="blue"
          onClick={handleIntroductionUpdate}
        />
      </ProfileSection1>
    </EditFormWrapper>
  );
};

export default EditProfileForm;
