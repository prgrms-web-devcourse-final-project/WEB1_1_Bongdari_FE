import styled from 'styled-components';

// colortype ? 회색입력창 : 흰색입력창
interface InputBoxCssProps {
  colortype: 0 | 1;
  borderradius: '8px' | '12px';
  width: string;
  height: string;
}

const InputBoxCss = styled.input<InputBoxCssProps>`
  box-sizing: border-box;
  outline: none;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: '#363636';
  background-color: ${(props) => (props.colortype ? '#F5F5F5' : '#fff')};
  border: 1px solid ${(props) => (props.colortype ? 'transparent' : '#dbdbdb')};
  border-radius: ${(props) => props.borderradius};
  line-height: 16px;
  font-size: 16px;
  padding: 5px;
  padding-left: 20px;

  &::placeholder {
    color: ${(props) => (props.colortype ? '#363636' : '#E0E0E0')};
  }

  &:focus-within {
    border: 1px solid ${(props) => (props.colortype ? '#E0E0E0' : '#62A6FF')};
  }
`;
export default InputBoxCss;
