import { centerProfileType } from '@/shared/types/center-profile/centerProfile';
import { ProfileImg } from './indexCss';

interface PictureContainerProps {
  centerProfile: centerProfileType;
}

const PictureContainer: React.FC<PictureContainerProps> = ({ centerProfile }) => {
  return <ProfileImg imgurl={centerProfile.img_url || '/assets/imgs/no-img-center.svg'}></ProfileImg>;
};

export default PictureContainer;
