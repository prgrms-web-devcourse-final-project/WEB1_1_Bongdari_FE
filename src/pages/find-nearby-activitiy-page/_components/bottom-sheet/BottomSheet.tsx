import { ReactNode } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Header from './Header';
import { BOTTOM_SHEET_HEIGHT } from './BottomSheetOption';
import useBottomSheet from './logic/useBottomSheet';

interface BottomSheetProps {
  children: ReactNode;
}

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;

  position: fixed;
  z-index: 999;
  top: calc(100% - 90px);
  left: 0;
  right: 0;

  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  height: ${BOTTOM_SHEET_HEIGHT}px;

  background-color: #f9f9f9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  transition: transform 650ms ease-out;
`;

const BottomSheetContent = styled.div`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

function BottomSheet({ children }: BottomSheetProps) {
  const { sheet, content, toggleBottomSheetAtWeb } = useBottomSheet();

  return (
    <Wrapper ref={sheet}>
      <Header className="bottom-sheet-handle" onClick={toggleBottomSheetAtWeb} />
      <BottomSheetContent ref={content}>{children}</BottomSheetContent>
    </Wrapper>
  );
}

export default BottomSheet;
