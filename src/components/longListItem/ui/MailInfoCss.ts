import styled from 'styled-components';

const ChatInfoCss = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  width: 40%;
  /* & * {
    border: 1px solid gray;
  } */
  /* border: 1px solid gray; */
  .mailWriter {
    margin-right: 10px;
    width: 50%;
    text-align: right;
    color: #a4a4a4;

    /* 길어지면 말줄임표 */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export default ChatInfoCss;
