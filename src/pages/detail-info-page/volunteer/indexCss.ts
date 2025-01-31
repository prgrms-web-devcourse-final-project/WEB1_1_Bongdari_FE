import styled from 'styled-components';
import theme from '@/styles/theme';
import Button from '@/components/button';
import TextArea from '@/components/textArea';

export const TabWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const TabButton = styled(Button)<{ isActive?: boolean }>`
  flex: 1;
  height: 50px;
  border-radius: 10px;
  font-size: ${theme.fontSize.seventhSize};
`;

export const DetailInfo = styled(TextArea)`
  height: 150px;
`;

export const LogoutButton = styled(Button)`
  max-width: 460px;
  width: 100%;
  border-radius: 10px;
  height: 53px;
  margin-top: 5px;
`;
