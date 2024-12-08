import { PMPGHalfListsCss } from './PMPGHalfListsCss';
import HalfList from '@/features/personal-my-page-half-list';

const PMPGHalfLists = () => {
  return (
    <PMPGHalfListsCss>
      <HalfList listType="myVolunteer" />
      <HalfList listType="myMessage" />
    </PMPGHalfListsCss>
  );
};
export default PMPGHalfLists;
