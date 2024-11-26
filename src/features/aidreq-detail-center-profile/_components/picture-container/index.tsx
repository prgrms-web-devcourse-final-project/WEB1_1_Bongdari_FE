import { ProfileImg } from './indexCss';
import { aidRqCenterProfileType } from '@/shared/types/aidrq-detail-center/aidRqCenterProfileType';

interface PictureContainerProps {
  centerProfile: aidRqCenterProfileType;
}

const PictureContainer: React.FC<PictureContainerProps> = ({ centerProfile }) => {
  return <ProfileImg imgurl={centerProfile.img_url}></ProfileImg>;
};

export default PictureContainer;
