import ReviewBoxCss from './ReviewBoxCss';

interface ReviewBoxProps {
  orgName: string;
  createdDate: string;
  reviewText: string;
}

const ReviewBox: React.FC<ReviewBoxProps> = ({ orgName, createdDate, reviewText }) => {
  return (
    <ReviewBoxCss>
      <div className="infoWrap">
        <i>{orgName}</i>
        <i>{createdDate}</i>
      </div>

      <p>{reviewText}</p>
    </ReviewBoxCss>
  );
};
export default ReviewBox;
