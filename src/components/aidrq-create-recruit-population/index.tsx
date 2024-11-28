import { useState } from 'react';
import { PopulationInfo, Wrapper } from './indexCss';

interface AidRqCreateRecruitPopulationProps {
  getPopulation: (population: number) => void;
}

const AidRqCreateRecruitPopulation: React.FC<AidRqCreateRecruitPopulationProps> = ({ getPopulation }) => {
  const [populationState, setPopulationState] = useState(0);
  getPopulation(populationState);
  return (
    <Wrapper>
      <button
        onClick={() => {
          if (populationState > 0)
            setPopulationState((prev) => {
              return prev - 1;
            });
        }}>
        -
      </button>
      <PopulationInfo>{populationState}</PopulationInfo>
      <button
        onClick={() => {
          setPopulationState((prev) => {
            return prev + 1;
          });
        }}>
        +
      </button>
    </Wrapper>
  );
};

export default AidRqCreateRecruitPopulation;
