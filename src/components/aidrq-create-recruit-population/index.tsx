import { useState, useEffect } from 'react';
import { PopulationInfo, Wrapper } from './indexCss';

interface AidRqCreateRecruitPopulationProps {
  getPopulation: (population: number) => void;
  recruitmentcount: number;
}

const AidRqCreateRecruitPopulation: React.FC<AidRqCreateRecruitPopulationProps> = ({
  getPopulation,
  recruitmentcount
}) => {
  const [populationState, setPopulationState] = useState(recruitmentcount); // 초기값 설정

  // 외부에서 recruitmentcount가 변경될 때만 populationState 업데이트
  useEffect(() => {
    if (recruitmentcount !== populationState) {
      setPopulationState(recruitmentcount);
    }
  }, [recruitmentcount]);

  const handlePopulationChange = (newValue: number) => {
    setPopulationState(newValue);
    getPopulation(newValue); // 값이 변경될 때 직접 호출
  };

  return (
    <Wrapper>
      <button
        onClick={() => {
          if (populationState > 0) {
            handlePopulationChange(populationState - 1);
          }
        }}>
        -
      </button>
      <PopulationInfo>{populationState}</PopulationInfo>
      <button
        onClick={() => {
          handlePopulationChange(populationState + 1);
        }}>
        +
      </button>
    </Wrapper>
  );
};

export default AidRqCreateRecruitPopulation;
