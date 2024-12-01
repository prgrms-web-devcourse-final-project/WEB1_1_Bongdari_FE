import { useCallback, useEffect } from 'react';

// 뒤의 스크롤이벤트를 없앨 경우, body의 스크롤바가 사라지면서 스크롤바가 차지하던 공간이 없어져
//  너비가 바뀌거나 페이지가 살짝 움직이는 현상을 방지하기 위해
// 브라우저의 스크롤바 너비를 계산하는 함수를 만들었습니다. -> 너비만큼 padding-right를 추가하기 위한 작업
// 이렇게 하면 어제 멘토님께서 말씀하신 layout shift 현상을 방지할 수 있습니다.
const getScrollbarWidth = () => {
  // 보이지 않는 외부 div 생성
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  document.body.appendChild(outer);

  // 보이지 않는 내부 div 생성
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // 스크롤바 너비 = 외부 div 너비 - 내부 div 너비
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
  // DOM에 사용된 outer를 삭제하고 스크롤바 너비 계산한 값만 남김
  outer.parentNode?.removeChild(outer);

  return scrollbarWidth;
};

const useScrollLock = (isOpen: boolean) => {
  // 스크롤 잠금 로직을 메모이제이션 -> 불필요한 재생성 방지
  const lockScroll = useCallback(() => {
    // 현재 스크롤 위치 저장하는 변수
    const scrollY = window.scrollY;
    const body = document.body;

    // 현재 body의 스타일을 객체로 저장
    const originalStyle = {
      position: body.style.position,
      top: body.style.top,
      overflow: body.style.overflow,
      width: body.style.width,
      paddingRight: body.style.paddingRight
    };

    // 모달 열렸을 떄, body에 새로운 스타일 저장. 이 때 padding-right를 채워 너비 변동 방지
    body.style.cssText = `
      position: fixed;
      top: -${scrollY}px;
      overflow-y: scroll;
      width: 100%;
      padding-right: ${getScrollbarWidth()}px;
    `;

    // cleanup 함수
    return () => {
      Object.assign(body.style, originalStyle); // 모달 닫으면 원래 스타일로 복원
      window.scrollTo(0, scrollY); // 모달 닫으면 원래 스크롤 위치로 복원
    };
  }, []);

  // isOpen === true일 떄만 스크롤 잠금 적용
  useEffect(() => {
    if (isOpen) {
      const unlock = lockScroll(); // isOpen일 때만 잠금 실행
      return unlock; // 컴포넌트 unmount 되거나 !isOpen일 때 잠금 해제
    }
  }, [isOpen, lockScroll]);
};

export default useScrollLock;
