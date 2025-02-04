import { ApplyButton, ApplyButton2, EditProfileCss } from './indexCss';
import InputWithLabel from '@/features/input-with-label/InputWithLabel';
import EditProfileImg from './_component/EditProfileImg';
import { useEditMyProfile } from './logic/useEditMyProfile';
import { VolunteerInfo } from '@/store/queries/volunteer-mypage/usePutMyProfile';

interface EditProfileProps {
  profileImg?: string;
  currentUserInfo: VolunteerInfo;
}

const EditProfile: React.FC<EditProfileProps> = ({ profileImg, currentUserInfo }) => {
  const { setImg, setNickname, setDescripton, onClickEditMyProfile } = useEditMyProfile({
    currentUserInfo,
    profileNickname: currentUserInfo.nickname,
    profileDescription: currentUserInfo.common_basic_info.introduce
  });
  return (
    <EditProfileCss>
      <section className="imgSection">
        <EditProfileImg profileImg={profileImg} setImg={setImg} />
        <div className="editBtnWrap">
          <ApplyButton label="수정하기" type="blue" onClick={onClickEditMyProfile} />
        </div>
      </section>
      <section className="inputSection">
        <InputWithLabel
          getInput={setNickname}
          initialVal={currentUserInfo.nickname}
          placeholder="닉네임을 입력하세요"
        />
        <InputWithLabel
          getInput={setDescripton}
          $height="230px"
          initialVal={currentUserInfo.common_basic_info.introduce}
          placeholder="나에 대한 설명을 입력해보세요"
          isTextArea={true}
        />
        <div className="editBtnWrap">
          <ApplyButton2 label="수정하기" type="blue" onClick={onClickEditMyProfile} />
        </div>
      </section>
    </EditProfileCss>
  );
};
export default EditProfile;
