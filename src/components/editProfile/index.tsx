import { EditProfileCss } from './indexCss';
import { SubmitButton } from '../button';
import InputWithLabel from './input-with-label/InputWithLabel';
import EditProfileImg from './edit-profile-img/EditProfileImg';

interface EditProfileProps {
  profileImg?: string;
  profileNickname?: string;
  profileDescripton?: string;
}

const EditProfile: React.FC<EditProfileProps> = ({ profileImg, profileNickname, profileDescripton }) => {
  const getInput = (str: string) => {
    console.log(str);
  };
  return (
    <EditProfileCss>
      <section className="imgSection">
        <EditProfileImg profileImg={profileImg} />
      </section>
      <section className="inputSection">
        <InputWithLabel getInput={getInput} initialVal={profileNickname} placeholder="닉네임을 입력하세요" />
        <InputWithLabel
          getInput={getInput}
          height="280px"
          initialVal={profileDescripton}
          placeholder="나에 대한 설명을 입력해보세요"
          isTextArea={true}
        />
        <div className="editBtnWrap">
          <SubmitButton label="수정하기" />
        </div>
      </section>
    </EditProfileCss>
  );
};
export default EditProfile;
