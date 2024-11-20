import { useState } from 'react';
import PostCode from './PostCode';

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
      <div>
        <div>
          <span>
            <strong>주소: </strong>
            {address ? address : '주소를 입력하세요'}
          </span>
          <button onClick={handleAddressModal}>주소 입력</button>
        </div>
        {isModalOpen && <PostCode onSaveAddress={handleSaveAddress} />}
      </div>
      <div>해당 주소가 반영된 지도가 들어갈 자리</div>
    </>
  );
}
