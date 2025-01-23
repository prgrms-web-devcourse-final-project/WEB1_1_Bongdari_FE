import theme from '@/styles/theme';
import styled from 'styled-components';

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 23px;

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

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const SectionBox = styled.div`
  width: 100%;
  max-height: 810px;
  height: 95vh;
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  background-color: ${theme.box.section.backgroundColor};
  padding: 55px 42px 44px 48px;

  @media (max-width: 1000px) {
    padding: 22px 20px 68px 18px;
  }
`;
