import { Wrapper } from './indexCss';
import { AlertType } from '@/shared/types/alert-type/AlertType';

interface AlertItemProps {
  item: AlertType;
  sigleRead: (id: number) => void;
}

const AlertItem: React.FC<AlertItemProps> = ({ item, sigleRead }) => {
  return (
    <Wrapper>
      <p>{item.type}</p>
      <p>{item.title}</p>
      <div>
        <p>2024.12.03</p>
        <button
          onClick={() => {
            sigleRead(item.id);
          }}>
          삭제
        </button>
      </div>
    </Wrapper>
  );
};

export default AlertItem;
