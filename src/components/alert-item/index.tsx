import { useNavigate } from 'react-router-dom';
import { Wrapper } from './indexCss';
import { AlertType } from '@/shared/types/alert-type/AlertType';

interface AlertItemProps {
  item: AlertType;
  singleRead: (id: number) => void;
  fetchNotifications: () => Promise<void>;
}

const AlertItem: React.FC<AlertItemProps> = ({ item, singleRead, fetchNotifications }) => {
  const navigate = useNavigate();

  return (
    <Wrapper
      onClick={() => {
        if (item.type === 'VOLUNTEER_APPLY_STATUS_CHANGE' || item.type === 'VOLUNTEER_REVIEW_REQUEST')
          navigate(`/aidrqdetail/${item.related_id}`);
        else if (item.type === 'NOTE_BLAH_BLAH') navigate(`/mypage`);
      }}>
      <p>{item.type}</p>
      <p>{item.title}</p>
      <div>
        <p>{item.created_at}</p>
        <button
          onClick={(e) => {
            const handleClick = async () => {
              e.stopPropagation();
              await singleRead(item.id);
              await fetchNotifications();
            };
            handleClick();
          }}>
          삭제
        </button>
      </div>
    </Wrapper>
  );
};

export default AlertItem;
