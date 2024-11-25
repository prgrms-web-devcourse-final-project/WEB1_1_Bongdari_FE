import { Wrapper } from './indexCss';

interface AidRqCategoryLabelProps {
  text: string;
}

const AidRqCategoryLabel: React.FC<AidRqCategoryLabelProps> = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};

export default AidRqCategoryLabel;
