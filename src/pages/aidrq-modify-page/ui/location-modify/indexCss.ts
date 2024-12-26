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

export const ModifyLocationBtn = styled(Button)`
  width: 220px;
  height: 53px;
  font-weight: 600;
  border-radius: 12px;
  font-size: 14px;
`;
