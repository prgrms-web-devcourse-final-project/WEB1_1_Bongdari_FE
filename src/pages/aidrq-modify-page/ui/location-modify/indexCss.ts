import styled from 'styled-components';

import theme from '@/styles/theme';

export const Wrapper = styled.div`
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  background-color: white;
  display: flex;
  padding: 0 50px;
  align-items: center;
  gap: 100px;
  height: 140px;

  & > button {
    width: 220px;
    height: 53px;
    color: white;
    font-weight: 600;
    border-radius: 12px;
    border: none;
    outline: none;
    background-color: #2382ff;
    font-size: 1rem;
  }
`;

export const Contents = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 3rem;

  & > p {
    font-size: 12px;
  }
`;

export const AidRqCreateLocationWrapper = styled.div`
  flex: 1;
`;
