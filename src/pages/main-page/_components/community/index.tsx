import LongListItem from '@/components/long-list-item';
import { Bottom, Title, Top, Wrapper } from './indexCss';

const dummyData = [
  ['1', '서울도서관봉사활동', '김민준', '2024.11.29'],
  ['1', '서울도서관봉사활동', '김민준', '2024.11.29'],
  ['1', '서울도서관봉사활동', '김민준', '2024.11.29'],
  ['1', '서울도서관봉사활동', '김민준', '2024.11.29'],
  ['1', '서울도서관봉사활동', '김민준', '2024.11.29'],
  ['1', '서울도서관봉사활동', '김민준', '2024.11.29']
];

const Community = () => {
  return (
    <Wrapper>
      <Top>
        <Title>커뮤니티</Title>
        <button>더보기</button>
      </Top>
      <Bottom>
        {dummyData.map((item) => (
          <LongListItem
            key={item[0]}
            content_id={item[0]}
            mainText={item[1]}
            mailWriter={item[2]}
            modifiedDate={item[3]}
            getContentId={(id) => {
              console.log(id);
            }}></LongListItem>
        ))}
      </Bottom>
    </Wrapper>
  );
};

export default Community;
