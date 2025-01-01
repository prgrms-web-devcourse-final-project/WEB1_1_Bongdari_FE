import styled from 'styled-components';
import theme from '@/styles/theme';

export const PMPGTopCss = styled.div`
  .sayHi {
    font-size: ${theme.fontSize.secondSize};
    font-weight: 600;
    margin-bottom: 20px;
    display: inline-block;
  }

  .noData {
    height: 600px;
    width: 100%;
    border: 1px dashed gray;
    border-radius: 13px;
    text-align: center;
    display: block;
    padding-top: 15%;
  }
`;
