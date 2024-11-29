import MainBanner from '@/features/main-banner';
import { RankAndCommu, Wrapper } from './MainpageCss';
import WriteAidReqButtonComponent from '@/components/write-aidreq-button';
import AidRqRecentList from './_components/aidrq-recent-list';
import Ranking from './_components/ranking';
import Community from './_components/community';

export default function MainPage() {
  const [address, setAddress] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSaveAddress = (newAddress: string) => {
    setAddress(newAddress); // 저장된 주소를 업데이트
  };

  const handleAddressModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      메인페이지입니다.
      <Button label="버튼이다" />
    </>
  );
}
