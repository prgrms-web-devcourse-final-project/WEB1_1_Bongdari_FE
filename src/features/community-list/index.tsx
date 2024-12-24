import { Link, useNavigate } from 'react-router-dom';
import { CommuntiyListCss } from './indexCss';
import { SubmitButton } from '@/components/button';
import LongListItem from '@/components/long-list-item';
import CustomPagination from '@/features/custom-pagnation';
import { useLoginStore } from '@/store/stores/login/loginStore';
import { useCommunityList } from '@/store/queries/community-list-common-query/useCommunityList';

const CommuntiyList = ({ searchWord }: { searchWord: string }) => {
  const { listData, totPage, currPage, setCurrPage } = useCommunityList({
    searchWord
  });
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
  const navigate = useNavigate();
  return (
    <CommuntiyListCss>
      <div className="listHeader">
        <i>번호</i>
        <i>제목</i>
        <div>
          <i>작성자</i>
          <i>등록날짜</i>
        </div>
      </div>
      <div className="listWrap">
        {listData?.map((v, i) => (
          <Link key={i} to={`/community/${v.id}`}>
            <LongListItem
              content_id={`${v.id}`}
              indexNum={v.id}
              mainText={v.title}
              writer={v.writer_nickname}
              modifiedDate={v.created_at}
            />
          </Link>
        ))}
      </div>
      <CustomPagination totPage={totPage} currPage={currPage} setCurrPage={setCurrPage} />
      <div className="btnWrap">
        <SubmitButton
          label="작성하기"
          variant={isLoggedIn ? 'enabledTwo' : 'disabled'}
          onClick={() => {
            navigate('/communitycreate');
          }}
        />
      </div>
    </CommuntiyListCss>
  );
};
export default CommuntiyList;
