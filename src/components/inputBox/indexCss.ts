import styled, { css } from 'styled-components';
import { inputGray, inputWhite } from '@/styles/theme';

const InputTypes = {
  white: css`
    color: ${inputWhite.color};
    background-color: ${inputWhite.backgroundColor};
    border: ${inputWhite.variants.notFocused.border};
    border-radius: ${inputWhite.borderRadius};
    &::placeholder {
      color: ${inputWhite.placeholderColor};
    }
    &:focus-within {
      background-color: ${inputWhite.backgroundColor};
      border: ${inputWhite.variants.focused.border};
    }
  `,
  gray: css`
    color: ${inputGray.color};
    background-color: ${inputGray.variants.notFocused.backgroundColor};
    border: ${'none'};
    border-radius: ${inputGray.borderRadius};
    &::placeholder {
      color: ${inputGray.placeholderColor};
    }
    &:focus-within {
      background-color: ${inputGray.variants.focused.backgroundColor};
      border: ${'none'};
    }
  `
};

const InputBoxCss = styled.input<{ colortype: 'white' | 'gray' }>`
  box-sizing: border-box;
  outline: none;
  width: 100%;

  line-height: 16px;
  font-size: 16px;
  padding: 15px;

  ${({ colortype }) => InputTypes[colortype]}

  &:disabled {
    background-color: ${inputGray.variants.focused.backgroundColor};
    cursor: not-allowed; // 비활성화됐을 때 커서 스타일 변경
    opacity: 0.7; // 비활성화됐다는 것을 시각적으로 표현

    &::placeholder {
      color: ${inputGray.placeholderColor};
      opacity: 0.7;
    }
  }
`;
export default InputBoxCss;
