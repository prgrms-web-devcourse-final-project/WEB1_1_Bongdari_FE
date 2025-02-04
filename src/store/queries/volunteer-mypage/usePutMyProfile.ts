import { useMutation } from '@tanstack/react-query';
import axiosInstance from '@/api/apis';
import { resType } from '@/shared/types/resType';

interface CommonBasicInfo {
  name: string;
  contact_number: string;
  img_url: string;
  introduce: string;
}

export interface VolunteerInfo {
  common_basic_info: CommonBasicInfo;
  nickname: string;
  gender: 'MALE' | 'FEMALE';
}

// 커뮤니티 게시글 수정
const putMyProfile = async (currentInfo: VolunteerInfo, changes: { introduce: string; nickname: string }) => {
  const updateData: VolunteerInfo = {
    ...currentInfo,
    nickname: changes.nickname,
    common_basic_info: {
      ...currentInfo.common_basic_info,
      introduce: changes.introduce
    }
  };

  try {
    const res: resType<string> = await axiosInstance.put(`/api/user/basic-info/volunteer`, updateData);

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
      currentInfo,
      changes
    }: {
      currentInfo: VolunteerInfo;
      changes: { introduce: string; nickname: string };
    }) => putMyProfile(currentInfo, changes)
  });
};
