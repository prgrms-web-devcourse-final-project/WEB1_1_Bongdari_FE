import LongListItem from '@/components/long-list-item';
import { Bottom, Title, Top, Wrapper } from './indexCss';
import { useMainCommunity } from './logic/fetchMainCommunity';
import { communityListType } from '@/shared/types/community-type/CommuntiyTypes';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Community = () => {
  const { data, isLoading, error } = useMainCommunity();

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생!</div>;

  const mainCommunity: communityListType[] = data?.content.slice(0, 6) || [];

  return (
    <Wrapper>
      <Top>
        <Title>커뮤니티</Title>
        <Link to="/community">
          <button>더보기</button>
        </Link>
      </Top>
      <Bottom>
        {mainCommunity.map((item, index) => (
          <LongListItem
            key={index}
            content_id={item.id.toString()}
            mainText={item.title}
            writer={item.writer_nickname}
            modifiedDate={item.created_at}
            getContentId={(id) => {
              console.log(id);
            }}></LongListItem>
        ))}
      </Bottom>
    </Wrapper>
  );
};

export default Community;
