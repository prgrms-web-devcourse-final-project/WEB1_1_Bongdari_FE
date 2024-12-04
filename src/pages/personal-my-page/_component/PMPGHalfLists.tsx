import { PMPGHalfListsCss } from './PMPGHalfListsCss';
import HalfList from '@/features/personal-my-page-half-list';
import { useMyAidData } from './logic/useMyAidData';
import { useMyMessageData } from './logic/useMyMessageData';

const PMPGHalfLists = () => {
  const { aidData } = useMyAidData();
  const { messageData } = useMyMessageData();

  return (
    <PMPGHalfListsCss>
      <HalfList data={aidData} listType="myVolunteer" />
      <HalfList data={messageData} listType="myMessage" />
    </PMPGHalfListsCss>
  );
};
export default PMPGHalfLists;
