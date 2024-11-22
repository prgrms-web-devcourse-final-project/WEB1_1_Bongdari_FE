import { SubmitButton } from '@/components/button';
import { PPPG_Component1Css } from './indexCss';

interface PPPG_Component1Props {
  user_id: string;
  profileName: string;
  profileMitten: string;
  profileImg?: string;
}

const PPPG_Component1: React.FC<PPPG_Component1Props> = ({ user_id, profileImg, profileName, profileMitten }) => {
  return (
    <PPPG_Component1Css id={user_id}>
      <img src={profileImg} alt="" />
      <p>
        <i>{profileName}</i>
        <i>{profileMitten}</i>
      </p>
      <SubmitButton label="쪽지 전달하기" />
    </PPPG_Component1Css>
  );
};
export default PPPG_Component1;
