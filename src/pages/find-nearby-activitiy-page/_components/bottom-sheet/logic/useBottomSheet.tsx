import { useRef, useEffect, useState } from 'react';
import { MAX_Y, MIN_Y } from '../BottomSheetOption';

// !! 주석으로 설명 달아놓을 건데 지우지 말아주세요!!
interface BottomSheetMetrics {
  // 터치 시작 시의 상태를 기록
  touchStart: {
    sheetY: number; // 사용자가 touchStart 시전에 BottomSheet의 y좌표
    touchY: number; // 사용자가 touchStart 시점에 터치한 화면의 y좌표
  };
  // 터치 도중의 움직임 방향과 이전 상태 추적적
  touchMove: {
    prevTouchY?: number; // 직전 touchmove의 터치 y좌표
    movingDirection: 'none' | 'down' | 'up'; // 사용자가 현재 터치를 통해 BottomSheet를 이동시키는 방향
  };
  // 콘텐츠 영역에서 터치가 시작됐는지 판단해 바텀 시트의 움직임 가능 여부 결정
  isContentAreaTouched: boolean; // 콘텐츠 영역에서 터치가 발생했는지 여부
}

export default function useBottomSheet() {
  // BottomSheet와 Content를 참조하기 위한 ref
  const sheet = useRef<HTMLDivElement>(null); // 바텀 시트 자체를 참조
  const content = useRef<HTMLDivElement>(null); // 바텀 시트의 내부 콘텐츠를 참조
  const [isWebBottomSheet, setIsWebBottomSheet] = useState(false); // 웹에서는 터치 이벤트 적용 안되므로 따로 상태 관리

  // user가 바텀시트를 터치하고 움직이는 동안의 상태를 관리하는 객체
  const metrics = useRef<BottomSheetMetrics>({
    touchStart: {
      sheetY: 0,
      touchY: 0
    },
    touchMove: {
      prevTouchY: 0,
      movingDirection: 'none'
    },
    isContentAreaTouched: false
  });

  // 사용자가 BottomSheet를 움직일 수 있는지 판단하는 함수
  const canUserMoveBottomSheet = () => {
    const { touchMove, isContentAreaTouched } = metrics.current;

    if (!isContentAreaTouched) {
      // 콘텐츠가 아닌 곳에서 터치했으면 이동 가능
      return true;
    }

    if (sheet.current!.getBoundingClientRect().y !== MIN_Y) {
      // 바텀 시트가 이미 열린 상태라면 이동 가능
      return true;
    }

    if (touchMove.movingDirection === 'down') {
      // 콘텐츠가 스크롤 최상단이면 아래로 이동 가능
      return content.current!.scrollTop <= 0;
    }
    return false;
  };

  // 터치 시작 시 실행되는 이벤트 핸들러
  const handleTouchStart = (e: TouchEvent) => {
    const { touchStart } = metrics.current;
    touchStart.sheetY = sheet.current!.getBoundingClientRect().y; // 터치 시작 시 BottomSheet의 Y 좌표
    touchStart.touchY = e.touches[0].clientY; // 터치 시작 시 터치한 화면의 Y 좌표
  };

  // 터치 이동 중 실행되는 이벤트 핸들러
  const handleTouchMove = (e: TouchEvent) => {
    const { touchStart, touchMove } = metrics.current;
    const currentTouch = e.touches[0];

    if (touchMove.prevTouchY === undefined) {
      // 처음 터치 시 prevTouchY를 초기화
      touchMove.prevTouchY = touchStart.touchY;
    }

    if (touchMove.prevTouchY === 0) {
      // 맨 처음 앱 시작하고 시작시
      touchMove.prevTouchY = touchStart.touchY;
    }

    // 터치 방향 확인
    if (touchMove.prevTouchY < currentTouch.clientY) {
      touchMove.movingDirection = 'down'; // 아래 방향
    }

    if (touchMove.prevTouchY > currentTouch.clientY) {
      touchMove.movingDirection = 'up'; // 위 방향
    }

    if (canUserMoveBottomSheet()) {
      // BottomSheet를 움직일 수 있는 상태일 경우
      e.preventDefault(); // 기본 스크롤 방지

      const touchOffset = currentTouch.clientY - touchStart.touchY; // 터치 이동 거리
      let nextSheetY = touchStart.sheetY + touchOffset; // 새로운 BottomSheet의 Y 좌표 계산

      // Y 좌표가 최소/최대값을 벗어나지 않도록 제한
      if (nextSheetY <= MIN_Y) {
        nextSheetY = MIN_Y;
      }

      if (nextSheetY >= MAX_Y) {
        nextSheetY = MAX_Y;
      }

      // BottomSheet의 위치를 업데이트
      sheet.current!.style.setProperty('transform', `translateY(${nextSheetY - MAX_Y}px)`); //바닥 만큼은 빼야쥬...
    } else {
      // 사용자가 BottomSheet를 움직일 수 없는 상태일 경우
      document.body.style.overflowY = 'hidden'; // 화면 스크롤 비활성화
    }
  };

  // 터치 종료 시 실행되는 이벤트 핸들러
  const handleTouchEnd = () => {
    document.body.style.overflowY = 'auto'; // 화면 스크롤 활성화
    const { touchMove } = metrics.current;

    // Snap Animation: BottomSheet 위치를 고정
    const currentSheetY = sheet.current!.getBoundingClientRect().y;

    if (currentSheetY !== MIN_Y) {
      if (touchMove.movingDirection === 'down') {
        // 아래로 이동했을 경우 BottomSheet를 MAX_Y 위치로 이동
        sheet.current!.style.setProperty('transform', 'translateY(0)');
      }

      if (touchMove.movingDirection === 'up') {
        // 위로 이동했을 경우 BottomSheet를 MIN_Y 위치로 이동
        sheet.current!.style.setProperty('transform', `translateY(${MIN_Y - MAX_Y}px)`);
      }
    }

    // metrics 객체 초기화
    metrics.current = {
      touchStart: {
        sheetY: 0,
        touchY: 0
      },
      touchMove: {
        prevTouchY: 0,
        movingDirection: 'none'
      },
      isContentAreaTouched: false
    };
  };

  // 웹에서는 클릭으로 바텀시트 토클할 수 있도록 핸들러 추가
  const toggleBottomSheetAtWeb = () => {
    if (sheet.current) {
      if (!isWebBottomSheet) {
        // 열기
        sheet.current.style.setProperty('transform', `translateY(${MIN_Y - MAX_Y}px)`);
      } else {
        // 닫기
        sheet.current.style.setProperty('transform', 'translateY(0)');
      }
      setIsWebBottomSheet(!isWebBottomSheet);
    }
  };

  // 컴포넌트가 마운트되었을 때 이벤트 리스너 추가 및 언마운트 시 제거
  useEffect(() => {
    if (!sheet.current || !content.current) return;

    // 터치이벤트 -> 모바일 환경에서
    sheet.current!.addEventListener('touchstart', handleTouchStart);
    sheet.current!.addEventListener('touchmove', handleTouchMove);
    sheet.current!.addEventListener('touchend', handleTouchEnd);

    return () => {
      sheet.current?.removeEventListener('touchstart', handleTouchStart);
      sheet.current?.removeEventListener('touchmove', handleTouchMove);
      sheet.current?.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return { sheet, content, toggleBottomSheetAtWeb };
}
