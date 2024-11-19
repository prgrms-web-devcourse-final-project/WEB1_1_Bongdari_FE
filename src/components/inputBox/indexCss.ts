import styled from 'styled-components';

// colortype===true : 일반 입력창
// colortype===false : 검색 입력창
interface InputBoxCssProps {
  width: string;
  height?: string;
  colortype: boolean;
}

const InputBoxCss = styled.input<InputBoxCssProps>`
  box-sizing: border-box;
  outline: none;

  width: ${(props) => props.width};
  height: ${(props) => props.height ?? ''};
  color: '#363636';
  background-color: ${(props) => (props.colortype ? '#F5F5F5' : '#fff')};
  border: 1px solid ${(props) => (props.colortype ? 'transparent' : '#dbdbdb')};
  border-radius: 8px;
  line-height: 16px;
  font-size: 16px;
  padding: 5px;

  &::placeholder {
    color: ${(props) => (props.colortype ? '#363636' : '#E0E0E0')};
  }

  &:focus-within {
    border: 1px solid ${(props) => (props.colortype ? '#E0E0E0' : '#363636')};
  }
`;
export default InputBoxCss;
