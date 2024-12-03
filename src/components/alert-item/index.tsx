import { Wrapper } from './indexCss';
import { AlertType } from '@/shared/types/alert-type/AlertType';

interface AlertItemProps {
  item: AlertType;
}

const AlertItem: React.FC<AlertItemProps> = ({ item }) => {
  return (
    <Wrapper>
      <p>{item.type}</p>
      <p>{item.title}</p>
      <div>
        <p>2024.12.03</p>
        <button>읽음처리하기</button>
      </div>
    </Wrapper>
  );
};

export default AlertItem;
