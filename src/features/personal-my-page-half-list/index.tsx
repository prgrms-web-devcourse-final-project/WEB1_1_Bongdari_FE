import { HalfListCss } from './indexCss';
import { onClickMyMessage, onClickMyVolunteer } from './logic/onClickHalfList';
import { useHalfList } from './logic/useHalfList';
import LongListItem from '@/components/long-list-item';
import TitleWithPagenation from '@/features/personal-my-page-title-with-pagenation';

interface HalfListProps {
  listType: 'myVolunteer' | 'myMessage';
  data: { content_id: string; title: string; isRead?: boolean; mailWriter?: string }[] | undefined;
}
const HalfList: React.FC<HalfListProps> = ({ listType, data }) => {
  const { totPage, currPage, setCurrPage } = useHalfList({ dataLength: data?.length || 1 });
  return (
    <HalfListCss>
      <TitleWithPagenation
        title={listType === 'myVolunteer' ? '내 봉사 목록' : '내 쪽지 목록'}
        totPage={totPage}
        currPage={currPage}
        setCurrPage={setCurrPage}
      />
      {!data || data.length === 0 ? (
        listType === 'myVolunteer' ? (
          <div className="noData">내 봉사 데이터가 없습니다</div>
        ) : (
          <div className="noData">내 쪽지가 없습니다</div>
        )
      ) : (
        <div className="listWrap">
          {data.map((v, i) => {
            const isMyVolunteer = listType === 'myVolunteer';

            return (
              <LongListItem
                key={i}
                content_id={v.content_id}
                mainText={v.title}
                getContentId={
                  isMyVolunteer ? () => onClickMyVolunteer(v.content_id) : () => onClickMyMessage(v.content_id)
                }
                isRead={!isMyVolunteer ? v.isRead : undefined}
                mailWriter={!isMyVolunteer ? v.mailWriter : undefined}
              />
            );
          })}
        </div>
      )}
    </HalfListCss>
  );
};
export default HalfList;
