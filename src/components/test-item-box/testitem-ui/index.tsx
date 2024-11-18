import { Button } from './indexCss';

interface FirstTestItem {
  onClick: () => void;
  width: number;
  height: number;
}

const FirstTestItem: React.FC<FirstTestItem> = ({ onClick, width, height }) => {
  return (
    <Button onClick={onClick} width={width} height={height}>
      날눌러주세요
    </Button>
  );
};

export default FirstTestItem;
