import Button from '@/components/button';
import Theme from '@/styles/theme';
import styled from 'styled-components';

export const ApplyButton = styled(Button)`
  width: 220px;
  height: 50px;

  font-size: ${Theme.fontSize.eighthSize};
  font-weight: 500;
  border-radius: 13px;
`;

export const EditProfileCss = styled.div`
  background-color: ${Theme.box.section.backgroundColor};
  border: ${Theme.box.section.border};
  border-radius: ${Theme.box.section.borderRadius};
  width: 100%;
  height: 600px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 65px 100px;

  .imgSection > img {
    width: 244px;
    height: 244px;
    border-radius: 244px;
    background-color: #b3b3b3;

    object-fit: cover;
  }
  .imgSection {
    position: relative;
  }
  .changeImgBtn {
    color: white;
    background-color: ${Theme.pointColor.Regular};
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 30px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;

    position: absolute;
    left: 188px;
    top: 188px;
  }

  .inputSection {
    padding: 20px 0 0 10%;
  }
  .inputSection .editBtnWrap {
    display: flex;
    justify-content: end;
    margin-top: 70px;
  }
`;
