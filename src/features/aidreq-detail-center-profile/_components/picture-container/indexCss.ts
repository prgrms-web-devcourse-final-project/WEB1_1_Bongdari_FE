import styled from 'styled-components';

export const ProfileImg = styled.div<{ imgurl: string }>`
  background-image: url(${(props) => props.imgurl});
  background-position: center;
  background-size: contain;
  width: 120px;
  height: 120px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 100px;
`;
