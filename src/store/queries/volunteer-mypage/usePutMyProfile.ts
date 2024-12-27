import { useMutation } from '@tanstack/react-query';
import axiosInstance from '@/api/apis';
import { resType } from '@/shared/types/resType';

// 커뮤니티 게시글 수정
const putMyProfile = async (changeProfileData: { introduce: string; nickname: string }, imgFile?: File) => {
  const formData = new FormData();
  formData.append('data', JSON.stringify(changeProfileData));
  formData.append('img_file', imgFile || '');

  // formData 콘솔에 찍기
  for (const [key, value] of formData.entries()) {
    console.log(`${key}:`, value instanceof File ? 'File object' : value);
  }

  try {
    // axios PUT 요청
    const res: resType<string> = await axiosInstance.put(`/api/profile`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log('putMyProfile data', res);

    if (res.code >= 200 || res.code < 300) return res.data;
    else console.log(`putMyProfile res ${res.code}`);
  } catch (e) {
    console.error('putMyProfile error:', e);
    throw e; // 에러를 호출한 함수로 전달 (필요시)
  }
};

// React Query Mutation 훅 생성
export const usePutMyProfile = () => {
  return useMutation({
    mutationFn: ({
      changeProfileData,
      imgFile
    }: {
      changeProfileData: { introduce: string; nickname: string };
      imgFile?: File;
    }) => putMyProfile(changeProfileData, imgFile)
  });
};
