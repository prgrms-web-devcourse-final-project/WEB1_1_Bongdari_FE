import { useState } from 'react';
import { EditProfileImgCss } from './EditProfileImgCss';

const EditProfileImg = ({ profileImg, setImg }: { profileImg?: string; setImg: (file: File) => void }) => {
  // TODO: changeImgBtn 클릭시 사진 선택 기능
  const [imgUrl, setImgUrl] = useState<string>(profileImg ?? '');

  const pickProfileImg = (ev: React.ChangeEvent<HTMLInputElement>) => {
    console.log('img activated');

    const file = ev.target.files?.[0];
    if (file) {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml', 'image/avif'];
      if (!allowedTypes.includes(file.type)) {
        alert('지원하지 않는 이미지 형식입니다. JPG, PNG, GIF, WebP, SVG, AVIF 형식만 업로드 가능합니다.');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert('파일 크기는 5MB 이하여야 합니다.');
        return;
      }

      setImg(file);

      const reader = new FileReader();
      reader.onload = (e) => {
        // onloadend 사용시 오류나도 다 읽으면 호출됨
        const result = e.target?.result as string;
        // const result = reader.result as string;
        setImgUrl(result);
      };

      reader.onerror = () => {
        alert('파일을 읽는 도중 오류가 발생했습니다.');
      };

      reader.readAsDataURL(file);
    }
    console.log(imgUrl);
  };

  return (
    <EditProfileImgCss>
      <div className="profileWrap">
        <img className="profileImg" src={imgUrl || '/assets/imgs/no-img-person.svg'} />
        <label className="changeImgBtn" htmlFor="file">
          <img src="/assets/imgs/plus.svg" />
        </label>
      </div>
      <input
        id="file"
        type="file"
        accept="image/jpeg, image/png, image/gif, image/webp, image/svg+xml, image/avif"
        onChange={pickProfileImg}
      />
    </EditProfileImgCss>
  );
};
export default EditProfileImg;
