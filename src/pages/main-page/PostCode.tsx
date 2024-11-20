import { useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';

// daum 주소 api 반환 데이터 타입 정의
interface PostcodeData {
  address: string; // 기본 주소
  addressType: 'R' | 'J'; // 'R' = 도로명 주소, 'J' = 지번 주소
  bname: string; // 동, 리
  buildingName: string; // 건물 이름
}

export default function PostCode({ onSaveAddress }: { onSaveAddress: (address: string) => void }) {
  const open = useDaumPostcodePopup(); // 스크립트 URL을 자동으로 관리
  const [fullAddress, setFullAddress] = useState<string>(''); // 전체 주소
  const [extraAddr, setExtraAddr] = useState<string>(''); // 동, 호수같은 상세 정보 입력 상태

  // handleComplete 함수에 전달되는 data의 타입을 PostcodeData로 정의
  const handleComplete = (data: PostcodeData) => {
    let address = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      address += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setFullAddress(address); // 전체 주소 상태 갱신
    setExtraAddr(''); // 상세주소 초기화

    console.log('전체 주소:', address);
    console.log('상세 주소:', extraAddr); // 이 값은 입력된 상세 주소가 아니라, `extraAddr`에 입력된 값임
  };

  const handleAddressPopup = () => {
    open({ onComplete: handleComplete });
  };

  // 주소를 부모 컴포넌트로 전달해 저장
  const handleSaveAddress = () => {
    const fullAddressWithExtra = `${fullAddress} ${extraAddr}`.trim();
    onSaveAddress(fullAddressWithExtra);
  };

  return (
    <>
      <div>
        <span>
          <strong>전체 주소: </strong> {fullAddress}
        </span>
        <button type="button" onClick={handleAddressPopup}>
          주소검색
        </button>

        <div>
          <label>상세 주소 (동/호수): </label>
          <input
            type="text"
            value={extraAddr}
            onChange={(e) => setExtraAddr(e.target.value)} // 상세 주소 입력 상태만 업데이트
            placeholder="상세주소 입력해주세요"
          />
        </div>

        <button onClick={handleSaveAddress}>주소저장</button>

        {/* 주소 미리보기 저장 전에 보일 수 있게*/}
        {/* <div>
          <strong>상세 주소: </strong> {extraAddr}
        </div> */}
      </div>
    </>
  );
}
