import { useEffect, useState } from 'react';

interface useHalfListProps {
  dataLength: number;
}
interface useHalfListReturn {
  totPage: number;
  currPage: number;
  setCurrPage: (page: number) => void;
}

export const useHalfList = ({ dataLength }: useHalfListProps): useHalfListReturn => {
  const [totPage, setTotPage] = useState<number>(1);
  const [currPage, setCurrPage] = useState<number>(1);

  useEffect(() => {
    setTotPage(Math.ceil(dataLength / 5));
  }, [dataLength]);

  return { totPage, currPage, setCurrPage };
};
