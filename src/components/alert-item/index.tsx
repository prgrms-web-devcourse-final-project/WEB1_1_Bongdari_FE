import { useNavigate } from 'react-router-dom';
import { Wrapper } from './indexCss';
import { AlertType } from '@/shared/types/alert-type/AlertType';

interface AlertItemProps {
  item: AlertType;
  singleRead: (id: number) => void;
}

const AlertItem: React.FC<AlertItemProps> = ({ item, singleRead }) => {
  const navigate = useNavigate();

  return (
    <Wrapper
      onClick={() => {
        if (item.type === 'VOLUNTEER_APPLY_STATUS_CHANGE') navigate(`/aidrqdetail/${item.related_id}`);
      }}>
      <p>{item.type}</p>
      <p>{item.title}</p>
      <div>
        <p>{item.created_at}</p>
        <button
          onClick={() => {
            singleRead(item.notification_id);
          }}>
          삭제
        </button>
      </div>
    </Wrapper>
  );
};

export default AlertItem;
