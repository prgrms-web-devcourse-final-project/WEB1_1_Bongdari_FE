import React, { useEffect, useRef, useState } from 'react';
import { interestCenterType } from '@/shared/types/person-profile/personProfile';
import { useMyInterestCenterQuery } from '@/store/queries/volunteer-mypage/useFetchMyData';

// InterestCenterList에 쓰이는 use
interface useMyInterestCenterReturn {
  interestCenterData: interestCenterType[] | undefined;
  chunckInterestCenterData: interestCenterType[][] | undefined;
  containerRef: React.RefObject<HTMLDivElement>;
  containerWidth: number;
  totPage: number;
  currPage: number;
  setCurrPage: (page: number) => void;
}

export const useMyInterestCenter = (): useMyInterestCenterReturn => {
  const [interestCenterData, setInterestCenterData] = useState<interestCenterType[]>();
  const [chunckInterestCenterData, setChunckInterestCenterData] = useState<interestCenterType[][]>();
  const [totPage, setTotPage] = useState<number>(1);
  const [currPage, setCurrPage] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const { data } = useMyInterestCenterQuery();

  const chunkArray = (array: interestCenterType[], size: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  // containter width observer
  useEffect(() => {
    const element = containerRef.current;

    if (element) {
      // ResizeObserver 생성
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setContainerWidth(entry.contentRect.width); // 요소의 width 업데이트
        }
      });

      resizeObserver.observe(element); // 요소 관찰 시작

      // 컴포넌트가 언마운트될 때 observer 해제
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [containerRef]);

  useEffect(() => {
    console.log('width:', containerWidth);
  }, [containerWidth]);

  useEffect(() => {
    if (data) {
      setInterestCenterData(data);
      setChunckInterestCenterData(chunkArray(data, 6));
    }

    // 전체 페이지 수 계산 (div 너비 고려)
    const calcPage = () => {
      if (containerRef.current && interestCenterData) {
        if (chunckInterestCenterData && containerWidth <= 884) {
          setTotPage(chunckInterestCenterData?.length);
        } else {
          // 박스 너비(160px) + gap(5px)
          const itemTotalWidth = 165 * interestCenterData.length;
          setTotPage(Math.ceil(itemTotalWidth / containerWidth));
        }
      }
    };

    calcPage();
  }, [data, containerWidth, interestCenterData, chunckInterestCenterData]);

  return {
    interestCenterData,
    chunckInterestCenterData,
    containerRef,
    containerWidth,
    totPage,
    currPage,
    setCurrPage
  };
};
