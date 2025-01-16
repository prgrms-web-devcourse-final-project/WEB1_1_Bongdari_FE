import { TinyMceContainer } from '@/components/tinyMCE-editor';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 16px;

  & > p {
    font-size: 12px;
    color: #373737;
    padding-bottom: 10px;
  }
`;

export const CreateTextArea = styled(TinyMceContainer)`
  height: 500px;
`;
