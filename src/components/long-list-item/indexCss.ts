import { box, fontSize } from './../../styles/theme';
import styled from 'styled-components';

const LongListItemCss = styled.div`
  background-color: ${() => box.section.backgroundColor};
  border-radius: ${() => box.section.borderRadius};
  border: ${() => box.section.border};
  width: 100%;
  padding: 30px 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: default;

  & * {
    /* border: 1px solid gray; */
  }
  .numbering {
    padding-left: 5%;
    color: #808080;
    font-weight: 300;
    font-size: ${() => fontSize.eighthSize};
  }

  .mainText {
    margin: 0 50px 0 50px;
    color: #000;
    font-weight: 500;
    font-size: 16px;
    text-align: left;
    width: 50%;
    cursor: pointer;

    /* 길어지면 말줄임표 */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  //* 개인 마이페이지 쪽지 리스트(읽음처리) *//
  .mainText.read {
    color: #8f8f8f;
  }

  &:hover {
    // TODO: hover시 디자인 변경사항 있다면 적용하기.
  }

  @media (max-width: 1000px) {
    .numbering {
      display: none;
    }
  }
`;
export default LongListItemCss;
