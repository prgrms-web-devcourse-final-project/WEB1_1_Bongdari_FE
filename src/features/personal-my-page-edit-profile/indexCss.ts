import Button from '@/components/button';
import Theme from '@/styles/theme';
import styled from 'styled-components';

export const ApplyButton = styled(Button)`
  width: 220px;
  height: 50px;

  font-size: ${Theme.fontSize.eighthSize};
  font-weight: 500;
  border-radius: 13px;

  @media (max-width: 1000px) {
  }
`;

export const ApplyButton2 = styled(Button)`
  width: 220px;
  height: 50px;

  font-size: ${Theme.fontSize.eighthSize};
  font-weight: 500;
  border-radius: 13px;

  @media (max-width: 1000px) {
    width: 120px;
    height: 37px;
  }
`;

export const EditProfileCss = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 10px;

  .imgSection {
    background-color: ${Theme.box.section.backgroundColor};
    border: ${Theme.box.section.border};
    border-radius: ${Theme.box.section.borderRadius};
    width: 100%;
    height: 600px;
    padding: 65px 100px;
    position: relative;
  }
  .imgSection > img {
    width: 244px;
    height: 244px;
    border-radius: 244px;
    background-color: #b3b3b3;
    padding-bottom: 500px;

    object-fit: cover;
  }
  .imgSection .editBtnWrap {
    width: 100%;
    text-align: center;
    margin-top: 150px;
  }

  .inputSection {
    background-color: ${Theme.box.section.backgroundColor};
    border: ${Theme.box.section.border};
    border-radius: ${Theme.box.section.borderRadius};
    width: 100%;
    height: 600px;
    padding: 65px 50px;
  }
  .inputSection .editBtnWrap {
    display: flex;
    justify-content: end;
    margin-top: 110px;
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .imgSection {
      height: auto;
      padding: 50px 40px;
    }
    .imgSection > * {
      text-align: center;
    }
    .imgSection .editBtnWrap {
      margin-top: 80px;
    }

    .inputSection {
      height: auto;
      padding: 40px 40px;
    }
    .inputSection > * {
      text-align: center;
    }
    .inputSection .editBtnWrap {
      display: block;
      margin-top: 50px;
    }
  }
`;
