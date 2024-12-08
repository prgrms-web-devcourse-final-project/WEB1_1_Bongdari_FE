import { Wrapper } from './indexCss';
import { AlertType } from '@/shared/types/alert-type/AlertType';

interface AlertItemProps {
  item: AlertType;
  singleRead: (id: number) => void;
}

const AlertItem: React.FC<AlertItemProps> = ({ item, singleRead }) => {
  return (
    <Wrapper>
      <p>{item.type}</p>
      <p>{item.title}</p>
      <div>
        <p>2024.12.03</p>
        <button
          onClick={() => {
            singleRead(item.id);
          }}>
          삭제
        </button>
      </div>
    </Wrapper>
  );
};

export default AlertItem;
