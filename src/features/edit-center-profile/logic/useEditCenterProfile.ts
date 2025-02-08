import { useEffect, useState } from 'react';
import {
  useUpdateCenterProfile,
  useUpdateProfileImage,
  type CenterProfileUpdateRequest
} from '@/store/queries/center-mypage/useCenterProfile';
import { useAlertDialog } from '@/store/stores/dialog/dialogStore';
import { centerProfileType } from '@/shared/types/center-profile/centerProfile';

interface UseEditCenterProfileProps {
  data?: centerProfileType;
}

const useEditCenterProfile = ({ data }: UseEditCenterProfileProps) => {
  const updateProfile = useUpdateCenterProfile();
  const updateProfileImage = useUpdateProfileImage();
  const { openAlert } = useAlertDialog();

  // 각 input 상태 관리
  const [preview, setPreview] = useState<File | null>(null);
  const [centerName, setCenterName] = useState(data?.name ?? '');
  const [originalName, setOriginalName] = useState(data?.name ?? '');
  const [centerPhone, setCenterPhone] = useState(data?.contact_number ?? '');
  const [centerURL, setCenterURL] = useState(data?.homepage_url ?? '');
  const [centerIntroduction, setCenterIntroduction] = useState(data?.introduce ?? '');
  // const [validURL, setValidURL] = useState(true);
  const [validPhone, setValidPhone] = useState(true);

  useEffect(() => {
    if (data) {
      setCenterName(data.name ?? '');
      setOriginalName(data.name ?? '');
      setCenterPhone(data.contact_number ?? '');
      setCenterURL(data.homepage_url ?? '');
      setCenterIntroduction(data.introduce ?? '');
    }
  }, [data]);

  // 이미지 업로드 핸들러
  const handleImageUpload = (file: File) => {
    setPreview(file);
  };

  // const handlePutProfileImage = async () => {
  //   if (!preview) {
  //     openAlert('변경할 이미지를 선택해주세요.');
  //     return;
  //   }

  //   try {
  //     const fileName = preview.name;
  //     await updateProfileImage.mutateAsync(fileName);
  //     openAlert('프로필 이미지가 수정되었습니다.');
  //   } catch (error) {
  //     console.error('이미지 수정 중 오류가 발생했습니다:', error);
  //     openAlert('이미지 수정 중 오류가 발생했습니다. 다시 시도해주세요.');
  //   }
  // };

  const handlePutProfileImage = async () => {
    if (!preview) {
      openAlert('변경할 이미지를 선택해주세요.');
      return;
    }

    try {
      await updateProfileImage.mutateAsync(preview); // File 객체 직접 전달
      openAlert('프로필 이미지가 수정되었습니다.');
    } catch (error) {
      console.error('이미지 수정 중 오류가 발생했습니다:', error);
      openAlert('이미지 수정 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  // 입력 핸들러 모음
  const handleNameChange = (name: string) => setCenterName(name);
  const handlePhoneChange = (phone: string, isValid: boolean) => {
    setCenterPhone(phone);
    setValidPhone(isValid);
  };
  const handleURLChange = (url: string) => {
    setCenterURL(url);
    // setValidURL(isValid);
  };
  const handleIntroductionChange = (introduce: string) => setCenterIntroduction(introduce);

  // 제출 핸들러
  const handleEditProfile = async () => {
    if (!centerName.trim() || !centerPhone.trim() || !centerURL.trim() || !centerIntroduction.trim()) {
      openAlert('모든 필드를 입력해주세요.');
      return;
    }

    // 성공 시 처리
    try {
      const editData: CenterProfileUpdateRequest = {
        common_basic_info: {
          name: centerName.trim(),
          contact_number: centerPhone,
          introduce: centerIntroduction,
          img_url: data?.img_url || ''
        },
        homepage_url: centerURL
      };

      await updateProfile.mutateAsync(editData);
      setOriginalName(centerName.trim());
      openAlert('프로필이 수정되었습니다.');
    } catch (error) {
      console.error('오류 발생:', error);
      openAlert('프로필 수정 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return {
    preview,
    handleImageUpload,
    handlePutProfileImage,
    centerName,
    originalName,
    centerPhone,
    centerURL,
    centerIntroduction,
    handleNameChange,
    handlePhoneChange,
    handleURLChange,
    handleIntroductionChange,
    // validURL,
    validPhone,
    handleEditProfile,
    isSubmitting: updateProfile.isPending || updateProfileImage.isPending
  };
};

export default useEditCenterProfile;
