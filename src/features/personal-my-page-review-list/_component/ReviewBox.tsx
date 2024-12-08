import useDateFormat from '@/shared/hooks/useDateFormat';
import ReviewBoxCss from './ReviewBoxCss';

interface ReviewBoxProps {
  orgName: string;
  createdDate: string;
  reviewText: string;
}

const ReviewBox: React.FC<ReviewBoxProps> = ({ orgName, createdDate, reviewText }) => {
  const { formatDateTime } = useDateFormat();
  return (
    <ReviewBoxCss>
      <div className="infoWrap">
        <i>{orgName}</i>
        <i>{formatDateTime(createdDate)}</i>
      </div>

      <p>{reviewText}</p>
    </ReviewBoxCss>
  );
};
export default ReviewBox;
