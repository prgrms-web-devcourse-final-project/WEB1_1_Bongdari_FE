import Button from '@/components/button';
import theme from '@/styles/theme';
import styled from 'styled-components';

export const ApplyButton = styled(Button)`
  width: 220px;
  height: 50px;
  font-size: ${theme.fontSize.eighthSize};
  border-radius: 13px;
`;

export const DeleteCommunityButton = styled(Button)`
  width: 220px;
  height: 50px;
  font-size: ${theme.fontSize.eighthSize};
  border-radius: 13px;
`;

export const CommunityDetailContentBoxCss = styled.div`
  .noData {
    width: 100%;
    text-align: center;
  }

  .title {
    font-size: ${theme.fontSize.firstSize};
    font-weight: 700;
    display: blocK;
    padding-bottom: 50px;
  }

  .modifiedDate {
    font-size: ${theme.fontSize.eighthSize};
    color: #696969;
    display: block;
    padding-bottom: 30px;
  }

  .content {
    background-color: ${theme.box.section.backgroundColor};
    border: ${theme.box.section.border};
    border-radius: ${theme.box.section.borderRadius};
    padding: 50px 120px;
    margin: 10px 0;

    font-size: ${theme.fontSize.seventhSize};
    line-height: ${theme.fontSize.thirdSize};
  }
  .btnWrap {
    width: 100%;
    text-align: center;
    margin-top: 50px;
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .content {
      width: 100%;
    }
  }
`;

export const CommunityImageContainer = styled.div`
  background-color: ${theme.box.section.backgroundColor};
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  margin: 10px 0;
  overflow: hidden;
`;

export const CommunityImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const EditDeleteBtnCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
    & > * {
      width: 100%;
    }
    & > * > * {
      width: 100%;
    }
  }
`;
