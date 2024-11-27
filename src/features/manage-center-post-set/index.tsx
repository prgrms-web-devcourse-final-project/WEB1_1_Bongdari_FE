import { useState } from 'react';
import TabMenu from './_components/tab-menu';
import { SectionBox, SectionWrapper } from './indexCss';
import GoAidReqSet from './_components/go-aidreq-set';
import NoteSet from './_components/note-set';
import ReviewSet from './_components/review-set';

const ManageCenterPostSet = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<number>(0);
  const [readStates, setReadStates] = useState<boolean[]>(Array(6).fill(false));

  return (
    <SectionWrapper>
      <TabMenu selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem} />
      <SectionBox>
        {selectedMenuItem === 0 ? (
          <GoAidReqSet />
        ) : selectedMenuItem === 1 ? (
          <NoteSet readStates={readStates} setReadStates={setReadStates} />
        ) : (
          <ReviewSet />
        )}
      </SectionBox>
    </SectionWrapper>
  );
};

export default ManageCenterPostSet;
