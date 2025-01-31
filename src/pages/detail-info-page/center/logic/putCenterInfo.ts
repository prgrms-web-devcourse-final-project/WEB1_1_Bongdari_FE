import axiosInstance from '@/api/apis';

interface SubmitDataType {
  common_basic_info: {
    name: string;
    contact_number: string;
    img_url: string;
    introduce: string;
  };
  homepage_url: string;
}

export const putCenterInfo = async (submitData: SubmitDataType) => {
  const response = await axiosInstance.put('/api/user/basic-info/center', submitData);
  return response;
};
