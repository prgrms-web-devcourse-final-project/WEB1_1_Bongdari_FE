import { useUpdateCenterProfile } from '@/store/queries/center-mypage/useCenterProfile';
import { useQueryClient } from '@tanstack/react-query';

const useSubmitCenterProfile = () => {
  const { mutate, isPending } = useUpdateCenterProfile();
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

    // API 요청에 맞는 데이터 구조로 변환
    const profileData = {
      data: {
        name: centerName,
        contact_number: centerPhone,
        homepage_link: centerURL,
        introduce: centerIntroduction
      },
      img_file: preview instanceof File ? preview : undefined
    };

    mutate(profileData, {
      onSuccess: (data) => {
        console.log('프로필이 성공적으로 수정되었습니다.', data);
        queryClient.invalidateQueries({ queryKey: ['centerProfile'] });
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

export default useSubmitCenterProfile;
