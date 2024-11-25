import ImageUploader from './_components/image-uploader';

const EditCenterProfile = () => {
  return (
    <div>
      <h1>안녕하세요, 서울 도서관님!</h1>
      <div>
        <div>
          <ImageUploader />
          <div>수정폼 wrapper</div>
        </div>
        <div>
          <button>수정하기</button>
        </div>
      </div>
    </div>
  );
};

export default EditCenterProfile;
