import styled from 'styled-components';
import Button from '@/components/button';

export const Wrapper = styled.div`
  width: 100%;
  min-width: 400px;
  display: flex;
  gap: 1rem;

  @media (max-width: 1000px) {
    display: block;
  }
`;

export const InputBoxContainer = styled.div`
  flex: 1;
`;

export const SearchBtn = styled(Button)`
  width: 188px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;

  @media (max-width: 1000px) {
    width: 100%;
    height: 50px;
    margin-top: 10px;
  }
`;
