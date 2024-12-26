import styled from 'styled-components';
import Button from '@/components/button';

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const SelectWrapper = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;
`;

export const SearchBtn = styled(Button)`
  width: 188px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
`;
