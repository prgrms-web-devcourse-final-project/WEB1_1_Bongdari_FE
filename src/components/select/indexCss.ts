import styled from 'styled-components';
import theme from '@/styles/theme';

export const Box = styled.select<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 12px;
  color: #414141;
  padding: 0 10px;
  border: 1px solid #dbdbdb;
  outline: none;
  transition: 0.2s;
  font-size: ${theme.fontSize.seventhSize};

  &:hover {
    cursor: pointer;
    border: 1px solid #62a6ff;
  }

  &:focus {
    border: 1px solid #62a6ff;
  }
`;

export const OptionPlaceholder = styled.option`
  padding: 10px;
  color: #cfcfcf;
`;
