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
    height: 500px;
    width: 100%;
    border: 1px dashed gray;
    border-radius: 13px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px) {
      height: 300px;
    }
  }
`;
