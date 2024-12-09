import React, { useEffect, useRef, useState } from 'react';
import { fetchMyInterestCenter } from '@/pages/personal-my-page/_component/logic/fetchMyData';
import { interestCenterType } from '@/shared/types/person-profile/personProfile';

// InterestCenterList에 쓰이는 use
interface useMyInterestCenterReturn {
  interestCenterData: interestCenterType[] | undefined;
  containerRef: React.RefObject<HTMLDivElement>;
  totPage: number;
  currPage: number;
  setCurrPage: (page: number) => void;
}

export const useMyInterestCenter = (): useMyInterestCenterReturn => {
  const [interestCenterData, setInterestCenterData] = useState<interestCenterType[]>();
  const [totPage, setTotPage] = useState<number>(1);
  const [currPage, setCurrPage] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 전체 페이지 수 계산 (div 너비 고려)
    const calcPage = () => {
      if (containerRef.current && interestCenterData) {
        // 박스 너비(160px) + gap(5px)
        const itemTotalWidth = 165 * interestCenterData.length;
        const containerWidth = containerRef.current.clientWidth;

        setTotPage(Math.ceil(itemTotalWidth / containerWidth));
        // console.log(itemTotalWidth, containerWidth, Math.ceil(itemTotalWidth / containerWidth));
      }
    };

    const fetchData = async () => {
      const data = await fetchMyInterestCenter();
      if (data && !interestCenterData) setInterestCenterData(data);
    };
    fetchData();
    calcPage();
  }, []);

  return {
    interestCenterData,
    containerRef,
    totPage,
    currPage,
    setCurrPage
  };
};
