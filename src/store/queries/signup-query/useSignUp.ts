import { useMutation } from '@tanstack/react-query';
import axiosInstance from '@/api/apis';
import { useAlertDialog } from '@/store/stores/dialog/dialogStore';
import { useNavigate } from 'react-router';

interface SignupRequest {
  account_id: string;
  account_password: string;
  user_role: 'VOLUNTEER' | 'CENTER';
}

export const signup = async (data: SignupRequest) => {
  const response = await axiosInstance.post('/api/sign-up', data);
  return response;
};

export const useSignup = () => {
  const { openAlert } = useAlertDialog();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: SignupRequest) => signup(data),
    onSuccess: () => {
      navigate('/login');
      openAlert('회원가입 성공');
    },
    onError: (error) => {
      openAlert('회원가입 실패');
      console.log(error);
    }
  });
};
