import Button from '@/components/button';
import theme from '@/styles/theme';
import styled from 'styled-components';

export const PageWrapper = styled.div`
  max-width: 1200px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 250px 0;
  gap: 20px;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  overflow: hidden;
`;

export const LogoImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const ErrorMsg = styled.h1`
  font-size: ${theme.fontSize.secondSize};
  font-weight: 600;
  text-align: center;
  white-space: pre-line;
  line-height: 1.5;
`;

export const RequirementMsg = styled.p`
  font-size: ${theme.fontSize.seventhSize};
  font-weight: 600;
  color: #7a7a7a;
`;

export const GoToMainButton = styled(Button)`
  width: 229px;
  height: 53px;
  font-size: ${theme.fontSize.seventhSize};
  border-radius: 10px;
  margin-top: 65px;
`;
