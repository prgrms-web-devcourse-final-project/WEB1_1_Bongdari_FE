import useDateFormat from '@/shared/hooks/useDateFormat';
import ReviewBoxCss from './ReviewBoxCss';

interface ReviewBoxProps {
  orgName: string;
  createdDate: string;
  reviewText: string;
  onClick: () => void;
}

const ReviewBox: React.FC<ReviewBoxProps> = ({ orgName, createdDate, reviewText, onClick }) => {
  const { formatDateTime } = useDateFormat();
  return (
    <ReviewBoxCss onClick={onClick}>
      <div className="infoWrap">
        <i>{orgName}</i>
        <i>{formatDateTime(createdDate)}</i>
      </div>

      <p>{reviewText}</p>
    </ReviewBoxCss>
  );
};
export default ReviewBox;
