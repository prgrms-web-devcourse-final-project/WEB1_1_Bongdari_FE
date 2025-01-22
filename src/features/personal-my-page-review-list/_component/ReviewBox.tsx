import sanitizeHtml from 'sanitize-html';
import parse from 'html-react-parser';
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

  const sanitizedContent = sanitizeHtml(reviewText, {
    allowedTags: ['p'], // p 태그만 허용하기
    allowedAttributes: {} // 어떤 요소도 허용 x
  });

  return (
    <ReviewBoxCss onClick={onClick}>
      <div className="infoWrap">
        <i>{orgName}</i>
        <i>{formatDateTime(createdDate)}</i>
      </div>

      <p>{parse(sanitizedContent)}</p>
    </ReviewBoxCss>
  );
};
export default ReviewBox;
