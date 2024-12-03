// 백엔드에서 보내준 시간을 디자인 시안에 맞게 변환하는 훅
const useDateFormat = () => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const formatTime = (timeString: string | undefined): string => {
    if (!timeString) return '';

    // HH:MM:SS 형식의 시간 처리 (예: "04:00:00")
    if (timeString.includes(':') && !timeString.includes('T')) {
      const hours = timeString.split(':')[0].replace(/^0+/, '');
      return `${hours}시간`;
    }

    // T로 시작하는 형식 처리
    if (timeString.startsWith('T')) {
      const hours = timeString.split(':')[0].replace('T', '').replace(/^0+/, '');
      return `${hours}시간`;
    }

    // 날짜시간 형식 처리 (예: "2024-12-01T09:00")
    if (timeString.includes('T')) {
      const hours = timeString.split('T')[1].split(':')[0].replace(/^0+/, '');
      return `${hours}시간`;
    }

    return timeString;
  };

  // 날짜와 시간 모두 포함한 문자열일 경우 -> 모집글 상세 페이지에서는 날짜와 시간이 같이 나옴
  const formatDateTime = (dateTimeString: string): string => {
    const date = new Date(dateTimeString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}. ${month}. ${day} ${hours}:${minutes}`;
  };

  return { formatDate, formatTime, formatDateTime };
};

export default useDateFormat;
