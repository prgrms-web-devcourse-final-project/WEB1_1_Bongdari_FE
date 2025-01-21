import Button from '@/components/button';
import theme from '@/styles/theme';
import styled from 'styled-components';

export const CenterProfileEditContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  gap: 1rem;
`;

export const CenterProfileTitle = styled.h1`
  font-size: ${theme.fontSize.secondSize};
  font-weight: 600;
  width: 100%;
  cursor: default;

  @media (max-width: 1000px) {
    font-size: ${theme.fontSize.fifthSize};
    font-weight: 700;
    text-align: center;
  }
`;

export const ProfileEditWrapper = styled.div`
  display: flex;
  gap: 29px;

  .noData {
    height: 200px;
    width: 100%;
    border: 1px dashed gray;
    border-radius: 13px;
    text-align: center;
    display: block;
    padding-top: 8%;
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FormSection = styled.div`
  flex: 1;
  width: 100%;
`;

export const EditButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  padding-top: 62px;
`;

export const ProfileImgEditButton = styled(Button)`
  width: 221px;
  height: 53px;
  font-weight: 600;
  font-size: ${theme.fontSize.eighthSize};
  border-radius: 13px;
`;

export const EditEtcProfileButton = styled(Button)`
  width: 221px;
`;

export const ProfileSection = styled.section`
  border: ${theme.box.section.border};
  background-color: ${theme.box.section.backgroundColor};
  border-radius: ${theme.box.section.borderRadius};
  display: flex;
  flex-direction: column;
  gap: 213px;
  align-items: center;
  padding: 75px 110px 42px 110px;

  &.noData {
    border-radius: 13px;
    border: 1px dashed gray;
    height: 100%;
    padding-top: 25%;
  }

  @media (max-width: 1000px) {
    gap: 36px;
    padding: 40px 122px 43px 122px;
  }
`;
