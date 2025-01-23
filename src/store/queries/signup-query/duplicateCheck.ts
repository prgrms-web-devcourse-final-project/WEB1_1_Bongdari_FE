import axiosInstance from '@/api/apis';

type IdCheckType = 'success' | 'error' | null;

export const duplicateCheck = async (setIdCheck: React.Dispatch<React.SetStateAction<IdCheckType>>, id: string) => {
  try {
    const response = await axiosInstance.get(`/api/user/exists?accountId=${id}`);
    setIdCheck(response.data ? 'error' : 'success');
  } catch (error) {
    console.error('중복 확인 실패:', error);
    setIdCheck('error');
  }
};
