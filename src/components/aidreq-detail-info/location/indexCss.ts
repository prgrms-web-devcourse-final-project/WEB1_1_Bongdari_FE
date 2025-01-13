import styled from 'styled-components';
import theme from '@/styles/theme';

export const Wrapper = styled.div`
  flex: 1;

  & > h2 {
    font-size: 24px;
    font-weight: 700;
    padding: 20px 0;
  }

  @media (max-width: 1000px) {
    & > h2 {
      font-size: ${theme.fontSize.sixthSize};
    }
  }
`;

export const Container = styled.div`
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  height: 150px;
  background-color: white;
  display: flex;
  flex-direction: column;

  & > div:nth-of-type(1) {
    height: 100px;
    border-bottom: 1px solid #d1d1d1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    & > p {
      font-weight: 500;
    }
  }

  & > div:nth-of-type(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    transition: 0.2s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }

    & > p {
      color: #555555;
      font-weight: 400;
    }
  }
`;
