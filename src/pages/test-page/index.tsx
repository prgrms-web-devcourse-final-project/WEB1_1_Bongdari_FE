import { useEffect, useState } from 'react';
import axiosInstance from '@/api/apis';

// 타입 정의
interface CenterProfile {
  name: string;
  contact_number: string;
  introduce: string;
  homepage_link: string;
  account_id: string;
  account_pw: string;
}

export default function TestPage() {
  const [centerId, setCenterId] = useState<string>('');
  const [centerProfile, setCenterProfile] = useState<CenterProfile | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const fetchCenterData = async (id: string) => {
    if (!id) return; // id가 없으면 리턴

    setIsLoading(true);
    setError('');

    try {
      const response = await axiosInstance.get(`/api/center/profile/${id}`);
      const data: CenterProfile = response.data;
      setCenterProfile(data);
      console.log('센터 데이터:', centerProfile);
    } catch (e) {
      console.error('에러 발생:', e);
      setError('센터 정보를 불러오는데 실패했습니다.');
      setCenterProfile(null);
    } finally {
      setIsLoading(false);
    }
  };

  // centerId가 변경될 때마다 데이터 fetch
  useEffect(() => {
    if (centerId) {
      fetchCenterData(centerId);
    }
  }, [centerId]); // 의존성 배열에 centerId 추가

  const handleLoadProfile = (id: string) => {
    setCenterId(id);
  };

  return (
    <>
      <h1>메인페이지입니다.</h1>

      <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <button onClick={() => handleLoadProfile('1')} style={{ marginRight: '10px' }}>
          센터 1 정보보기
        </button>
        <button onClick={() => handleLoadProfile('2')}>센터 2 정보보기</button>
      </div>

      {isLoading && <p>로딩 중...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {centerProfile && !isLoading && !error && (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '4px' }}>
          <h2 style={{ marginBottom: '15px' }}>{centerProfile.name}</h2>
          <p style={{ marginBottom: '10px' }}>연락처: {centerProfile.contact_number}</p>
          <p style={{ marginBottom: '10px' }}>소개: {centerProfile.introduce}</p>
          <a
            href={centerProfile.homepage_link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'blue', textDecoration: 'none' }}>
            홈페이지 방문
          </a>
        </div>
      )}
    </>
  );
}
