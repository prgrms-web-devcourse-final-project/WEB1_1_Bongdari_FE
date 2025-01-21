import { Link, useNavigate } from 'react-router-dom';
import { ApplyButton, CommuntiyListCss, LoadingCss, ErrorCss } from './indexCss';
import LongListItem from '@/components/long-list-item';
import CustomPagination from '@/features/custom-pagnation';
import { useLoginStore } from '@/store/stores/login/loginStore';
import { useCommunityList } from './logic/useCommunityList';

const CommuntiyList = () => {
  const { listData, totPage, currPage, isLoading, error } = useCommunityList();
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
        {isLoading ? <LoadingCss>Loading...</LoadingCss> : ''}
        {error ? <ErrorCss>{error.message}</ErrorCss> : ''}
        {listData?.length ? '' : <div className="noData">검색 결과가 없습니다</div>}
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
      <CustomPagination totPage={totPage} currPage={currPage} />
      <div className="btnWrap">
        {isLoggedIn ? (
          <ApplyButton
            label="작성하기"
            type="white"
            onClick={() => {
              navigate('/communitycreate');
            }}
          />
        ) : (
          ''
        )}
      </div>
    </CommuntiyListCss>
  );
};
export default CommuntiyList;
