import { inputGray, inputWhite } from '@/styles/theme';
import styled from 'styled-components';

// colortype ? 회색입력창 : 흰색입력창
interface TextAreaCssProps {
  colortype: 0 | 1;
  width: string;
  height: string;
}

const TextAreaCss = styled.textarea<TextAreaCssProps>`
  box-sizing: border-box;
  outline: none;
  resize: none;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => (props.colortype ? inputGray.color : inputWhite.color)};
  background-color: ${(props) =>
    props.colortype ? inputGray.variants.notFocused.backgroundColor : inputWhite.backgroundColor};
  border: ${(props) => (props.colortype ? 'none' : inputWhite.variants.notFocused.border)};
  border-radius: ${(props) => (props.colortype ? inputGray.borderRadius : inputWhite.borderRadius)};
  line-height: 16px;
  font-size: 16px;
  font-weight: 400;
  padding: 15px;

  &::placeholder {
    color: ${(props) => (props.colortype ? inputGray.placeholderColor : inputWhite.placeholderColor)};
  }

  &:focus-within {
    background-color: ${(props) =>
      props.colortype ? inputGray.variants.focused.backgroundColor : inputWhite.backgroundColor};
    border: ${(props) => (props.colortype ? 'none' : inputWhite.variants.focused.border)};
  }
`;
export default TextAreaCss;
