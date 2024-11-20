import styled from 'styled-components';

const ListItemCss = styled.div`
  box-sizing: border-box;
  background-color: #fff;
  border: 1.5px solid #e3e3e3;
  border-radius: 8px;
  width: 100%;
  padding: 30px 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  /* & * {
    border: 1px solid gray;
  } */

  .numbering,
  .writer,
  .modifiedDate {
    padding: 0 3%;
    color: #808080;
    font-weight: 300;
    font-size: 14px;
  }

  .mainText {
    width: 100%;
    padding: 0 3rem;
    color: #000;
    font-weight: 500;
    font-size: 16px;

    /* 제목이 길어지면 말줄임표 */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mainText.read {
    color: #8f8f8f;
  }

  &:hover {
    background-color: #e3e3e3;
  }
`;
export default ListItemCss;
