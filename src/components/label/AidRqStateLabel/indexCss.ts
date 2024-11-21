import styled from 'styled-components';

export const Wrapper = styled.span<{ state: string }>`
  display: inline-block;
  background-color: ${(props) =>
    props.state === '모집중' ? '#2382FF' : props.state === '모집완료' ? '#8623FF' : '#FF6523'};
  border-radius: 20px;
  padding: 7px 20px;
  color: #ffffff;
  font-size: 14px;
`;
