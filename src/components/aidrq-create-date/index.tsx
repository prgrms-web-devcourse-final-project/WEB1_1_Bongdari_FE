import { useEffect, useState } from 'react';
import { DateInfo, DatePickerWrapper, Wrapper } from './indexCss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface AidRqCreateDateProps {
  getDate: (date: string | null) => void; // Date 타입 대신 string 타입으로 변경
  datetime: string;
}

const AidRqCreateDate: React.FC<AidRqCreateDateProps> = ({ getDate, datetime }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  useEffect(() => {
    if (!datetime) {
      setSelectedDate(new Date());
    } else {
      setSelectedDate(new Date(datetime));
    }
  }, [datetime]);

  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDateSelect = (date: Date | null) => {
    setSelectedDate(date);
    // 날짜가 선택되었을 때만 상위 컴포넌트에 알림
    const isoDate = date ? date.toISOString().slice(0, 19) : null;
    getDate(isoDate);

    if (date && date.getHours() !== 0 && date.getMinutes() !== 0) {
      setIsOpen(false);
    }
  };

  return (
    <Wrapper>
      <DateInfo
        disabled
        placeholder="일시를 설정해주세요."
        value={selectedDate ? selectedDate.toISOString().slice(0, 19) : ''}></DateInfo>
      <button onClick={handleButtonClick}>
        <img src="/assets/imgs/calendar.svg" alt=""></img>
      </button>
      {isOpen && (
        <DatePickerWrapper>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateSelect}
            showTimeSelect
            inline
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="yyyy-MM-dd'T'HH:mm:ss"
            onClickOutside={() => setIsOpen(false)}
          />
        </DatePickerWrapper>
      )}
    </Wrapper>
  );
};

export default AidRqCreateDate;
