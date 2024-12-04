import { useEditCenterProfile } from '@/store/queries/center-mypage/useCenterProfile';
import { useQueryClient } from '@tanstack/react-query';

const useCenterProfile = () => {
  const { mutate, isPending } = useEditCenterProfile();
  const queryClient = useQueryClient();

  const handleEditProfile = async (
    centerName: string,
    centerPhone: string,
    centerURL: string,
    centerIntroduction: string,
    preview: File | string | null,
    validURL: boolean,
    validPhone: boolean
  ) => {
    if (!centerName || !validPhone || !validURL) {
      alert('모든 필드를 올바르게 입력해주세요.');
      return;
    }

    const jsonProfileData = {
      name: centerName,
      contact_number: centerPhone,
      homepage_link: centerURL,
      introduce: centerIntroduction,
      img_file: preview instanceof File ? preview : undefined
    };

    mutate(jsonProfileData, {
      onSuccess: (data) => {
        console.log('프로필이 성공적으로 수정되었습니다.', data);
        queryClient.invalidateQueries({ queryKey: ['centerProfile'] }); // 캐시에 저장된 프로필 데이터 무효화 -> 새로 서버에서 데이터 가져옴 (자동 새로고침)
        alert('프로필이 성공적으로 수정되었습니다.');
      },
      onError: (error) => {
        console.error('프로필 수정 중 오류가 발생했습니다.', error);
        alert('프로필 수정 중 오류가 발생했습니다.');
      }
    });
  };

  return {
    isSubmitting: isPending,
    handleEditProfile
  };
};

export default useCenterProfile;
