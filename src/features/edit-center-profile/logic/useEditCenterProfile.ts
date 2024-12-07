import { useState } from 'react';
import { useUpdateCenterProfile, type CenterProfile } from '@/store/queries/center-mypage/useCenterProfile';

interface UseEditCenterProfileProps {
  data: CenterProfile;
}

const useEditCenterProfile = ({ data }: UseEditCenterProfileProps) => {
  const updateProfile = useUpdateCenterProfile();

  // 각 input 상태 관리
  const [preview, setPreview] = useState<File | null>(null);
  const [centerName, setCenterName] = useState(data.name);
  const [originalName] = useState(data.name);
  const [centerPhone, setCenterPhone] = useState(data.contact_number);
  const [centerURL, setCenterURL] = useState(data.homepage_link);
  const [centerIntroduction, setCenterIntroduction] = useState(data.introduce);
  const [validURL, setValidURL] = useState(true);
  const [validPhone, setValidPhone] = useState(true);

  // 이미지 업로드 핸들러
  const handleImageUpload = (file: File) => {
    setPreview(file);
  };

  // 입력 핸들러 모음
  const handleNameChange = (name: string) => setCenterName(name);
  const handlePhoneChange = (phone: string, isValid: boolean) => {
    setCenterPhone(phone);
    setValidPhone(isValid);
  };
  const handleURLChange = (url: string, isValid: boolean) => {
    setCenterURL(url);
    setValidURL(isValid);
  };
  const handleIntroductionChange = (introduce: string) => setCenterIntroduction(introduce);

  // 제출 핸들러
  const handleEditProfile = async () => {
    if (!validURL || !validPhone || !centerName.trim()) {
      return;
    }

    const profileData = {
      name: centerName.trim(),
      contact_number: centerPhone,
      homepage_link: centerURL,
      introduce: centerIntroduction
    };

    // 성공 시 처리 (TODO: 팝업으로 변경해서 UI/UX 개선하면 좋을 것 같습니당)
    // try {
    //   await updateProfile.mutate({
    //     data: profileData,
    //     img_file: preview || undefined
    //   });

    //   alert('프로필이 성공적으로 수정되었습니다.');
    // } catch (error) {
    //   console.error('오류 발생', error);
    //   alert('프로필 수정 중 오류가 발생했습니다. 다시 시도해주세요.');
    // }

    // mutateAsync 사용으로 변경
    try {
      await updateProfile.mutateAsync({
        data: profileData,
        img_file: preview || undefined
      });

      alert('프로필이 성공적으로 수정되었습니다.');
    } catch (error) {
      console.error('오류 발생:', error);
      alert('프로필 수정 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return {
    preview,
    handleImageUpload,
    centerName,
    originalName,
    centerPhone,
    centerURL,
    centerIntroduction,
    handleNameChange,
    handlePhoneChange,
    handleURLChange,
    handleIntroductionChange,
    validURL,
    validPhone,
    handleEditProfile,
    isSubmitting: updateProfile.isPending
  };
};

export default useEditCenterProfile;
