import AlertItem from '@/components/alert-item';
import { Container, Top, Wrapper } from './indexCss';
import { singleRead } from './logic/single-read';
import { AlertType } from '@/shared/types/alert-type/AlertType';

interface AlertProps {
  notifications: AlertType[];
  fetchNotifications: () => Promise<void>;
}

const Alert: React.FC<AlertProps> = ({ notifications, fetchNotifications }) => {
  return (
    <Wrapper>
      <Container>
        <Top>
          <p>알림</p>
          <span>전체 삭제하기</span>
        </Top>
        {notifications.map((item, index) => (
          <AlertItem
            key={index}
            item={item}
            singleRead={singleRead}
            fetchNotifications={fetchNotifications}></AlertItem>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Alert;
