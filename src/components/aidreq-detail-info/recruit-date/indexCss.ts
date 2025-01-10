import styled from 'styled-components';
import theme from '@/styles/theme';

export const Wrapper = styled.div`
  flex: 1;

  & > div {
    display: flex;
    justify-content: space-between;
  }

  & > div > h2 {
    font-size: 24px;
    font-weight: 700;
    padding: 20px 0;
  }

  & > div > p {
    font-size: ${theme.fontSize.eighthSize};
    color: #8d8d8d;
    display: inline-block;
    margin-top: auto;
    padding-bottom: 10px;
  }

  @media (max-width: 1000px) {
    & > div > h2 {
      font-size: ${theme.fontSize.sixthSize};
    }

    & > div > p {
      font-size: ${theme.fontSize.ninthSize};
    }
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
        color: #ff7023;
        padding: 0 10px;
      }
    }
  }
`;
