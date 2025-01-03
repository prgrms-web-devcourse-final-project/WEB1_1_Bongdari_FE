import { ApplyButton, EditProfileCss } from './indexCss';
import InputWithLabel from '@/features/input-with-label/InputWithLabel';
import EditProfileImg from './_component/EditProfileImg';
import { useEditMyProfile } from './logic/useEditMyProfile';

interface EditProfileProps {
  profileImg?: string;
  profileNickname?: string;
  profileDescription?: string;
}

const EditProfile: React.FC<EditProfileProps> = ({ profileImg, profileNickname, profileDescription }) => {
  const { setImg, setNickname, setDescripton, onClickEditMyProfile } = useEditMyProfile({
    profileNickname,
    profileDescription
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
        <InputWithLabel getInput={setNickname} initialVal={profileNickname} placeholder="닉네임을 입력하세요" />
        <InputWithLabel
          getInput={setDescripton}
          $height="280px"
          initialVal={profileDescription}
          placeholder="나에 대한 설명을 입력해보세요"
          isTextArea={true}
        />
        <div className="editBtnWrap">
          <ApplyButton label="수정하기" type="blue" onClick={onClickEditMyProfile} />
        </div>
      </section>
    </EditProfileCss>
  );
};
export default EditProfile;
