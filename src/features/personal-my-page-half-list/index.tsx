import { myMessageType, myVolunteerType } from '@/shared/types/person-profile/personProfile';
import { HalfListCss } from './indexCss';
import { useHalfList } from './logic/useHalfList';
import LongListItem from '@/components/long-list-item';
import TitleWithPagenation from '@/features/personal-my-page-title-with-pagenation';

interface HalfListProps {
  listType: 'myVolunteer' | 'myMessage';
  // data: { content_id: string; title: string; isRead?: boolean; mailWriter?: string }[] | undefined;
}
const HalfList: React.FC<HalfListProps> = ({ listType }) => {
  const { data, totPage, currPage, setCurrPage, onClickMyVolunteer, onClickMyMessage } = useHalfList({ listType });

  // 타입 가드: myVolunteerType 확인
  const isMyVolunteerType = (data: myVolunteerType[] | myMessageType[]): data is myVolunteerType[] => {
    return (data as myVolunteerType[])[0]?.recruit_board !== undefined;
  };

  if (listType === 'myVolunteer') {
    return (
      <HalfListCss>
        <TitleWithPagenation title="내 봉사 목록" totPage={totPage} currPage={currPage} setCurrPage={setCurrPage} />
        {!data || data.length === 0 ? (
          <div className="noData">내 봉사 데이터가 없습니다</div>
        ) : (
          <div className="listWrap">
            {isMyVolunteerType(data) &&
              data.map((v, i) => {
                return (
                  <LongListItem
                    key={i}
                    content_id={v.id.toString()}
                    mainText={v.recruit_board.title}
                    getContentId={() => onClickMyVolunteer(v.id.toString())}
                  />
                );
              })}
          </div>
        )}
      </HalfListCss>
    );
  } else if (listType === 'myMessage') {
    return (
      <HalfListCss>
        <TitleWithPagenation title="내 쪽지 목록" totPage={totPage} currPage={currPage} setCurrPage={setCurrPage} />
        {!data || data.length === 0 ? (
          <div className="noData">내 쪽지가 없습니다</div>
        ) : (
          <div className="listWrap">
            {!isMyVolunteerType(data) &&
              data.map((v, i) => {
                return (
                  <LongListItem
                    key={i}
                    content_id={v.id.toString()}
                    mainText={v.title}
                    getContentId={() => onClickMyMessage(v.id.toString())}
                    isRead={v.is_read}
                    mailWriter={v.sender_name}
                  />
                );
              })}
          </div>
        )}
      </HalfListCss>
    );
  }
};
export default HalfList;
