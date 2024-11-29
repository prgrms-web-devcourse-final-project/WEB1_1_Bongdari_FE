import theme from '@/styles/theme';
import styled from 'styled-components';

export const UserBox = styled.div`
  border: 1px solid #e4e4e4;
  border-radius: 15px;
  background-color: #ffffff;
  width: 57px;
  height: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const VolunteerTitle = styled.p`
  font-size: ${theme.fontSize.seventhSize};
  font-weight: 600;
`;

export const VolunteerSubTitle = styled.p`
  font-size: ${theme.fontSize.eighthSize};
  color: #9c9c9c;
`;

export const VolunteerTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
