import { useState, useEffect } from 'react';

import { useLoginStore } from '@/store/stores/login/loginStore';
import { useDeleteInterest, usePostInterest } from '@/store/queries/interest-heart-query/useInterestHeart';

interface useInterestProps {
  center_id: string;
}

interface useInterestReturn {
  isInterest: boolean;
  isDisabled: boolean;
  onClickToggleInterest: () => void;
  isLoading: boolean;
}

export const useInterest = ({ center_id }: useInterestProps): useInterestReturn => {
  const [isInterest, setIsInterest] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const myLoginId = useLoginStore((state) => state.myLoginId);
  const loginType = useLoginStore((state) => state.loginType);

  const { mutate: postInterest, isPending: postLoading } = usePostInterest();
  const { mutate: deleteInterest, isPending: deleteLoading } = useDeleteInterest();

  const isLoading = postLoading || deleteLoading;

  useEffect(() => {
    setIsDisabled(!loginType || loginType === 'ROLE_CENTER');
  }, [loginType]);

  const onClickToggleInterest = async () => {
    if (!myLoginId || isLoading) return; // 로딩 중일 때 추가 클릭 방지
    if (isInterest) {
      deleteInterest(center_id, {
        onSuccess: () => {
          console.log('관심기관 삭제가 완료되었습니다!');
        },
        onError: () => {
          console.log('관심기관 삭제 중 오류가 발생했습니다.');
        }
      });
      setIsInterest(false);
    } else {
      postInterest(center_id, {
        onSuccess: () => {
          console.log('관심기관 설정이 완료되었습니다!');
        },
        onError: () => {
          console.log('관심기관 설정 중 오류가 발생했습니다.');
        }
      });
      setIsInterest(true);
    }
  };

  useEffect(() => {
    const checkFirstState = () => {
      // TODO: 관심기관인지 확인하기 로직 구현
    };
    checkFirstState();
  });

  return { isInterest, isDisabled, onClickToggleInterest, isLoading };
};
