import FirstTestItem from './testitem-ui';
import { onClick } from './testitem-logic/onClick';

interface TestItemBoxProps {
  width: number;
  height: number;
}

const TestItemBox: React.FC<TestItemBoxProps> = ({ width, height }) => {
  return (
    <div>
      <p>버튼이있습니다.</p>
      <FirstTestItem onClick={onClick} width={width} height={height}></FirstTestItem>
    </div>
  );
};

export default TestItemBox;
