import { useState } from 'react';
import TabMenu from './_components/tab-menu';
import { SectionBox, SectionWrapper } from './indexCss';
import GoAidReqSet from './_components/go-aidreq-set';
import MessageSet from './_components/message-set';
import ReviewSet from './_components/review-set';

interface ManageCenterPostSetProps {
  centerId: string;
}

const ManageCenterPostSet = ({ centerId }: ManageCenterPostSetProps) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<number>(0);
  const [readStates, setReadStates] = useState<boolean[]>(Array(6).fill(false));

  return (
    <SectionWrapper>
      <TabMenu selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem} />
      <SectionBox>
        {selectedMenuItem === 0 ? (
          <GoAidReqSet />
        ) : selectedMenuItem === 1 ? (
          <MessageSet readStates={readStates} setReadStates={setReadStates} />
        ) : (
          <ReviewSet centerId={centerId} />
        )}
      </SectionBox>
    </SectionWrapper>
  );
};

export default ManageCenterPostSet;
