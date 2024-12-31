import { inputGray, inputWhite } from '@/styles/theme';
import styled, { css } from 'styled-components';

// colortype ? 회색입력창 : 흰색입력창
const TextAreaTypes = {
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

export const TextAreaCss = styled.textarea<{ colortype: 'white' | 'gray' }>`
  box-sizing: border-box;
  outline: none;
  resize: none;

  width: 100%;

  line-height: 16px;
  font-size: 16px;
  font-weight: 400;
  padding: 15px;

  ${({ colortype }) => TextAreaTypes[colortype]}
`;
export default TextAreaCss;
