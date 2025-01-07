import styled from 'styled-components';
import Button from '@/components/button';

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const SelectWrapper = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const SearchBtn = styled(Button)`
  width: 188px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  transition-property: color, background-color;

  @media (max-width: 1000px) {
    width: 100%;
    height: 50px;
    transition-property: color, background-color;
  }
`;
