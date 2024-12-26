import styled from 'styled-components';
import Button from '@/components/button';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const MailButton = styled(Button)`
  width: 220px;
  height: 47px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
`;

export const ProfileBtn = styled(Button)`
  width: 220px;
  height: 47px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 8px;
`;
