import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import AidReqListItem from '@/components/aidreq-list-Item';
import { Wrapper } from './indexCss';
import { fetchListShort } from './logic/fetchListShort';
import { AidRequest } from '@/shared/types/aidrq-list-item/aidrqListItemType';

const AidRqListShort = () => {
  const [aidRequests, setAidRequests] = useState<AidRequest[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchListShort();
      setAidRequests(data.content);
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      {aidRequests.map((request) => (
        <AidReqListItem
          key={request.id}
          width="calc((100% - 20px) / 3)"
          onClick={() => {
            navigate(`/aidrqdetail/${request.id}`, {
              state: { centerId: request.center.id } //센터id는 state로 전달
            });
          }}
          request={request}></AidReqListItem>
      ))}
    </Wrapper>
  );
};

export default AidRqListShort;
