import styled from 'styled-components';
import Button from '@/components/button';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 220px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const MailButton = styled(Button)`
  width: 100%;
  height: 47px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
`;

export const ProfileBtn = styled(Button)`
  width: 100%;
  height: 47px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 8px;
`;
