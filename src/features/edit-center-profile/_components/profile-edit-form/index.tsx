import { useAlertDialog } from '@/store/stores/dialog/dialogStore';
import { validatePhone } from '../../logic/validation';
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
  validPhone: boolean;
  centerIntroduction: string;
  handleNameChange: (value: string) => void;
  handlePhoneChange: (value: string, isValid: boolean) => void;
  handleURLChange: (value: string) => void;
  handleIntroductionChange: (value: string) => void;
  handleEditProfile: () => void;
  isSubmitting?: boolean;
}

const EditProfileForm = ({
  centerName,
  centerPhone,
  centerURL,
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

  const validateForm = () => {
    if (!centerName.trim()) {
      openAlert('닉네임을 입력해주세요.');
      return false;
    }

    if (!centerPhone.trim()) {
      openAlert('연락처를 입력해주세요.');
      return false;
    }
    if (!validPhone) {
      openAlert('올바른 연락처 형식으로 입력해주세요.');
      return false;
    }

    if (!centerURL.trim()) {
      openAlert('사이트 주소를 입력해주세요.');
      return false;
    }

    if (!centerIntroduction.trim()) {
      openAlert('기관 소개를 입력해주세요.');
      return false;
    }
    if (centerIntroduction.length > 500) {
      openAlert('소개글은 500자를 넘을 수 없습니다.');
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      handleEditProfile();
    }
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
              onChange={(e) => handleURLChange(e.target.value)}
              placeholder="사이트 주소를 입력하세요."
            />
            {centerURL === '' && <ErrorMessage>⚠️ 사이트 주소를 입력해주세요.</ErrorMessage>}
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
        <EditProfileSectionButton label={isSubmitting ? '수정중...' : '수정하기'} type="blue" onClick={handleSubmit} />
      </ProfileSection1>
    </EditFormWrapper>
  );
};

export default EditProfileForm;
