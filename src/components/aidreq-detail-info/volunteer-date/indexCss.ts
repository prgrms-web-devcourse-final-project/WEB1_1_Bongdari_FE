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

  @media (max-width: 1000px) {
    flex-direction: column;
    height: 200px;
  }

  & > div:nth-of-type(1) {
    width: 56%;
    border-right: 1px solid #d1d1d1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    @media (max-width: 1000px) {
      width: 100%;
      border-right: none;
      border-bottom: 1px solid #d1d1d1;
      padding: 25px 0;
    }

    & > p {
      color: #696969;
      font-weight: 400;

      & > span {
        display: inline-block;
        padding: 8px 16px;
        border: 1px solid #cdcdcd;
        border-radius: 50px;
        margin-right: 10px;
      }
    }
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
        color: black;
        padding: 0 10px;
      }
    }
  }
`;
