import { useEffect, useState } from 'react';
import { DateInfo, DatePickerWrapper, Wrapper } from './indexCss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface AidRqCreateDateProps {
  getDate: (date: string | null) => void; // Date 타입 대신 string 타입으로 변경
}

const AidRqCreateDate: React.FC<AidRqCreateDateProps> = ({ getDate }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDateSelect = (date: Date | null) => {
    setSelectedDate(date);
    if (date && date.getHours() !== 0 && date.getMinutes() !== 0) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // ISO 문자열로 변환 (초 단위까지만 포함)
    const isoDate = selectedDate ? selectedDate.toISOString().slice(0, 19) : null;
    getDate(isoDate);
    console.log(isoDate);
  }, [selectedDate]);

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
