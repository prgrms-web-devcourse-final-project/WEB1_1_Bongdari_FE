import theme from '@/styles/theme';
import styled from 'styled-components';

export const ApplicantListItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  background-color: ${theme.box.section.backgroundColor};
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
  padding: 32px 31px 20px 31px;
  border-bottom: 1px solid #dedede;
`;

export const ProfileImgWrapper = styled.div`
  border-radius: 50%;
  background-color: #d9d9d9;
  width: 110px;
  height: 110px;
  overflow: hidden;
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProfileBox = styled.div`
  display: flex;
  gap: 19px;
  align-items: center;
`;

export const ProfileInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SimpleProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Name = styled.p`
  font-size: ${theme.fontSize.seventhSize};
  font-weight: 600;
  cursor: default;
`;

export const Email = styled.p`
  font-size: ${theme.fontSize.eighthSize};
  color: #7a7a7a;
  cursor: default;
`;

export const Status = styled.p`
  font-size: ${theme.fontSize.eighthSize};
  color: ${theme.pointColor.event};
  padding: 25px 0 0 0;
  cursor: default;
`;

export const EmptyButton = styled.button`
  width: 331px;
  height: 48px;
  border: 1px solid ${theme.pointColor.event};
  border-radius: 13px;
  background-color: #ffffff;
  color: ${theme.pointColor.event};
  font-size: ${theme.fontSize.eighthSize};
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;

  &:active {
    color: ${theme.pointColor.clicked};
    border: 1px solid ${theme.pointColor.clicked};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  padding: 20px 31px 25px 31px;
`;

export const RejectButton = styled.button`
  width: 163px;
  height: 48px;
  border: 1px solid ${theme.pointColor.event};
  border-radius: 13px;
  background-color: #ffffff;
  color: ${theme.pointColor.event};
  font-size: ${theme.fontSize.eighthSize};
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;

  &:active {
    color: ${theme.pointColor.clicked};
    border: 1px solid ${theme.pointColor.clicked};
  }
`;
