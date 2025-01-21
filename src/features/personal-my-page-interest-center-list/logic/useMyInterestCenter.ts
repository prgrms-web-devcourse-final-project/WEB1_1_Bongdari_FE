import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { interestCenterType } from '@/shared/types/person-profile/personProfile';
import { useMyInterestCenterQuery } from '@/store/queries/volunteer-mypage/useFetchMyData';

interface useMyInterestCenterReturn {
  interestCenterData: interestCenterType[] | undefined;
  chunckInterestCenterData: interestCenterType[][] | undefined;
  containerRef: React.RefObject<HTMLDivElement>;
  containerWidth: number;
  totPage: number;
  currPage: number;
  setCurrPage: (page: number) => void;
  isLoading: boolean;
}

export const useMyInterestCenter = (): useMyInterestCenterReturn => {
  const [interestCenterData, setInterestCenterData] = useState<interestCenterType[]>();
  const [chunckInterestCenterData, setChunckInterestCenterData] = useState<interestCenterType[][]>();
  const [totPage, setTotPage] = useState<number>(1);
  const [currPage, setCurrPage] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const { data } = useMyInterestCenterQuery();

  const chunkArray = (array: interestCenterType[], size: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  // useLayoutEffect를 사용하여 DOM 업데이트 전에 너비 계산
  useLayoutEffect(() => {
    const updateWidth = () => {
      const element = containerRef.current;
      if (element) {
        const width = element.getBoundingClientRect().width;
        setContainerWidth(width);
        // console.log('width:', width);
      }
    };

    updateWidth();

    // 약간의 지연 후 한번 더 체크
    // const timeoutId = setTimeout(updateWidth, 100);
    // return () => clearTimeout(timeoutId);
  }, []);

  // ResizeObserver 설정
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newWidth = entry.contentRect.width;
        setContainerWidth(newWidth);
        // console.log('newWidth:', newWidth);
      }
    });

    resizeObserver.observe(element);
    return () => resizeObserver.disconnect();
  }, []);

  // 데이터 처리
  useEffect(() => {
    if (data) {
      setInterestCenterData(data);
      setChunckInterestCenterData(chunkArray(data, 6));
      setIsLoading(false);
    }
  }, [data]);

  // totPage 계산
  useEffect(() => {
    if (!chunckInterestCenterData || !interestCenterData) return;
    if (containerWidth <= 0) return;

    if (containerWidth <= 884) {
      setTotPage(chunckInterestCenterData.length || 1);
    } else {
      // 박스 너비(160px) + gap(5px)
      const itemTotalWidth = 165 * interestCenterData.length;
      setTotPage(Math.max(1, Math.ceil(itemTotalWidth / containerWidth)));
    }
  }, [chunckInterestCenterData, interestCenterData, containerWidth]);

  return {
    interestCenterData,
    chunckInterestCenterData,
    containerRef,
    containerWidth,
    totPage,
    currPage,
    setCurrPage,
    isLoading
  };
};
