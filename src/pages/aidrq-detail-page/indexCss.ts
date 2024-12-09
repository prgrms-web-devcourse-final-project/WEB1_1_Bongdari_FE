import styled from 'styled-components';

interface PresentResponse {
  status: string;
  attended: boolean;
}

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  padding: 250px 0;
`;

export const ButtonBox = styled.div<{ presentstate: PresentResponse | null; recstatus: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  gap: 10px;

  & > button:nth-of-type(1) {
    width: 220px;
    height: 53px;
    border: 1px solid ${(props) => (props.presentstate?.attended === true ? '#2382ff' : '#E2E2E2')};
    border-radius: 13px;
    background-color: ${(props) => (props.presentstate?.attended === true ? 'white' : '#E2E2E2')};
    color: ${(props) => (props.presentstate?.attended === true ? '#2382ff' : '#ADADAD')};
    font-size: 14px;
    font-weight: 600;
    transition: 0.2s;

    &:hover {
      cursor: ${(props) => (props.presentstate?.attended === true ? 'pointer' : '')};
      background-color: ${(props) => (props.presentstate?.attended === true ? '#e2efff' : '#E2E2E2')};
    }
  }

  & > button:nth-of-type(2) {
    width: 220px;
    height: 53px;
    background-color: ${(props) => (props.presentstate && props.recstatus !== 'RECRUITING' ? '#E2E2E2' : '#2382ff')};
    border: none;
    border-radius: 13px;
    outline: none;
    color: ${(props) => (props.presentstate && props.recstatus !== 'RECRUITING' ? '#ADADAD' : 'white')};
    font-size: 14px;
    font-weight: 600;
    transition: 0.2s;

    &:hover {
      cursor: ${(props) => (props.presentstate && props.recstatus !== 'RECRUITING' ? '' : 'pointer')};
      background-color: ${(props) => (props.presentstate && props.recstatus !== 'RECRUITING' ? '#E2E2E2' : '#0a66de')};
    }
  }
`;
