import parse from 'html-react-parser';
import sanitizeHtml from 'sanitize-html';
import { SanitizedContentWrapper } from './indexCss';

interface SanitizedContentProps {
  content: string;
}

const SanitizedContent = ({ content }: SanitizedContentProps) => {
  const sanitizedContent = sanitizeHtml(content, {
    allowedTags: [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'p',
      'img',
      'br',
      'b',
      'strong',
      'em',
      'ul',
      'ol',
      'li',
      'a',
      'span'
    ],
    allowedAttributes: {
      '*': ['style'],
      a: ['href', 'target'],
      img: ['src', 'alt']
    },
    allowedStyles: {
      '*': {
        color: [/.*/],
        'background-color': [/.*/],
        'font-size': [/.*/],
        'text-align': [/.*/]
      }
    }
  });

  return <SanitizedContentWrapper>{parse(sanitizedContent)}</SanitizedContentWrapper>;
};

export default SanitizedContent;
