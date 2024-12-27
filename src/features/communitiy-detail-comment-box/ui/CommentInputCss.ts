import styled from 'styled-components';
import theme from '@/styles/theme';
import Button from '@/components/button';

export const ApplyButton = styled(Button)`
  width: 190px;
  height: 60px;

  font-size: ${theme.fontSize.seventhSize};
  font-weight: 500;
  color: ${theme.submitButton.variants.enabledTwo.border};
  border-radius: 13px;
`;

export const CommentInputCss = styled.div`
  display: flex;
  gap: 20px;
`;
