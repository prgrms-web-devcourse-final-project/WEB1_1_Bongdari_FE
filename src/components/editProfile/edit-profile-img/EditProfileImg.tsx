import { useState } from 'react';
import { EditProfileImgCss } from './EditProfileImgCss';

const EditProfileImg = ({ profileImg }: { profileImg?: string }) => {
  // TODO: changeImgBtn 클릭시 사진 선택 기능
  const [imgFile, setImgFile] = useState<string>('');

  const pickProfileImg = (ev: React.ChangeEvent<HTMLInputElement>) => {
    console.log('activated');
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

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setImgFile(result);
      };

      reader.onerror = () => {
        alert('파일을 읽는 도중 오류가 발생했습니다.');
      };

      reader.readAsDataURL(file);
      //   setThumbnailFileName(file.name);
    }
    console.log(imgFile);
  };

  return (
    <EditProfileImgCss>
      <img src={profileImg} alt="" />
      <label htmlFor="file">
        <button className="changeImgBtn">+</button>
      </label>
      <input
        type="file"
        accept="image/jpeg, image/png, image/gif, image/webp, image/svg+xml, image/avif"
        id="file"
        onChange={pickProfileImg}
      />
    </EditProfileImgCss>
  );
};
export default EditProfileImg;
