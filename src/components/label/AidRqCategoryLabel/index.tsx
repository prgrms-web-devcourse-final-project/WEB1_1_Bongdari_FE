import { categoryToKorean } from '@/shared/mapping/aidrq-category-mapping';
import { Wrapper } from './indexCss';

interface AidRqCategoryLabelProps {
  text: string;
}

const AidRqCategoryLabel: React.FC<AidRqCategoryLabelProps> = ({ text }) => {
  // text가 영문 코드일 경우 한글로 변환하고, 그렇지 않을 경우 그대로 text 렌더링
  const convertText = categoryToKorean[text] || text;
  return <Wrapper>{convertText}</Wrapper>;
};

export default AidRqCategoryLabel;
