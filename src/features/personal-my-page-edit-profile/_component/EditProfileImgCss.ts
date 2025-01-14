import Theme from '@/styles/theme';
import styled from 'styled-components';

export const EditProfileImgCss = styled.div`
  .profileWrap {
    display: inline;
    position: relative;
  }
  .profileImg {
    width: 244px;
    height: 244px;
    border-radius: 244px;
    background-color: #b3b3b3;

    object-fit: cover;
  }
  label {
    border: 1px solid red;
  }
  .changeImgBtn {
    color: white;
    background-color: ${Theme.pointColor.Regular};
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 30px;
    line-height: 46px;
    text-align: center;
    cursor: pointer;

    position: absolute;
    right: 10px;
    bottom: 10px;
  }
  .changeImgBtn > img {
    /* border: 1px solid red; */
    width: 30px;
    height: 30px;
    margin: auto;
    object-fit: contain;
    vertical-align: middle;
  }

  input {
    display: none;
  }

  @media (max-width: 1000px) {
    .profileImg {
      width: 200px;
      height: 200px;
    }
  }
`;
