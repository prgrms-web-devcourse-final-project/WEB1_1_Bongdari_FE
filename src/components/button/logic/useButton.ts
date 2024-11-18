const useButton = () => {
  const onClickButton = async () => {
    console.log('클릭되었습니다.');
  };

  return { onClickButton };
};

export default useButton;
