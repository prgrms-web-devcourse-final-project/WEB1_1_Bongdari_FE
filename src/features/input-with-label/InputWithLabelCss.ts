import TextArea from '@/components/textArea';
import styled from 'styled-components';

export const ApplyTextArea = styled(TextArea)<{ $height?: string }>`
  height: ${({ $height }) => $height || 'auto'};
`;

export const InputWithLabelCss = styled.div`
  color: #656565;
  font-weight: 600;

  margin-bottom: 10px;
  display: flex;

  .label {
    width: 70px;
    padding-top: 5px;
  }
`;
