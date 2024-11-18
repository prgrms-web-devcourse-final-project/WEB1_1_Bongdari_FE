import styled from 'styled-components';

interface InputCompCssProps {
  width: string;
  height: string;
}

const InputCompCss = styled.div<InputCompCssProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 2px solid transparent;
  border-radius: 8px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus-within {
    border: 2px solid gray;
  }

  input {
    padding: 5px;
    width: 100%;
    line-height: 16px;
    font-size: 16px;
    background-color: transparent;
    outline: none;
    border: none;
  }
`;
export default InputCompCss;
