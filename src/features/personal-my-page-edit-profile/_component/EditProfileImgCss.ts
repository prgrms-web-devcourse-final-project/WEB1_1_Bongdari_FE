import Theme from '@/styles/theme';
import styled from 'styled-components';

export const EditProfileImgCss = styled.div`
  position: relative;

  img {
    width: 244px;
    height: 244px;
    border-radius: 244px;
    border: 1px solid #b3b3b3;
    background-color: #b3b3b3;

    object-fit: cover;
  }
  .changeImgBtn {
    color: white;
    background-color: ${Theme.pointColor.Regular};
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 30px;
    line-height: 48px;
    text-align: center;
    cursor: pointer;

    position: absolute;
    left: 188px;
    top: 188px;
  }

  input {
    display: none;
  }
`;
