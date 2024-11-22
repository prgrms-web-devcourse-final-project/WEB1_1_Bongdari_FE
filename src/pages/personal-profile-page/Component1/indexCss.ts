import theme from '@/styles/theme';
import styled from 'styled-components';

export const PPPG_Component1Css = styled.div`
  width: 462px;
  height: 480px;

  background-color: ${theme.box.section.backgroundColor};
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  padding: 65px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  img {
    background-color: #b3b3b3;
    object-fit: cover;
    border-radius: 190px;
    width: 190px;
    height: 190px;
  }

  p {
    text-align: center;
  }

  i {
    font-size: ${theme.fontSize.fourthSize};
    font-weight: 600;
    margin: 0 5px;
  }
`;
