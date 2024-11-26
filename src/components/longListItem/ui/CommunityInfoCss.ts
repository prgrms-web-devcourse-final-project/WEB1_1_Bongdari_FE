import styled from 'styled-components';

const CommunityInfoCss = styled.div`
  display: flex;
  justify-content: end;
  width: 200px;
  .writer,
  .modifiedDate {
    margin: 0 10px;
    text-align: center;
    color: #808080;
    font-weight: 300;
    font-size: 14px;
    width: 100px;
  }
  .writer {
    color: #a4a4a4;

    /* 길어지면 말줄임표 */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default CommunityInfoCss;
