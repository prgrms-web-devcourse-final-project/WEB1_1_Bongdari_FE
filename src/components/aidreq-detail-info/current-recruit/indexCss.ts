import styled from 'styled-components';
import theme from '@/styles/theme';

export const Wrapper = styled.div`
  flex: 1;

  & > h2 {
    font-size: 24px;
    font-weight: 700;
    padding: 20px 0;
  }
`;

export const Container = styled.div`
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  height: 150px;
  background-color: white;
  display: flex;

  & > div:nth-of-type(1) {
    width: 30%;
    border-right: 1px solid #d1d1d1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div:nth-of-type(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    & > p {
      color: #656565;
      font-weight: 200;

      & > span {
        font-size: 40px;
        font-weight: 600;
        color: #2382ff;
        padding: 0 10px;
      }
    }
  }
`;
