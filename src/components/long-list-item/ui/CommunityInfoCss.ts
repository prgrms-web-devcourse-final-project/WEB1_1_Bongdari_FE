import styled from 'styled-components';

const CommunityInfoCss = styled.div`
  display: flex;
  justify-content: center;
  min-width: 22%;
  max-width: 40%;

  .writer,
  .modifiedDate {
    margin: 0 15px;
    text-align: center;
    color: #808080;
    font-weight: 300;
    font-size: 14px;
    width: 100px;
  }
  .writer {
    color: #a4a4a4;
    cursor: pointer;

    /* 길어지면 말줄임표 */
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export default CommunityInfoCss;
