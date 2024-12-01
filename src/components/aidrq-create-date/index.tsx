import { useEffect, useState } from 'react';
import { DateInfo, DatePickerWrapper, Wrapper } from './indexCss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface AidRqCreateDateProps {
  getDate: (date: Date | null) => void;
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
    getDate(selectedDate);
  }, [selectedDate]);

  return (
    <Wrapper>
      <DateInfo
        disabled
        placeholder="일시를 설정해주세요."
        value={selectedDate ? selectedDate.toLocaleString() : ''}></DateInfo>
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
            dateFormat="MMMM d, yyyy h:mm aa"
            onClickOutside={() => setIsOpen(false)}
          />
        </DatePickerWrapper>
      )}
    </Wrapper>
  );
};

export default AidRqCreateDate;
