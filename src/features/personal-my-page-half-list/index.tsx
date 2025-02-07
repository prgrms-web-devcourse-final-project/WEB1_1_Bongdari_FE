import { myMessageType, myVolunteerType } from '@/shared/types/person-profile/personProfile';
import { HalfListCss } from './indexCss';
import { useHalfList } from './logic/useHalfList';
import LongListItem from '@/components/long-list-item';
import TitleWithPagenation from '@/features/personal-my-page-title-with-pagenation';
import MessageReadModal from '../message-read-modal';
import { Link } from 'react-router-dom';

interface HalfListProps {
  listType: 'myVolunteer' | 'myMessage';
}

const HalfList: React.FC<HalfListProps> = ({ listType }) => {
  const { myData, totPage, currPage, setCurrPage, onClickMyMessage, msgOpenId, isMsgModalOpen, onCloseMsgModal } =
    useHalfList({ listType });

  // 타입 가드: myVolunteerType 확인
  const isMyVolunteerType = (myData: myVolunteerType[] | myMessageType[]): myData is myVolunteerType[] => {
    return (myData as myVolunteerType[])[0]?.recruit_board !== undefined;
  };

  if (listType === 'myVolunteer') {
    return (
      <HalfListCss>
        <TitleWithPagenation title="내 봉사 목록" totPage={totPage} currPage={currPage} setCurrPage={setCurrPage} />

        <section className="contentWrap">
          {!myData || myData.length === 0 ? (
            <div className="noData">내 봉사 데이터가 없습니다</div>
          ) : (
            <div className="listWrap">
              {isMyVolunteerType(myData) &&
                myData.map((v, i) => {
                  return (
                    <Link to={`/aidrqdetail/${v.recruit_board.id}`} key={i}>
                      <LongListItem content_id={v.id.toString()} mainText={v.recruit_board.title} />
                    </Link>
                  );
                })}
            </div>
          )}
        </section>
      </HalfListCss>
    );
  } else if (listType === 'myMessage') {
    return (
      <HalfListCss>
        <TitleWithPagenation title="받은 쪽지 목록" totPage={totPage} currPage={currPage} setCurrPage={setCurrPage} />

        <section className="contentWrap">
          {!myData || myData.length === 0 ? (
            <div className="noData">내 쪽지가 없습니다</div>
          ) : (
            <div className="listWrap">
              {!isMyVolunteerType(myData) &&
                myData.map((v, i) => {
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
        </section>

        {isMsgModalOpen && <MessageReadModal handleModalClose={onCloseMsgModal} noteId={msgOpenId} type="volunteer" />}
      </HalfListCss>
    );
  }
};
export default HalfList;
