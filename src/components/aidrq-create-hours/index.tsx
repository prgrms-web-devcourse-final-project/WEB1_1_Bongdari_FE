import { useState, useEffect } from 'react';
import { HourInfo, Wrapper } from './indexCss';

interface AidRqCreateRecruitPopulationProps {
  getHours: (hours: number) => void;
  hours: number;
}

const AidRqCreateRecruitHours: React.FC<AidRqCreateRecruitPopulationProps> = ({ getHours, hours }) => {
  const [hourState, setHourState] = useState(hours);

  useEffect(() => {
    if (hours !== hourState) {
      setHourState(hours);
    }
  }, [hours]);

  const handleHourChange = (newValue: number) => {
    setHourState(newValue);
    getHours(newValue);
  };

  return (
    <Wrapper>
      <button
        onClick={() => {
          if (hourState > 0) {
            handleHourChange(hourState - 1);
          }
        }}>
        -
      </button>
      <HourInfo>{hourState}</HourInfo>
      <button
        onClick={() => {
          handleHourChange(hourState + 1);
        }}>
        +
      </button>
    </Wrapper>
  );
};

export default AidRqCreateRecruitHours;
