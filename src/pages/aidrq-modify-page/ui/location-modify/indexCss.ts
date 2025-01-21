import styled from 'styled-components';

import theme from '@/styles/theme';
import Button from '@/components/button';

export const Wrapper = styled.div`
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  background-color: white;
  display: flex;
  padding: 0 50px;
  align-items: center;
  gap: 100px;
  height: 140px;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 20px;
    height: 200px;
    justify-content: center;
    align-items: flex-start;
    padding: 0 20px;
  }
`;

export const Contents = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    flex: none;
  }

  & > p {
    font-size: 12px;
  }
`;

export const AidRqCreateLocationWrapper = styled.div`
  flex: 1;

  @media (max-width: 1000px) {
    width: 100%;
    flex: none;
  }
`;

export const ModifyLocationBtn = styled(Button)`
  width: 220px;
  height: 53px;
  font-weight: 600;
  border-radius: 12px;
  font-size: 14px;
  transition-property: color, background-color;

  @media (max-width: 1000px) {
    width: 100%;
    height: 50px;
  }
`;
