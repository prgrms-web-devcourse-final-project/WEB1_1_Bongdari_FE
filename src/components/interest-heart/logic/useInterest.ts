import { useState, useEffect } from 'react';
import { deleteInterest, postInterest } from './putInterest';
import { useLoginStore } from '@/store/stores/login/loginStore';

interface useInterestProps {
  center_id: string;
  firstState: boolean;
}

interface useInterestReturn {
  isInterest: boolean;
  isDisabled: boolean;
  onClickToggleInterest: () => void;
}

export const useInterest = ({ center_id, firstState }: useInterestProps): useInterestReturn => {
  const [isInterest, setIsInterest] = useState<boolean>(firstState);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const myLoginId = useLoginStore((state) => state.myLoginId);
  const loginType = useLoginStore((state) => state.loginType);

  useEffect(() => {
    if (!loginType || loginType === 'center') setIsDisabled(true);
  }, [loginType]);

  const onClickToggleInterest = async () => {
    if (!myLoginId) return;
    if (isInterest) {
      await deleteInterest(center_id);
      setIsInterest(false);
    } else {
      await postInterest(center_id, myLoginId);
      setIsInterest(true);
    }
  };
  return { isInterest, isDisabled, onClickToggleInterest };
};
