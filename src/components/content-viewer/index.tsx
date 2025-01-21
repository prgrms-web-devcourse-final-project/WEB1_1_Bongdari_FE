import parse from 'html-react-parser';
import { Container } from './indexCss';

interface ContentViewerProps {
  content: string;
}

const ContentViewer = ({ content }: ContentViewerProps) => {
  return <Container>{parse(content)}</Container>;
};

export default ContentViewer;
