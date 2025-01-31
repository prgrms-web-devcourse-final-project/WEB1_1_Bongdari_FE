import axiosInstance from '@/api/apis';

interface SubmitDataType {
  common_basic_info: {
    name: string;
    contact_number: string;
    img_url: string;
    introduce: string;
  };
  nickname: string;
  gender: 'MALE' | 'FEMALE';
}

export const putVolunteerInfo = async (submitData: SubmitDataType) => {
  const response = await axiosInstance.put('/api/user/basic-info/volunteer', submitData);
  return response;
};
