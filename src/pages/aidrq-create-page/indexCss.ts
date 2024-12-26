import Button from '@/components/button';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 250px 0;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  padding-bottom: 40px;
`;

export const ThirdLine = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 16px;
`;

export const FourthLine = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export const WriteAidRqBtn = styled(Button)`
  width: 220px;
  height: 53px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
`;
