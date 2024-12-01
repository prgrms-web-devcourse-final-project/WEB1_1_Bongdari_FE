// 백엔드에서 보내준 시간을 디자인 시안에 맞게 변환하는 훅

const useDateFormat = () => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const formatTime = (timeString: string): string => {
    const hours = timeString.split('T')[1].split(':')[0].replace(/^0+/, '');
    return `${hours}시간`;
  };

  return { formatDate, formatTime };
};

export default useDateFormat;
