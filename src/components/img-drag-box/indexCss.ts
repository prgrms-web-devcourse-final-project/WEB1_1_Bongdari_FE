import styled from 'styled-components';

export const UploadBoxContainer = styled.div<{ isDragging: boolean }>`
  width: 100%;
  height: 200px;
  border: 2px dashed ${(props) => (props.isDragging ? '#4a90e2' : '#ccc')};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${(props) => (props.isDragging ? 'rgba(74, 144, 226, 0.1)' : '#f8f8f8')};

  label {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  &:hover {
    border-color: #4a90e2;
    background-color: rgba(74, 144, 226, 0.1);
  }

  p {
    text-align: center;
    color: #666;
    margin: 5px 0;
  }
`;
